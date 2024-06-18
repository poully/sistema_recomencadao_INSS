import { PessoaUpdateWithoutBeneficioInputObjectSchema } from "@/prisma/validation/schemas";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { fromError } from "zod-validation-error";

const prisma = new PrismaClient();

type Params = { id: string };

export async function GET(req: NextRequest, { params: { id } }: { params: Params }) {
    try {
        const data = await prisma.pessoa.findUnique({ where: { id: parseInt(id, 10) } });
        return NextResponse.json(data);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
    try {
        const body = await req.json();
        const { id, ...updatedBody } = { ...body, cidade_ibge_id: body?.cidade_ibge_id ? parseInt(body.cidade_ibge_id, 10) : 0, id: parseInt(params.id, 10) };
        const data = await PessoaUpdateWithoutBeneficioInputObjectSchema.parseAsync(updatedBody);
        const pessoa = await prisma.pessoa.update({ data, where: { id: parseInt(params.id, 10) } });
        return NextResponse.json(pessoa);
    } catch (e) {
        const validationError = fromError(e);
        return NextResponse.json({ error: validationError.toString() }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, { params: { id } }: { params: Params }) {
    try {
        const pessoa = await prisma.pessoa.delete({ where: { id: parseInt(id, 10) } });
        return NextResponse.json(pessoa);
    } catch (e) {
        const error = e as Error;
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}