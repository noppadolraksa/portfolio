import prisma from "src/lib/prisma";

export default async function handler(req, res) {
  try {
    const fetchUser = await prisma.user.findMany();
    res.status(200).json(fetchUser);
  } catch (err) {
    res.status(400).json({ err });
  }
}
