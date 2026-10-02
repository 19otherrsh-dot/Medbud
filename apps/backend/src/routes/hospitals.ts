import { FastifyInstance } from "fastify";
import { prisma } from "../utils/prisma";

export async function hospitalRoutes(server: FastifyInstance) {
  // List hospitals with search & filter
  server.get("/", async (request) => {
    const {
      search,
      city,
      specialty,
      accreditation,
      page = "1",
      limit = "10",
    } = request.query as {
      search?: string;
      city?: string;
      specialty?: string;
      accreditation?: string;
      page?: string;
      limit?: string;
    };

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);

    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { city: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    if (city) {
      where.city = { equals: city, mode: "insensitive" };
    }

    if (accreditation) {
      where.accreditations = { has: accreditation };
    }

    if (specialty) {
      where.doctors = {
        some: {
          specialty: { contains: specialty, mode: "insensitive" },
        },
      };
    }

    const [hospitals, total] = await Promise.all([
      prisma.hospital.findMany({
        where,
        include: {
          doctors: {
            select: {
              id: true,
              name: true,
              specialty: true,
              experienceYears: true,
              imageUrl: true,
            },
          },
          procedures: {
            select: {
              id: true,
              name: true,
              category: true,
              baseCostUSD: true,
            },
          },
          _count: {
            select: { doctors: true, procedures: true },
          },
        },
        skip,
        take,
        orderBy: { name: "asc" },
      }),
      prisma.hospital.count({ where }),
    ]);

    return {
      data: hospitals,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / take),
      },
    };
  });

  // Get hospital detail
  server.get("/:id", async (request, reply) => {
    const { id } = request.params as { id: string };

    const hospital = await prisma.hospital.findUnique({
      where: { id },
      include: {
        doctors: true,
        procedures: true,
      },
    });

    if (!hospital) {
      return reply.status(404).send({ error: "Hospital not found" });
    }

    return { data: hospital };
  });

  // Get unique cities (for filters)
  server.get("/meta/cities", async () => {
    const cities = await prisma.hospital.findMany({
      select: { city: true },
      distinct: ["city"],
      orderBy: { city: "asc" },
    });
    return { data: cities.map((c) => c.city) };
  });

  // Get unique specialties (for filters)
  server.get("/meta/specialties", async () => {
    const specialties = await prisma.doctor.findMany({
      select: { specialty: true },
      distinct: ["specialty"],
      orderBy: { specialty: "asc" },
    });
    return { data: specialties.map((s) => s.specialty) };
  });
}
