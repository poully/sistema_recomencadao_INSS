import { useEffect, useState } from 'react';
import { Box, Button, Text } from '@mantine/core';
import { getEstados } from '@/src/api-client/estadoService';

export default function EstadoList() {
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

  return (
    <Box>
      <Text variant="h1">Lista de Estados</Text>
      {estados.map((estado) => (
        <Box key={estado.id}>
          <Text>{estado.nome}</Text>
          {/* Adicione botões para editar e excluir, se necessário */}
        </Box>
      ))}
    </Box>
  );
}
