import axios from 'axios';

const API_BASE_URL = '/api/cidade'; // Substitua pela URL da sua API

interface Cidade {
  id: number;
  nome: string;
  estadoId: number;
}

export async function getCidades(): Promise<Cidade[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/cidades`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter lista de cidades:', error);
    throw error;
  }
}

export async function createCidade(cidade: Cidade): Promise<Cidade> {
  try {
    const response = await axios.post(`${API_BASE_URL}/cidades`, cidade);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar cidade:', error);
    throw error;
  }
}

export async function deleteCidade(id: number): Promise<void> {
  try {
    await axios.delete(`${API_BASE_URL}/cidades/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar cidade com ID ${id}:`, error);
    throw error;
  }
}