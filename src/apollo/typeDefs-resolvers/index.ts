import queries from "./_queries";
import mutations from "./_mutations";
import user from "./user";

export const typeDefs = [queries, mutations, user.typeDefs];

export const resolvers = [user.resolvers];
