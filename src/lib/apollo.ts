import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
const link = new HttpLink({ uri: "/graphql" });

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client;
