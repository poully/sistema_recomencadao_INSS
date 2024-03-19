import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { createCidade, getAllCidades } from './api/cidades/index';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const cidades = await prisma.cidade.findMany();
    res.status(200).json({
      data: cidades,
    });
  } else if (req.method === "POST") {
    try {
      await prisma.cidade.create({
        data: {
          status: 'cadastrado'
        }
      })
    } catch (err: any) {
      if (err) {
        const errors = err;
        return res.status(404).json({ errors });

      }
      return res.status(404).json({
        errors: {
          message: err.message,
          fieldErrors: {},
        }
      });
    }
  }
  return res.status(404).json({ message: 'Route not found' });
}