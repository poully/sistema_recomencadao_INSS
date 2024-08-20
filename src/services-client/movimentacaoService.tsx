import { Movimentacao } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';


export async function getMovimentacao(): Promise<Movimentacao[]> {
  const axios = useAxiosClient();
  try {
    const response = await axios.get("/movimentacao");
    return response.data;
  } catch (error) {
    console.error('Erro ao obter lista de Movimentação:', error);
    throw error;
  }
}