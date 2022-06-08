import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Mutation {
    addUser: User
    modifyUser: User
    deleteUser: User
  }
`;

export default typeDefs;
