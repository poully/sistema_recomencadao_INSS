import { useState } from 'react';
import { Box, Button, Text, TextInput } from '@mantine/core';
import { useMutation, QueryClient, QueryClientProvider } from 'react-query'; // Importe o QueryClient e o QueryClientProvider
import { createPessoa } from '@/src/api-client/pessoaService';

const queryClient = new QueryClient(); // Crie uma instância do QueryClient

export default function PessoaCreate() {
  const [nome, setNome] = useState('');
  const { mutate } = useMutation(createPessoa, {
    onSuccess: () => {
      queryClient.invalidateQueries('pessoas');
      setNome('');
    },
    onError: (error) => {
      console.error('Erro ao criar pessoa:', error.message);
    },
  });

  const handleCreatePessoa = () => {
    mutate({ nome });
  };

  return (
    <Box>
      <Text variant="h1">Adicionar Pessoa</Text>
      <TextInput
        label="Nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <Button onClick={handleCreatePessoa}>Adicionar</Button>
    </Box>
  );
}

// Envolve o componente PessoaCreate em QueryClientProvider e fornece o QueryClient criado
export function PessoaCreateWithQueryClientProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <PessoaCreate />
    </QueryClientProvider>
  );
}