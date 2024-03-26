import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const estados = await prisma.estado.findMany();
    res.status(200).json(estados);
  } else if (req.method === "POST") {
    try {
      await prisma.estado.create({
        data: {
          status: 'cadastrado'
        }
      });
      // Criação for bem-sucedida, 201 (Created)
      return res.status(201).json({ message: 'Estado criado com sucesso' });
      
    } catch (err) {
      // Erro ao criar o estado, status 500 (Internal Server Error)
      return res.status(500).json({ error: 'Erro ao criar o estado' });
    }
  }

  // Não é GET nem POST, status 404 (Not Found)
  return res.status(404).json({ message: 'Route not found' });
}