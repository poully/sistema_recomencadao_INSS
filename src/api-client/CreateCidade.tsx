import { useQuery, useMutation, QueryClient, useQueryClient } from 'react-query';
import axios from 'axios';
import { useAxiosClient } from './useAxiosClient';

const queryClient = new QueryClient();

export function useGetAllCidades() {
  return useQuery('cidades', async () => {
    const client = useAxiosClient();
    const response = await client.get('/api/cidades');
    return response.data;
  });
}

// Defina um tipo para os dados da cidade
interface Cidade {
  nome: string;
  // Adicione outras propriedades, se necessário
}

export function useCreateCidade() {
  const client = useAxiosClient();
  const queryClient = useQueryClient();

  // Especifique o tipo do parâmetro 'cidade'
  return (cidade: Cidade) =>
    useMutation(() => axios.post('/api/cidades', cidade), {
      onSuccess: () => {
        queryClient.invalidateQueries('cidades');
      },
    });
}