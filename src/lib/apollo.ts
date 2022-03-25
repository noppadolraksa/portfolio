import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://portfolio-noppadolraksa.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
