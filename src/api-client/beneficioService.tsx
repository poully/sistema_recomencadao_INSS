import { Beneficio, Movimentacao, TipoMovimentacao, Prisma, Situacao, Pessoa, Tipo } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';

type BeneficioWithMovimentacao = Beneficio & { movimentacao?: (Movimentacao & { tipo_movimentacao: TipoMovimentacao })[], situacao: Situacao, pessoa: Pessoa, tipo: Tipo };
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