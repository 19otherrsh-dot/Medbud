import { FastifyInstance } from "fastify";

export async function healthRoutes(server: FastifyInstance) {
  server.get("/health", async () => {
    return {
      status: "ok",
      service: "MedBud Orchestration API",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
    };
  });
}
