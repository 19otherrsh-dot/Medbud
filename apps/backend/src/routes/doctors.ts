import { FastifyInstance } from "fastify";
import { prisma } from "../utils/prisma";

export async function doctorRoutes(server: FastifyInstance) {
  // List doctors with search & filter
  server.get("/", async (request) => {
    const {
      search,
      specialty,
      hospitalId,
      page = "1",
      limit = "10",
    } = request.query as {
      search?: string;
      specialty?: string;
      hospitalId?: string;
      page?: string;
      limit?: string;
    };

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);

    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { specialty: { contains: search, mode: "insensitive" } },
      ];
    }

    if (specialty) {
      where.specialty = { contains: specialty, mode: "insensitive" };
    }

    if (hospitalId) {
      where.hospitalId = hospitalId;
    }

    const [doctors, total] = await Promise.all([
      prisma.doctor.findMany({
        where,
        include: {
          hospital: {
            select: {
              id: true,
              name: true,
              city: true,
              accreditations: true,
            },
          },
        },
        skip,
        take,
        orderBy: { experienceYears: "desc" },
      }),
      prisma.doctor.count({ where }),
    ]);

    return {
      data: doctors,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / take),
      },
    };
  });

  // Get doctor detail
  server.get("/:id", async (request, reply) => {
    const { id } = request.params as { id: string };

    const doctor = await prisma.doctor.findUnique({
      where: { id },
      include: {
        hospital: true,
      },
    });

    if (!doctor) {
      return reply.status(404).send({ error: "Doctor not found" });
    }

    return { data: doctor };
  });
}
