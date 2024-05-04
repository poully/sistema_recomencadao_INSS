import { DocumentosUpdateWithoutBeneficioInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

type Params = { id: number };

export async function GET(req: NextRequest, { id }: Params) {
    const data = await prisma.documentos.findFirst({ where: { id } });
    return NextResponse.json(data);
}

export async function PUT(req: NextRequest, { id }: Params) {
    try {
        const body = await req.json();
        const data = await DocumentosUpdateWithoutBeneficioInputObjectSchema.parseAsync(body);
        const documentos = await prisma.documentos.update({ data, where: { id } });
        return NextResponse.json(documentos);
    } catch (e) {
        return NextResponse.error();
    }
}

export async function DELETE(req: NextRequest, { id }: Params) {
    try {
        const documentos = await prisma.documentos.delete({ where: { id } });
        return NextResponse.json(documentos);
    } catch (e) {
        return NextResponse.error();
    }
}