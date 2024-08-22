import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function GET() {

    const data = await prisma.movimentacao.findMany({
        include: {
            tipo_movimentacao: true,
            beneficio: {
                include: {
                    pessoa: true,
                    tipo: true
                }
            }
        }
    });
    return NextResponse.json(data);
}