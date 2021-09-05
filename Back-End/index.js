
const { ApolloServer, gql } = require('apollo-server');
const resolvers= require('./resolvers/resolvers')
const typeDefs= require('./typeDefs/typeDefs')
const Userdb= require('./models/schema')

const mongoose = require('mongoose')
URL=''
mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});



const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
  