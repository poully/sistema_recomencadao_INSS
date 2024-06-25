import { Especialista } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';
import { Optional } from "@prisma/client/runtime/library";


export async function getEspecialista(): Promise<Especialista[]> {
  const axios = useAxiosClient();
  try {
    const response = await axios.get("/especialista");
    return response.data;
  } catch (error) {
    console.error('Erro ao obter lista de especialistas:', error);
    throw error;
  }
}

export async function deleteEspecialista(id: number): Promise<void> {
  const axios = useAxiosClient();
  try {
    await axios.delete("/especialista/${id}");
  } catch (error) {
    console.error(`Erro ao deletar especialista com ID ${id}:`, error);
    throw error;
  }
}

export async function updateEspecialista(id: number, data: Optional<Especialista>) {
  const axios = useAxiosClient();
  try {
    await axios.put('/especialista/${id}', data);
  } catch (error) {
    console.error(`Erro ao atualizar o especialista com ID ${id}:`, error);
    throw error;
  }
}