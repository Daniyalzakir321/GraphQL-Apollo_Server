const StudBooks = [
  { id:1,
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  { 
    id:2,
    title: 'City of Glass',
    author: 'Paul Auster',
  },
  { 
    id:3,
    title: 'City olass',
    author: 'Pauster',
  },
];

const AuthorDetails = [
  { 
    Id:1,
    Name: 'Steve',
    Author: 'Chopings',
  },
];
const resolvers = {
    Query: {
      // GET
      getBooks: () => StudBooks,
      getAuthors: () =>  AuthorDetails

      // POST

      // UPDATE

      // DELETE

    },
  };
  module.exports= resolvers

     