import { useState } from 'react';
import { Box, Button, Text, TextInput } from '@mantine/core';
import { createEstado } from '@/src/api-client/estadoService';

export default function EstadoCreate() {
  const [nome, setNome] = useState('');

  const handleCreateEstado = async () => {
    try {
      await createEstado({ nome });
      // Redirecionar para a lista de estados ou realizar outra ação após a criação bem-sucedida
    } catch (error) {
      console.error('Erro ao criar estado:', error);
    }
  };

  return (
    <Box>
      <Text variant="h1">Criar Estado</Text>
      <TextInput
        label="Nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <Button onClick={handleCreateEstado}>Criar</Button>
    </Box>
  );
}