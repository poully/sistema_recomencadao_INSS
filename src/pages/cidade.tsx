import { useState } from 'react';
import { Box, Button, Text, TextInput } from '@mantine/core';
import { useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import { useCreateCidade, useGetAllCidades } from '@/src/api-client/cidadeService';

export default function Home() {
    const [cidadeForm, setCidadeForm] = useState({ nome: '' });

    // Instanciar o QueryClient
    const queryClient = new QueryClient();

    const createNewCidade = useCreateCidade(queryClient);

    const { data: cidadesData } = useGetAllCidades();

    const handleCreateCidade = async () => {
        await createNewCidade.mutateAsync(cidadeForm);
        setCidadeForm({ nome: '' });
    };

    return (
        // Envolve o componente em um QueryClientProvider e fornece o QueryClient criado
        <QueryClientProvider client={queryClient}>
            <Box>
                <Text variant="h1">Cidades</Text>
                {/* cidades.map((cidade) => (
                    <Box key={cidade.id}>
                        <Text>{cidade.nome}</Text>
                        <Button>Editar</Button>
                        <Button>Excluir</Button>
                    </Box>
                )) */}
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