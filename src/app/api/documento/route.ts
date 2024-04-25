import { PessoaCreateWithoutBeneficioInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { fromError } from 'zod-validation-error';


const prisma = new PrismaClient();

export async function GET() {
    const data = await prisma.pessoa.findMany();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const input = { ...body, cidade_ibge_id: parseInt(body.cidade_ibge_id, 10) };
        const data = await PessoaCreateWithoutBeneficioInputObjectSchema.parseAsync(input);
        const pessoa = await prisma.pessoa.create({ data });
        return NextResponse.json(pessoa);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}

export async function UPDATE(req: NextRequest) {

}