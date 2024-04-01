import axios from 'axios';

const API_BASE_URL = '/api/pessoa';
interface Pessoa {
  id: number;
  nome: string;
  idade: number;
}

export async function getPessoas(): Promise<Pessoa[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/pessoas`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter lista de pessoas:', error);
    throw error;
  }
}

export async function createPessoa(pessoa: Pessoa): Promise<Pessoa> {
  try {
    const response = await axios.post(`${API_BASE_URL}/pessoas`, pessoa);
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
