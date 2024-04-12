import { PessoaCreateWithoutBeneficioInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    const data = await prisma.pessoa.findMany();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    try
    {
        const body = await req.json();
        const data = await PessoaCreateWithoutBeneficioInputObjectSchema.parseAsync(body);
        const pessoa = await prisma.pessoa.create({ data });
        return NextResponse.json(pessoa);
    } catch(e) {
        return NextResponse.error();
    }
}
