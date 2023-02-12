const user = () => {
  return {
    id: () => '9aacb090-5d58-4670-a8c1-8e057c83ff64',
    name: () => 'Marcelo Camillo',
    age: () => 29,
    average: () => 50.55,
    married: () => false,
    arrayString: () => [],
  };
};

const users = () => {
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
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
