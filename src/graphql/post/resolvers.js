const post = () => {
  return {
    id: () => 'cfae5b00-dacb-412a-bb04-3c7e60317741',
    title: () => 'Title title',
  };
};

const posts = () => {
  return [
    {
      id: '67f5e646-6993-48b6-b92c-c933d394fc15',
      title: 'Title 1',
    },
    {
      id: 'a45fdfcc-0a17-4a5d-a906-4a6ef3bf3212',
      title: 'Title 2',
    },
    {
      id: '4515dcb4-6549-4772-85a2-bd1d2fb3a0c1',
      title: 'Title 3',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
