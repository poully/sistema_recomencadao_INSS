import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, method } = req.query

  if (method === "GET") {
    const auxilios = await prisma.auxilioMaternidade.findFirst({ where: { id: parseInt(id as string, 10) } });

    return res.status(200).json({
      data: auxilios,
    })
  }
}