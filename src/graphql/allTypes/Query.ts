import { User } from "src/graphql/allTypes";
import { queryType } from "nexus";

//query
export const Query = queryType({
  definition(t) {
    t.nonNull.list.field("user", {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.user.findMany();
      },
    });
  },
});

//mutation
