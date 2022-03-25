import { ApolloServer } from "apollo-server-micro";
import { createContext } from "src/graphql/context";
import { schema } from "src/graphql/schema";
import Cors from "micro-cors";

const cors = Cors({
  allowMethods: ["POST", "GET"],
});
const apolloServer = new ApolloServer({
  schema,
  context: createContext,
  // debug: true,
  // introspection: true,
});
const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
