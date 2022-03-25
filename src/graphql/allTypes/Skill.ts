import { objectType } from "nexus";

export const Skill = objectType({
  name: "Skill",
  definition(t) {
    t.id("id");
    t.int("listening");
    t.int("reading");
    t.int("speaking");
    t.int("writing");
    t.string("userId");
    t.list.string("personalities");
  },
});
