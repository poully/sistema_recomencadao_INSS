import { TipoCreateWithoutBeneficioInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    const data = await prisma.tipo.findMany();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const data = await TipoCreateWithoutBeneficioInputObjectSchema.parseAsync(body);
        const tipo = await prisma.tipo.create({ data });
        return NextResponse.json(tipo);
    } catch (e) {
        return NextResponse.error();
    }
}