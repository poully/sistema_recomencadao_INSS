import { useState } from 'react';
import { Box, Button, Text, TextInput } from '@mantine/core';
import { useMutation, useQueryClient } from 'react-query';
import { createPessoa } from '@/src/api-client/pessoaService';

export default function PessoaCreate() {
  const [nome, setNome] = useState('');
  const queryClient = useQueryClient();
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
