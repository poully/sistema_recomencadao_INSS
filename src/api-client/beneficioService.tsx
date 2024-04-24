import { Beneficio } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';


export async function getBeneficio(): Promise<Beneficio[]> {
  const axios = useAxiosClient();
  try {
    const response = await axios.get("/beneficio");
    return response.data;
  } catch (error) {
    console.error('Erro ao obter lista de beneficios:', error);
    throw error;
  }
}