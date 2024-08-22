import { Movimentacao, TipoMovimentacao } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';
import type { GET } from "@/src/app/api/movimentacao/route";
import { ExtractResponse } from "@/src/utils/extractResponse";


export type MovimentacaoGet = ExtractResponse<Awaited<ReturnType<typeof GET>>>;
export async function getMovimentacao(): Promise<MovimentacaoGet> {
  const axios = useAxiosClient();
  try {
    const response = await axios.get("/movimentacao");
    return response.data;
  } catch (error) {
    console.error('Erro ao obter lista de Movimentação:', error);
    throw error;
  }
}