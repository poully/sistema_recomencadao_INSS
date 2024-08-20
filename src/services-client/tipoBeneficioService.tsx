import { Tipo } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';


export async function getTipo(): Promise<Tipo[]> {
    const axios = useAxiosClient();
    try {
        const response = await axios.get("/tipoBeneficio");
        return response.data;
    } catch (error) {
        console.error('Erro ao obter lista de Tipos:', error);
        throw error;
    }
}