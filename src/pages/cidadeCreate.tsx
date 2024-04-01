import { useState, useEffect } from 'react';
import { Box, Button, Text, TextInput, Select } from '@mantine/core';
import { createCidade } from '@/src/api-client/cidadeService';
import { getEstados } from '@/src/api-client/estadoService';

export default function CidadeCreate() {
  const [nome, setNome] = useState('');
  const [estadoId, setEstadoId] = useState('');
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    async function fetchEstados() {
      try {
        const estadosData = await getEstados();
        setEstados(estadosData);
      } catch (error) {
        console.error('Erro ao carregar estados:', error);
      }
    }

    fetchEstados();
  }, []);

  const handleCreateCidade = async () => {
    try {
      await createCidade({ nome, estadoId });
      // Redirecionar para a lista de cidades ou realizar outra ação após a criação bem-sucedida
    } catch (error) {
      console.error('Erro ao criar cidade:', error);
    }
  };

  return (
    <Box>
      <Text variant="h1">Criar Cidade</Text>
      <TextInput
        label="Nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <Select
        label="Estado"
        value={estadoId}
        onChange={(event) => setEstadoId(event.target.value)}
      >
        {estados.map((estado) => (
          <option key={estado.id} value={estado.id}>
            {estado.nome}
          </option>
        ))}
      </Select>
      <Button onClick={handleCreateCidade}>Criar</Button>
    </Box>
  );
}
