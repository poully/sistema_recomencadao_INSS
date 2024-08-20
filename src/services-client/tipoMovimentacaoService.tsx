import { TipoMovimentacao } from "@prisma/client";
import { useAxiosClient } from './useAxiosClient';


export async function gettipoMovimentacao(): Promise<TipoMovimentacao[]> {
    const axios = useAxiosClient();
    try {
        const response = await axios.get("/tipoMovimentacao");
        return response.data;
    } catch (error) {
        console.error('Erro ao obter lista de Tipos:', error);
        throw error;
    }
}