import { Pessoa } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';


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

/*

export async function createPessoa(
  pessoa: Omit<Pessoa, 'id'>, // Remova o campo 'id' ao criar uma nova pessoa
  queryClient: QueryClient,
): Promise<Pessoa> {
  const axios = useAxiosClient();
  try {
    const response = await axios.post(`${API_BASE_URL}/pessoas`, pessoa);
    queryClient.invalidateQueries('pessoas');
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pessoa:', error);
    throw error;
  }
}

export async function deletePessoa(id: number): Promise<void> {
  try {
    await axios.delete(`${API_BASE_URL}/pessoas/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar pessoa com ID ${id}:`, error);
    throw error;
  }
}
*/