import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema } from "type-graphql";

import { resolvers } from "@/generated/type-graphql";
import contextFunction from "@/apollo/server/context";

import type { NextApiRequest, NextApiResponse, PageConfig } from "next";

const server = new ApolloServer({
  schema: await buildSchema({
    resolvers,
  }),
  context: contextFunction,
});
const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await server.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
