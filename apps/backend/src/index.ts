import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import dotenv from "dotenv";
import { authRoutes } from "./routes/auth";
import { hospitalRoutes } from "./routes/hospitals";
import { doctorRoutes } from "./routes/doctors";
import { healthRoutes } from "./routes/health";

dotenv.config();

const server = Fastify({
  logger: true,
});

// Plugins
server.register(cors, { origin: "*" });
server.register(jwt, {
  secret: process.env.JWT_SECRET || "medbud-dev-secret-change-in-production",
});

// Decorate server with authenticate method
server.decorate("authenticate", async function (request: any, reply: any) {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.status(401).send({ error: "Unauthorized" });
  }
});

// Routes
server.register(healthRoutes, { prefix: "/api" });
server.register(authRoutes, { prefix: "/api/auth" });
server.register(hospitalRoutes, { prefix: "/api/hospitals" });
server.register(doctorRoutes, { prefix: "/api/doctors" });

const start = async () => {
  try {
    const port = parseInt(process.env.PORT || "8080");
    await server.listen({ port, host: "0.0.0.0" });
    server.log.info(`MedBud API running on port ${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
