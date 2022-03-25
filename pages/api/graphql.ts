import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { PageConfig } from "next";
import { createContext } from "src/graphql/context";
import { schema } from "src/graphql/schema";

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
  debug: true,
  introspection: true,
});
const startServer = apolloServer.start();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: MicroRequest, res: ServerResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};

// Apollo Server Micro takes care of body parsing
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
