import axios from 'axios';
import { QueryClient } from 'react-query';

const API_BASE_URL = '/api/pessoa';

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
  cidadeId: number;
}

export async function getPessoas(queryClient: QueryClient): Promise<Pessoa[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/pessoas`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter lista de pessoas:', error);
    throw error;
  }
}

export async function createPessoa(
  pessoa: Omit<Pessoa, 'id'>, // Remova o campo 'id' ao criar uma nova pessoa
  queryClient: QueryClient,
): Promise<Pessoa> {
  try {
    const response = await axios.post(`${API_BASE_URL}/pessoas`, pessoa);
    queryClient.invalidateQueries('pessoas');
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pessoa:', error);
    throw error;
  }
}

export async function deletePessoa(id: number, queryClient: QueryClient): Promise<void> {
  try {
    await axios.delete(`${API_BASE_URL}/pessoas/${id}`);
    queryClient.invalidateQueries('pessoas');
  } catch (error) {
    console.error(`Erro ao deletar pessoa com ID ${id}:`, error);
    throw error;
  }
}