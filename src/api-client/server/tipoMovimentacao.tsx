import { TipoMovimentacao } from "@prisma/client";
import { Optional } from "@prisma/client/runtime/library";
import { fetcher } from "./fetcher";
import { ExtractResponse } from "@/src/utils/extractResponse";
import type { GET } from "@/src/app/api/tipoMovimentacao/route";


export type TipoMovimentacaoGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get(input: { id?: string }): Promise<TipoMovimentacaoGet[0] | TipoMovimentacaoGet> {
  try {
    const url = `/tipoMovimentacao${input?.id ? `/${input.id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter tipo de movimentação:', error);
    throw error;
  }
}
