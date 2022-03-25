import { Education } from "./Education";
import { objectType } from "nexus";
import { Context } from "nexus-plugin-prisma/dist/utils";
import { Project } from "./Project";
import { Skill } from "./Skill";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.int("index");
    t.string("name");
    t.string("image");
    t.string("tagline");
    t.string("email");
    t.string("github");
    t.string("website");
    t.string("phone");
    t.string("strength");
    t.string("born");
    t.string("location");
    t.string("objective");
    t.string("englishSkill");
    t.list.string("backEndSkills");
    t.list.string("frontEndSkills");
    t.list.string("infrastructures");
    t.nonNull.list.field("project", {
      type: Project,
      async resolve(root, _args, ctx) {
        return ctx.prisma.project.findMany({ where: { userId: root.id } });
      },
    });
    t.nonNull.list.field("education", {
      type: Education,
      async resolve(root, _args, ctx) {
        return ctx.prisma.education.findMany({ where: { userId: root.id } });
      },
    });
    t.nullable.field("skill", {
      type: Skill,
      async resolve(root, _args, ctx) {
        return ctx.prisma.skill.findUnique({ where: { userId: root.id } });
      },
    });
  },
});
