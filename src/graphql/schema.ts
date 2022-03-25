import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./allTypes";
import { nexusPrisma } from "nexus-plugin-prisma";

export const schema = makeSchema({
  types,
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: join(process.cwd(), "src/graphql", "nexus.ts"),
    schema: join(process.cwd(), "src/graphql", "schema.graphql"),
  },
  contextType: {
    module: join(process.cwd(), "src/graphql", "context.ts"),
    export: "Context",
  },
});
