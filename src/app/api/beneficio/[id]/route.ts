import { BeneficioUpdateInputObjectSchema } from "@/prisma/validation/schemas";
import { createMovimentacao } from "@/src/utils/createMovimentacao";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

type Params = { id: string };

export async function GET(req: NextRequest, { id }: Params) {
    const data = await prisma.beneficio.findFirst({ where: { id } });
    return NextResponse.json(data);
}

export async function PUT(req: NextRequest, { id }: Params) {
    try {
        const { tipo_movimentacao_id, ...body } = await req.json();
        const data = await BeneficioUpdateInputObjectSchema.parseAsync(body);
        const beneficio = await prisma.beneficio.update({ data: { ...data, movimentacao: { create: { tipo_movimentacao_id } } }, where: { id } });
        return NextResponse.json(beneficio);
    } catch (e) {
        return NextResponse.error();
    }
}

export async function DELETE(req: NextRequest, { id }: Params) {
    try {
        const beneficio = await prisma.beneficio.delete({ where: { id } });
        return NextResponse.json(beneficio);
    } catch (e) {
        return NextResponse.error();
    }
}