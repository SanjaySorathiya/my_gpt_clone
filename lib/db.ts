import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

<<<<<<< HEAD


=======
// singleton pattern

// Reuse a single PrismaClient across hot reloads in development by stashing it
// on the global object. Without this, Next.js would create a new client (and
// connection pool) on every reload.
// Initialization
>>>>>>> c48641e9d6c8187ac2b054bf4000104ec73355b8
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

<<<<<<< HEAD
/**
 * Creates a Prisma client backed by the PostgreSQL adapter.
 *
 * @throws {Error} When `DATABASE_URL` is not set.
 */
=======
>>>>>>> c48641e9d6c8187ac2b054bf4000104ec73355b8
function createPrismaClient() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }

  
  const adapter = new PrismaPg({ connectionString: url });
  return new PrismaClient({ adapter });
}

<<<<<<< HEAD

/** Singleton Prisma client; reused in development to avoid hot-reload connection leaks. */
export const prisma = globalForPrisma.prisma ?? createPrismaClient();


=======
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

>>>>>>> c48641e9d6c8187ac2b054bf4000104ec73355b8
if(process.env.NODE_ENV !== "production"){
    globalForPrisma.prisma = prisma;
}