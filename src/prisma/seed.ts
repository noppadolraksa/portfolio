import { data } from "../data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.create({
  //   data: {
  //     email: `testemail@gmail.com`,
  //     role: 'ADMIN',
  //   },
  // })

  const {
    name,
    tagline,
    email,
    github,
    backEndSkills,
    born,
    location,
    englishSkill,
    frontEndSkills,
    infrastructures,
    objective,
    phone,
    strength,
    website,
  } = data.user;

  const { reading, writing, listening, speaking, personalities } = data.skill;

  await prisma.user.create({
    data: {
      name: name,
      tagline: tagline,
      email: email,
      github: github,
      website: website,
      phone: phone,
      strength: strength,
      born: born,
      objective: objective,
      location: location,
      englishSkill: englishSkill,
      frontEndSkills: frontEndSkills,
      backEndSkills: backEndSkills,
      infrastructures: infrastructures,
      education: { createMany: { data: data.education } },
      project: { createMany: { data: data.project } },
      skill: {
        create: {
          listening: listening,
          speaking: speaking,
          reading: reading,
          writing: writing,
          personalities: personalities,
        },
      },
    },
  });

  // await prisma.link.createMany({
  //   data: data,
  // })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
