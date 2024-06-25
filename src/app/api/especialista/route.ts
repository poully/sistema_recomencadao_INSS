import { EspecialistaCreateWithoutBeneficioInputObjectSchema, EspecialistaUncheckedUpdateWithoutBeneficioInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { fromError } from 'zod-validation-error';


const prisma = new PrismaClient();

export async function GET() {
    const data = await prisma.especialista.findMany();
    return NextResponse.json(data);
    console.log(data);
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const data = await EspecialistaCreateWithoutBeneficioInputObjectSchema.parseAsync(body);
        const especialista = await prisma.especialista.create({ data });
        return NextResponse.json(especialista);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}

export async function PUT(req: NextResponse, { params }: { params: { id: number } }) {
    try {
        const body = await req.json();
        const data = await EspecialistaUncheckedUpdateWithoutBeneficioInputObjectSchema.parseAsync(body);
        const especialista = await prisma.especialista.update({
            where: {
                id: params.id
            },
            data
        })
        return NextResponse.json(especialista);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}