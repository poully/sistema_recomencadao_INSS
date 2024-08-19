import { BeneficioCreateInputObjectSchema } from "@/prisma/validation/schemas";
import { createMovimentacao } from "@/src/utils/createMovimentacao";
import { PrismaClient, Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { fromError } from "zod-validation-error";
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();


export async function GET() {
    const data = await prisma.beneficio.findMany({ include: { movimentacao: { include: { tipo_movimentacao: true } }, tipo: true, situacao: true, pessoa: true } });
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { situacao_id,
            pessoa_id,
            tipo_id,
            especialista_id,
            tipo_movimentacao_id,
            documentos, ...beneficioData } = body;

        const input: Prisma.BeneficioCreateInput = {
            ...beneficioData,
            situacao: { connect: { id: situacao_id } },
            tipo: { connect: { id: tipo_id } },
            especialista: { connect: { id: especialista_id } },
            pessoa: { connect: { id: pessoa_id } },
            movimentacao: {
                create: {
                    tipo_movimentacao: { connect: { id: tipo_movimentacao_id } }
                }
            },
            documentos: {
                createMany: {
                    data: documentos
                }
            }
        };

        const data = await BeneficioCreateInputObjectSchema.parseAsync(input);
        console.log(data);
        const beneficio = await prisma.beneficio.create({ data, include: { movimentacao: { include: { tipo_movimentacao: true } }, situacao: true, documentos: true, especialista: true, pessoa: true, tipo: true } });
        //await createMovimentacao({ beneficio_id: beneficio.id, nomeTipoMovimentacao: "" });
        return NextResponse.json(beneficio);
    } catch (e) {
        console.log(e);
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}
