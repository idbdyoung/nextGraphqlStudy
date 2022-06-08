import type { Prisma } from "@prisma/client";
import type { Resolver } from "@/apollo/server";

export const users: Resolver = async (
  root,
  args: Prisma.UserFindManyArgs,
  { client }
) => client.user.findMany(args);

export const user: Resolver = (
  root,
  args: Prisma.UserFindUniqueArgs,
  { client }
) => client.user.findUnique(args);
