
const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers/resolvers');
const typeDefs = require('./typeDefs/typeDefs');
const mongoose = require('mongoose');

URL = '';
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, async (err) => {
    if (!err) {
        console.log('MongoDB Connected.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

const startServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => {
        console.log(`Server Running On Port: ${url}`);
    });
}
startServer()