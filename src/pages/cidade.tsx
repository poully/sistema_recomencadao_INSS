import { useState } from 'react';
import { Box, Button, Text, TextInput } from '@mantine/core';
import { useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import { useCreateCidade, useGetAllCidades } from '@/src/api-client/CreateCidade';

const queryClient = new QueryClient(); // Criando uma instância do QueryClient

export default function Home() {
    const [cidadeForm, setCidadeForm] = useState({ nome: '' });

    const createNewCidade = useCreateCidade();

    const { data: cidadesData } = useGetAllCidades(); // Obtendo dados de todas as cidades

    const handleCreateCidade = async () => {
        await createNewCidade(cidadeForm); // Invocando a função de mutação
        setCidadeForm({ nome: '' });
        queryClient.invalidateQueries('cidades'); // Invalidando a query 'cidades' para recarregar os dados
    };

    return (
        <QueryClientProvider client={new QueryClient()}>
            <Box>
                {/* <Text variant="h1">Cidades</Text>
            {cidades.map((cidade) => (
                <Box key={cidade.id}>
                    <Text>{cidade.nome}</Text>
                    <Button>Editar</Button>
                    <Button>Excluir</Button>
                </Box>
            ))} */}
                <Box>
                    <Text>Adicionar Cidade</Text>
                    <TextInput
                        label="Nome"
                        value={cidadeForm.nome}
                        onChange={(event) => setCidadeForm({ nome: event.target.value })}
                    />
                    <Button onClick={handleCreateCidade}>Adicionar</Button>
                </Box>
            </Box>
        </QueryClientProvider>
    );
}