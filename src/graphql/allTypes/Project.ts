import { objectType } from "nexus";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.id("id");
    t.string("description");
    t.int("index");
    t.string("userId");
    t.string("sourceCode");
    t.list.string("techniques");
    t.list.string("technologies");
    t.string("title");
    t.string("link1");
    t.string("link2");
    t.string("link3");
    t.boolean("finished");
  },
});
