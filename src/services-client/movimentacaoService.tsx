'use-client';

import { Movimentacao, Pessoa, Tipo, TipoMovimentacao } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';
import { ExtractResponse } from "@/src/utils/extractResponse";
import { GET } from "@/src/app/api/movimentacao/route";

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