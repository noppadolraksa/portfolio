import { objectType } from "nexus";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.model.id();
    t.model.description();
    t.model.index();
    t.model.sourceCode();
    t.model.user();
    t.model.techniques();
    t.model.technologies();
    t.model.userId();
    t.model.title();
    t.model.link1();
    t.model.link2();
    t.model.link3();
    t.model.finished();
  },
});
