import axios from 'axios';

export async function getAllEstados() {
    const response = await axios.get('/api/estados');
    return response.data;
}

export async function createEstado(estado) {
    const response = await axios.post('/api/estados', estado);
    return response.data;
}