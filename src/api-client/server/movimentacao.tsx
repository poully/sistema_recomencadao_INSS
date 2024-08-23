import { Movimentacao } from "@prisma/client";
import { fetcher } from "./fetcher";
import { ExtractResponse } from "@/src/utils/extractResponse";
import type { GET } from "@/src/app/api/movimentacao/route";


export type MovimentacaoGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;

export async function get(input: { id?: string }): Promise<MovimentacaoGet[0] | MovimentacaoGet> {
  try {
    const url = `/movimentacao${input?.id ? `/${input.id}` : ""}`;
    const response = await fetcher(url);
    return response.json();
  } catch (error) {
    console.error('Erro ao obter movimentacao:', error);
    throw error;
  }
}
