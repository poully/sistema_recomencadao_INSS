import { Pessoa } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';
import { Optional } from "@prisma/client/runtime/library";


export async function getPessoas(): Promise<Pessoa[]> {
  const axios = useAxiosClient();
  try {
    const response = await axios.get("/pessoas");
    return response.data;
  } catch (error) {
    console.error('Erro ao obter lista de pessoas:', error);
    throw error;
  }
}

export async function deletePessoa(id: number): Promise<void> {
  const axios = useAxiosClient();
  try {
    await axios.delete("/pessoas/${id}");
  } catch (error) {
    console.error(`Erro ao deletar pessoa com ID ${id}:`, error);
    throw error;
  }
}

export async function updatePessoa(id: number, data: Optional<Pessoa>) {
  const axios = useAxiosClient();
  try {
    await axios.put('/pessoas/${id}', data);
  } catch (error) {
    console.error(`Erro ao atualizar a pessoa com ID ${id}:`, error);
    throw error;
  }
}