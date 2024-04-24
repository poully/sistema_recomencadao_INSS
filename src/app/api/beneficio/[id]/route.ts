import { BeneficioUpdateWithoutDocumentosInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

type Params = { id: number };

export async function GET(req: NextRequest, { id }: Params) {
    const data = await prisma.beneficio.findFirst({ where: { id } });
    return NextResponse.json(data);
}

export async function PUT(req: NextRequest, { id }: Params) {
    try {
        const body = await req.json();
        const data = await BeneficioUpdateWithoutDocumentosInputObjectSchema.parseAsync(body);
        const pessoa = await prisma.beneficio.update({ data, where: { id } });
        return NextResponse.json(beneficio);
    } catch (e) {
        return NextResponse.error();
    }
}

export async function DELETE(req: NextRequest, { id }: Params) {
    try {
        const pessoa = await prisma.pessoa.delete({ where: { id } });
        return NextResponse.json(pessoa);
    } catch (e) {
        return NextResponse.error();
    }
}