'use-client';
import { Beneficio, Movimentacao, TipoMovimentacao, Situacao, Pessoa, Tipo } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';

export type BeneficioWithMovimentacao = Beneficio & { movimentacao?: (Movimentacao & { tipo_movimentacao: TipoMovimentacao })[], situacao: Situacao, pessoa: Pessoa, tipo: Tipo };
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

export async function removeBeneficio({ id }: { id: string }) {
  const axios = useAxiosClient();
  try {
    const response = await axios.delete(`/beneficio/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao remover benefício ${id}`, error);
    throw error;
  }
}