"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema = apollo_server_1.gql `
    type Query {
        hello: String!
    }
`;
const resolvers = {
    Query: {
        hello: () => 'world'
    }
};
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
    introspection: true,
    playground: true,
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
