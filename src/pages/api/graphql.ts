import { ApolloServer } from "apollo-server-micro";
import cors from "micro-cors";

import { typeDefs, resolvers } from "@/apollo/typeDefs-resolvers/index";
import contextFunction from "@/apollo/server/context";

import type { IncomingMessage, ServerResponse } from "http";

const Cors = cors();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: contextFunction,
});

const startServer = server.start();

export default Cors(async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  await startServer;
  await server.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
