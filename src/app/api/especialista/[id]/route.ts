import { EspecialistaUpdateWithoutBeneficioInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

type Params = { id: number };

export async function GET(req: NextRequest, { id }: Params) {
    const data = await prisma.especialista.findUnique({ where: { id } });
    return NextResponse.json(data);
}

export async function PUT(req: NextRequest, { id }: Params) {
    try {
        const body = await req.json();
        const data = await EspecialistaUpdateWithoutBeneficioInputObjectSchema.parseAsync(body);
        const especialista = await prisma.especialista.update({ data, where: { id } });
        return NextResponse.json(especialista);
    } catch (e) {
        return NextResponse.error();
    }
}

export async function DELETE(req: NextRequest, { id }: Params) {
    try {
        const especialista = await prisma.especialista.delete({ where: { id } });
        return NextResponse.json(especialista);
    } catch (e) {
        return NextResponse.error();
    }
}