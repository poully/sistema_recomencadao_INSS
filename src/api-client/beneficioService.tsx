import { Beneficio, Movimentacao, TipoMovimentacao } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';

type BeneficioWithMovimentacao = Beneficio & { movimentacao?: (Movimentacao & { tipo_movimentacao: TipoMovimentacao })[] };
export async function getBeneficio(): Promise<BeneficioWithMovimentacao[]> {
  const axios = useAxiosClient();
  try {
    const response = await axios.get("/beneficio");
    return response.data;
  } catch (error) {
    console.error('Erro ao obter lista de beneficios:', error);
    throw error;
  }
}