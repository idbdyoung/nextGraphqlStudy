import { PrismaClient } from "@prisma/client";

export type ContextFunction = () => Promise<Context>;

export type Context = {
  prisma: PrismaClient;
};
