import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  extend type Query {
    user: User!
    users: [User!]!
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    average: Float!
    married: Boolean!
    arrayString: [String!]!
    username: String!
  }
`;
