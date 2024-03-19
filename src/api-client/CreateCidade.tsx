import axios from 'axios';
import { useAxiosClient } from './useAxiosClient';
import { Prisma, cidade } from '@prisma/client';

export async function getAllCidades() {
    const client = useAxiosClient();
    const response = await axios.get('/api/cidades');
    return response.data;
}

export async function createCidade(cidade){
    const client = useAxiosClient();
    const response = await axios.post('/api/cidades', cidade);
    return response.data;
}
