import axios from 'axios';

const API_BASE_URL = '/api/estado'; // Substitua pela URL da sua API

interface Estado {
  id: number;
  nome: string;
}

export async function getEstados(): Promise<Estado[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/estados`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter lista de estados:', error);
    throw error;
  }
}

export async function createEstado(estado: Estado): Promise<Estado> {
  try {
    const response = await axios.post(`${API_BASE_URL}/estados`, estado);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar estado:', error);
    throw error;
  }
}

export async function deleteEstado(id: number): Promise<void> {
  try {
    await axios.delete(`${API_BASE_URL}/estados/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar estado com ID ${id}:`, error);
    throw error;
  }
}
