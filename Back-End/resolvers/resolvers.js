const { Studentdb } = require('../models/schema')

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
    getBooks: async () => await Studentdb.find(),
    getAuthors: async () => { return await AuthorDetails },
  },

  Mutation: {
    // POST
    addBooks: async (parent, args, context, info) => {
      const { title, author } = args.post
      const post = await new Studentdb({ title, author })
      await post.save()
      return post
      // const post = StudBooks.push({ title, author })
      // return post
    },

    // UPDATE
    updateBooks: async (parent, args, context, info) => {
      const { id } = args
      const { title, author } = args.post
      const updates = {}
      if (title !== undefined) { updates.title = title }
      if (author !== undefined) { author.title = author }
      console.log(id)
      const post = await Studentdb.findByIdAndUpdate(
        id,
        updates,
        { new: true },
      )
      return post
      // console.log(id)
      // StudBooks[id].title({ title });
      // StudBooks[id].author({ author });
      // const post = StudBooks[id];
      // return post
    },

    // DELETE  
    deleteBooks: async (parent, args, context, info) => {
      const { id } = args
      console.log(id)
      const post = await Studentdb.findByIdAndDelete(id)
      return post
      // const post = StudBooks.splice(id, 1);
      // return 200
    },

  }, //Mutation End

};
module.exports = resolvers

