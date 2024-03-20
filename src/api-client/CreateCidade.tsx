import axios from 'axios';
import { useAxiosClient } from './useAxiosClient';
import { Prisma, Cidade } from '@prisma/client';

export async function getAllCidades() {
    const client = useAxiosClient();
    const response = await axios.get('/api/cidades');
    return response.data;
}

export async function createCidade(Cidade){
    const client = useAxiosClient();
    const response = await axios.post('/api/cidades', Cidade);
    return response.data;
}
