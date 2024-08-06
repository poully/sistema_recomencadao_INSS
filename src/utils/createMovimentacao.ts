import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type CreateMovimentacaoArgs = {
    beneficio_id: string;
    nomeTipoMovimentacao: string;
}
export async function createMovimentacao({ beneficio_id, nomeTipoMovimentacao }: CreateMovimentacaoArgs) {
    const tipoMovimentacao = await prisma.tipoMovimentacao.findFirst({ where: { nome: nomeTipoMovimentacao } });
    if (!tipoMovimentacao) {
        throw new Error(`Tipo de movimentação com o nome ${nomeTipoMovimentacao} não encontrado`);
    }
    return await prisma.movimentacao.create({ data: { beneficio_id, tipo_movimentacao_id: tipoMovimentacao.id } });
}