import { TipoCreateWithoutBeneficioInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

type Params = { id: string };

export async function GET(req: NextRequest, { id }: Params) {
    const data = await prisma.tipo.findFirst({ where: { id } });
    return NextResponse.json(data);
}

export async function PUT(req: NextRequest, { id }: Params) {
    try {
        const body = await req.json();
        const data = await TipoCreateWithoutBeneficioInputObjectSchema.parseAsync(body);
        const tipo = await prisma.tipo.update({ data, where: { id } });
        return NextResponse.json(tipo);
    } catch (e) {
        return NextResponse.error();
    }
}

export async function DELETE(req: NextRequest, { id }: Params) {
    try {
        const tipo = await prisma.tipo.delete({ where: { id } });
        return NextResponse.json(tipo);
    } catch (e) {
        return NextResponse.error();
    }
}