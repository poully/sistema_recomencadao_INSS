import { TipoCreateWithoutBeneficioInputObjectSchema , TipoUncheckedCreateWithoutBeneficioInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { fromError } from 'zod-validation-error';


const prisma = new PrismaClient();

export async function GET() {
    const data = await prisma.tipo.findMany();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    try {
        const input = await req.json();
        const data = await TipoCreateWithoutBeneficioInputObjectSchema.parseAsync(input);
        const tipo = await prisma.tipo.create({ data });
        return NextResponse.json(tipo);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}

export async function PUT(req: NextResponse, { params }: { params: { id: string } }) {
    try {
        const input = await req.json();
        const data = await TipoUncheckedCreateWithoutBeneficioInputObjectSchema.parseAsync(input);
        const tipo = await prisma.tipo.update({
            where: {
                id: params.id
            },
            data
        })
        return NextResponse.json(tipo);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}