import { Documentos } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';


export async function getDocumentos(): Promise<Documento[]> {
  const axios = useAxiosClient();
  try {
    const response = await axios.get("/documento");
    return response.data;
  } catch (error) {
    console.error('Erro ao obter lista de documentos:', error);
    throw error;
  }
}