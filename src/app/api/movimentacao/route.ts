import { MovimentacaoCreateWithoutTipo_movimentacaoInputObjectSchema, MovimentacaoUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { fromError } from 'zod-validation-error';


const prisma = new PrismaClient();

export async function GET() {
    const data = await prisma.movimentacao.findMany();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    try {
        const input = await req.json();
        const data = await MovimentacaoCreateWithoutTipo_movimentacaoInputObjectSchema.parseAsync(input);
        const movimentacao = await prisma.movimentacao.create({ data });
        return NextResponse.json(movimentacao);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}

export async function PUT(req: NextResponse, { params }: { params: { id: string } }) {
    try {
        const input = await req.json();
        const data = await MovimentacaoUncheckedUpdateManyWithoutBeneficioNestedInputObjectSchema.parseAsync(input);
        const movimentacao = await prisma.movimentacao.update({
            where: {
                id: params.id
            },
            data
        })
        return NextResponse.json(movimentacao);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}