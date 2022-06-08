import { PrismaClient } from "@prisma/client";

export type ContextFunction = () => Promise<Context>;

export type Context = {
  client: PrismaClient;
};

export type Resolver = (
  root: any,
  args: any,
  context: Context,
  info: any
) => any;

export type ResolverKeys = "Query" | "Mutation";

export type Resolvers = {
  [key in ResolverKeys]?: {
    [key: string]: Resolver;
  };
};
