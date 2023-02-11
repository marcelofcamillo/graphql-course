import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String!
      age: Int!
      average: Float!
      married: Boolean!
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => '9aacb090-5d58-4670-a8c1-8e057c83ff64',
      name: () => 'Marcelo Camillo',
      age: () => 29,
      average: () => 50.55,
      married: () => false,
      arrayString: () => [],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
