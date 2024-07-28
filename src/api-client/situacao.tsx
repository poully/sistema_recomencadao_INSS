import { Situacao } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';


export async function getSituacao(): Promise<Situacao[]> {
    const axios = useAxiosClient();
    try {
        const response = await axios.get("/situacao");
        return response.data;
    } catch (error) {
        console.error('Erro ao obter lista de Tipos:', error);
        throw error;
    }
}