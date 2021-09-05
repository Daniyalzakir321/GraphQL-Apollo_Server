// const { ApolloServer, gql } = require('apollo-server');
const { ApolloServer, gql } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const resolvers = require('./resolvers/resolvers');
const typeDefs = require('./typeDefs/typeDefs');
const mongoose = require('mongoose');

URL = '';
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, async (err) => {
    if (!err) {
        await console.log('MongoDB Connected.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

// With out express
// const server = new ApolloServer({ typeDefs, resolvers });
// server.listen().then(({ url }) => {
//     console.log(`Server Running On Port: ${url}`);
// });

// With apollor-server-express
const startServer = async () => {
    const app = express();
    const httpServer = http.createServer(app);
    const corsOptions = {
        origin: 'http://localhost:3000',
        credentials: true
    }
    app.use(cors(corsOptions))
    app.use(morgan('tiny'))
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start()
    server.applyMiddleware({ app: app, path: '/' })
    app.listen(4000, () => {
        console.log('Server Running On Port:', 4000)
    })
}
startServer()
