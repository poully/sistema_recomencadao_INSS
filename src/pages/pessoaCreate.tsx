import { useState } from 'react';
import { Box, Button, Text, TextInput } from '@mantine/core';
import { useMutation, QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { createPessoa } from '@/src/api-client/pessoaService'; 
import { getCidades } from '@/src/api-client/cidadeService'; 

// Criar uma instância do QueryClient
const queryClient = new QueryClient();

export default function PessoaCreate() {
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const { data: cidades } = useQuery('cidades', getCidades);

  const { mutate } = useMutation(createPessoa, {
    onSuccess: () => {
      setNome('');
      setCidade('');
      // Ao criar com sucesso, invalidar a consulta para recarregar os dados
      queryClient.invalidateQueries('pessoas');
    },
    onError: (error) => {
      console.error('Erro ao criar pessoa:', error.message);
    },
    // Fornecer o QueryClient criado para o hook useMutation
    queryClient,
  });

  const handleCreatePessoa = () => {
    mutate({ nome, cidade });
  };

  return (
    <Box>
      <Text variant="h1">Adicionar Pessoa</Text>
      <TextInput
        label="Nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <TextInput
        label="Cidade"
        value={cidade}
        onChange={(event) => setCidade(event.target.value)}
        data={cidades?.map((cidade) => cidade.nome)}
      />
      <Button onClick={handleCreatePessoa}>Adicionar</Button>
    </Box>
  );
}