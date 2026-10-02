import { FastifyInstance } from "fastify";
import bcrypt from "bcryptjs";
import { prisma } from "../utils/prisma";

export async function authRoutes(server: FastifyInstance) {
  // Register
  server.post("/register", async (request, reply) => {
    const { email, password, firstName, lastName, country, role } =
      request.body as {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        country?: string;
        role?: string;
      };

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return reply.status(400).send({
        error: "Missing required fields: email, password, firstName, lastName",
      });
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return reply.status(409).send({ error: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user + patient profile
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: (role as any) || "PATIENT",
        patientProfile:
          !role || role === "PATIENT"
            ? {
                create: {
                  firstName,
                  lastName,
                  country: country || null,
                },
              }
            : undefined,
      },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        patientProfile: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            country: true,
          },
        },
      },
    });

    // Generate JWT
    const token = server.jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      { expiresIn: "7d" }
    );

    return reply.status(201).send({
      message: "Registration successful",
      user,
      token,
    });
  });

  // Login
  server.post("/login", async (request, reply) => {
    const { email, password } = request.body as {
      email: string;
      password: string;
    };

    if (!email || !password) {
      return reply
        .status(400)
        .send({ error: "Missing required fields: email, password" });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        patientProfile: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            country: true,
          },
        },
      },
    });

    if (!user) {
      return reply.status(401).send({ error: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return reply.status(401).send({ error: "Invalid email or password" });
    }

    const token = server.jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      { expiresIn: "7d" }
    );

    return {
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        patientProfile: user.patientProfile,
      },
      token,
    };
  });

  // Get current user (protected)
  server.get(
    "/me",
    { preHandler: [(server as any).authenticate] },
    async (request) => {
      const { id } = request.user as { id: string };

      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          email: true,
          role: true,
          createdAt: true,
          patientProfile: true,
          agentProfile: true,
        },
      });

      return { user };
    }
  );
}
