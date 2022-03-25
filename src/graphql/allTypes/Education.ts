import { objectType } from "nexus";

export const Education = objectType({
  name: "Education",
  definition(t) {
    t.id("id");
    t.string("userId");
    t.int("index");
    t.string("institution");
    t.string("degree");
    t.string("date");
    t.string("fieldOfStudy");
  },
});
