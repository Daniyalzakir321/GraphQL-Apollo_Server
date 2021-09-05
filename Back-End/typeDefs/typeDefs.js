// const { gql } = require('apollo-server');
const { ApolloServer, gql }= require('apollo-server-express');


const typeDefs = gql`
#Define Schema Type
# ! = Necessary Field
type Book {
  id: ID
  title: String
  author: String
}
#getBooks going to resolver, [Books]=> is the schema type
type Query {
  getBooks: [Book]
}

type Authors {
  Id: Int!
  Name: String
  Author: String
}
type Query {
  getAuthors: [Authors]
}



input AddBooks{
  id: String
  title: String
  author: String
}
type Mutation {
  #POST
  addBooks( post:AddBooks ):Book
  #UPDATE
  updateBooks( id:String, post:AddBooks ):Book
  #DELETE
  deleteBooks( id:String ):String
}
`;

module.exports = typeDefs;
