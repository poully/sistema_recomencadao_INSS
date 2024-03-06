import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const estados = await prisma.estado.findMany();
    res.status(200).json(estados);
  } else {
    res.status(405).end();
  }
}