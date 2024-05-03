import { TipoMovimentacaoCreateWithoutMovimentacaoInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    const data = await prisma.tipoMovimentacao.findMany();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const data = await TipoMovimentacaoCreateWithoutMovimentacaoInputObjectSchema.parseAsync(body);
        const tipoMovimentacao = await prisma.tipoMovimentacao.create({ data });
        return NextResponse.json(tipoMovimentacao);
    } catch (e) {
        return NextResponse.error();
    }
}