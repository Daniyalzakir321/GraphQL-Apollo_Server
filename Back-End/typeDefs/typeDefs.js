const { gql } = require('apollo-server');

const typeDefs = gql`
#Define Schema Type
# ! = Necessary Field
type Book {
  id: Int
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
  id: Int
  title: String
  author: String
}
type Mutation {
  #POST
  addBooks( post:AddBooks ):Book
  #UPDATE
  updateBooks( id:Int, post:AddBooks ):Book
  #DELETE
  deleteBooks( id:Int ):Int
}
`;

module.exports = typeDefs;
