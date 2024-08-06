import { BeneficioCreateInputObjectSchema } from "@/prisma/validation/schemas";
import { createMovimentacao } from "@/src/utils/createMovimentacao";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { fromError } from "zod-validation-error";

const prisma = new PrismaClient();

export async function GET() {
    const data = await prisma.beneficio.findMany({ include: { movimentacao: { include: { tipo_movimentacao: true } } } });
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const data = await BeneficioCreateInputObjectSchema.parseAsync(body);
        const beneficio = await prisma.beneficio.create({ data });
        await createMovimentacao({ beneficio_id: beneficio.id, nomeTipoMovimentacao: "" });
        return NextResponse.json(beneficio);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}
