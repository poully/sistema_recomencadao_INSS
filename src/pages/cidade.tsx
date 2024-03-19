import { useState, useEffect } from 'react';
import { Box, Button, Text, TextInput } from '@mantine/core';
import { createCidade, getAllCidades } from '@/src/api-client/CreateCidade';

export default function Home() {
    const [cidades, setCidades] = useState([]);
    const [cidadeForm, setCidadeForm] = useState({ nome: '' });

    useEffect(() => {
        async function fetchData() {
            const cidadesData = await getAllCidades();
            setCidades(cidadesData);
        }
        fetchData();
    }, []);

    const handleCreateCidade = async () => {
        await createCidade(cidadeForm);
        setCidadeForm({ nome: '' });
        const updatedCidades = await getAllCidades();
        setCidades(updatedCidades);
    };



    return (
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
    );
}
