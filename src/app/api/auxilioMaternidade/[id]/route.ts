
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const auxilios = await prisma.auxilioMaternidade.findFirst({ where: { id: parseInt(id as string, 10) } });

  return {
    data: auxilios,
  }
}
