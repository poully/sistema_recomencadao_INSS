import { TipoMovimentacaoCreateWithoutMovimentacaoInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

type Params = { id: string };

export async function GET(req: NextRequest, { id }: Params) {
    const data = await prisma.tipoMovimentacao.findFirst({ where: { id } });
    return NextResponse.json(data);
}

export async function PUT(req: NextRequest, { id }: Params) {
    try {
        const body = await req.json();
        const data = await TipoMovimentacaoCreateWithoutMovimentacaoInputObjectSchema.parseAsync(body);
        const tipoMovimentacao = await prisma.tipoMovimentacao.update({ data, where: { id } });
        return NextResponse.json(tipoMovimentacao);
    } catch (e) {
        return NextResponse.error();
    }
}

export async function DELETE(req: NextRequest, { id }: Params) {
    try {
        const tipoMovimentacao = await prisma.tipoMovimentacao.delete({ where: { id } });
        return NextResponse.json(tipoMovimentacao);
    } catch (e) {
        return NextResponse.error();
    }
}