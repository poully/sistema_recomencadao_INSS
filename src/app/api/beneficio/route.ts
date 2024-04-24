import { BeneficioCreateWithoutTipoInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    const data = await prisma.beneficio.findMany();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    try
    {
        const body = await req.json();
        const data = await BeneficioCreateWithoutTipoInputObjectSchema.parseAsync(body);
        const pessoa = await prisma.beneficio.create({ data });
        return NextResponse.json(beneficio);
    } catch(e) {
        return NextResponse.error();
    }
}
