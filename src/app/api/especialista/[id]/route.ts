import { EspecialistaUpdateWithoutBeneficioInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { fromError } from "zod-validation-error";

const prisma = new PrismaClient();

type Params = { id: string };

export async function GET(req: NextRequest, { params: { id } }: { params: Params }) {
    try {
        const data = await prisma.especialista.findUnique({ where: { id } });
        return NextResponse.json(data);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}

export async function PUT(req: NextRequest, { params: { id } }: { params: Params }) {
    try {
        const body = await req.json();
        const data = await EspecialistaUpdateWithoutBeneficioInputObjectSchema.parseAsync(body);
        const especialista = await prisma.especialista.update({ data, where: { id } });
        return NextResponse.json(especialista);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, { params: { id } }: { params: Params }) {
    try {
        const especialista = await prisma.especialista.delete({ where: { id } });
        return NextResponse.json(especialista);
    } catch (e) {
        const error = e as Error;
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}