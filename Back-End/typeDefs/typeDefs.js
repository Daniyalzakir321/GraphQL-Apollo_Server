
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type Book {
  id: Int
  title: String
  author: String
}

type Query {
  books: [Book]
}
`;

module.exports= typeDefs;