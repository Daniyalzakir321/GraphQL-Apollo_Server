
const { ApolloServer, gql } = require('apollo-server');
const resolvers= require('./resolvers/resolvers')
const typeDefs= require('./typeDefs/typeDefs')

const Books = [
    { id:1,
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    { 
      id:2,
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
  