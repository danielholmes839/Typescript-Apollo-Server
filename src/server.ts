import { ApolloServer, gql } from 'apollo-server';

const schema = gql`
    type Query {
        hello: String!
    }
`

const resolvers = {
    Query: {
        hello: () => 'world'
    }
}

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
    introspection: true,
    playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});