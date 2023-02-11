import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      username: String
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '9aacb090-5d58-4670-a8c1-8e057c83ff64',
          username: 'marcelocamillo',
        };
      },
      users: () => {
        return [
          {
            id: '9aacb090-5d58-4670-a8c1-8e057c83ff64',
            username: 'marcelocamillo',
          },
          {
            id: 'b354a810-4a65-41f3-9874-3fa8a4aee348',
            username: 'user1',
          },
          {
            id: '1aadc399-5ced-4e0f-a729-baba280358dc',
            username: 'user2',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
