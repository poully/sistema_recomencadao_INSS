import { useState, useEffect } from 'react';
import { Box, Button, Text, Modal, TextInput } from '@mantine/core';
import { useCreateAuxilioMaternidade } from '@/src/api-client/useCreateAuxilioMaternidade';

export default function Home() {
    const [cidades, setCidades] = useState([]);
    const [cidadeForm, setCidadeForm] = useState({ nome: '' });
    const [isCidadeModalOpen, setIsCidadeModalOpen] = useState(false);

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
        setIsCidadeModalOpen(false);
        const updatedCidades = await getAllCidades();
        setCidades(updatedCidades);
    };

    return (
        <Box>
            <Text variant="h1">Cidades</Text>
            {cidades.map((cidade) => (
                <Box key={cidade.id}>
                    <Text>{cidade.nome}</Text>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                </Box>
            ))}
            <Button onClick={() => setIsCidadeModalOpen(true)}>Add Cidade</Button>

            <Modal
                opened={isCidadeModalOpen}
                onClose={() => setIsCidadeModalOpen(false)}
                title="Adicionar Cidade"
            >
                <TextInput
                    label="Nome"
                    value={cidadeForm.nome}
                    onChange={(event) => setCidadeForm({ nome: event.target.value })}
                />
                <Button onClick={handleCreateCidade}>Adicionar</Button>
            </Modal>
        </Box>
    );
}