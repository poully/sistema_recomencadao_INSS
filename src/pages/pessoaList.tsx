import { useEffect, useState } from 'react';
import { Box, Button, Text } from '@mantine/core';
import { useQuery } from 'react-query';
import { getPessoas, deletePessoa } from '@/src/api-client/pessoaService';

export default function PessoaList() {
  const { data: pessoas, refetch } = useQuery('pessoas', getPessoas);

  const handleDeletePessoa = async (id: number) => {
    try {
      await deletePessoa(id);
      refetch();
    } catch (error) {
      console.error('Erro ao excluir pessoa:', error.message);
    }
  };

  return (
    <Box>
      <Text variant="h1">Lista de Pessoas</Text>
      {pessoas && pessoas.map((pessoa) => (
        <Box key={pessoa.id}>
          <Text>{pessoa.nome}</Text>
          <Button onClick={() => handleDeletePessoa(pessoa.id)}>Excluir</Button>
        </Box>
      ))}
    </Box>
  );
}
