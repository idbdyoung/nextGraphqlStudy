import type { Prisma } from "@prisma/client";
import type { Resolver } from "@/apollo/server";

export const addUser: Resolver = (
  root,
  args: Prisma.UserCreateArgs,
  { client }
) => client.user.create(args);

export const modifyUser: Resolver = (
  root,
  args: Prisma.UserUpdateArgs,
  { client }
) => client.user.update(args);

export const deleteUser: Resolver = (
  root,
  { id }: { id: number },
  { client }
) => client.user.delete({ where: { id } });
