import { DocumentosCreateWithoutBeneficioInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { fromError } from 'zod-validation-error';


const prisma = new PrismaClient();

export async function GET() {
    const data = await prisma.documentos.findMany();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const data = await DocumentosCreateWithoutBeneficioInputObjectSchema.parseAsync(input);
        const documento = await prisma.documentos.create({ data });
        return NextResponse.json(documento);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}

export async function UPDATE(req: NextRequest) {

}