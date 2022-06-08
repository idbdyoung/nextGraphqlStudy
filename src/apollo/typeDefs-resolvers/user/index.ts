import { gql } from "apollo-server-micro";

import { users, user } from "./query";
import { addUser, modifyUser, deleteUser } from "./mutation";

import type { Resolvers } from "../../server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
`;

const resolvers: Resolvers = {
  Query: {
    users,
    user,
  },
  Mutation: {
    addUser,
    modifyUser,
    deleteUser,
  },
};

export default {
  typeDefs,
  resolvers,
};
