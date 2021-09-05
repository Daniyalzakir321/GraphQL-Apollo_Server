const Studentdb = require('../models/schema')

const StudBooks = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster',
  },
  {
    id: 3,
    title: 'City olass',
    author: 'Pauster',
  },
];

const AuthorDetails = [
  {
    Id: 1,
    Name: 'Steve',
    Author: 'Chopings',
  },
];

const resolvers = {
  Query: {
    // GET
    getBooks: () => StudBooks,
    getAuthors: () => { return AuthorDetails },
  },

  Mutation: {
    // POST
    addBooks: async (parent, args, context, info) => {
      const { title, author } = args.post
      const post = await new StudBooks({ title, author }).save()
      return post
    },

    // UPDATE
    updateBooks: async (parent, args, context, info) => {
      const {id} = args
      const { title, author } = args.post
      const post = await StudBooks.findByIdAndUpdate(
        id,
        { title, author },
        { new: true },
        )
      return post
    },

    // DELETE  
    deleteBooks: async (parent, args, context, info) => {
    const {id} = args
    const post = await StudBooks.findByIdAndDelete(id)
    return {post,message:'Deleted'}
  },

  }, //Mutation End

};
module.exports = resolvers

