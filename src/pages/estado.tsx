import { useState, useEffect } from 'react';
import { Box, Button, Modal, Text, TextInput } from '@mantine/core';
import { getAllEstados } from '../lib/api';

export default function Home() {
    const [estados, setEstados] = useState([]);
    const [estadoForm, setEstadoForm] = useState({ nome: '' });
    const [isEstadoModalOpen, setIsEstadoModalOpen] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const estadosData = await getAllEstados();
            setEstados(estadosData);
        }
        fetchData();
    }, []);

    const handleCreateEstado = async () => {
        await createEstado(estadoForm);
        setEstadoForm({ nome: '' });
        setIsEstadoModalOpen(false);
        const updatedEstados = await getAllEstados();
        setEstados(updatedEstados);
    };

    return (
        <Box>
            <Text variant="h1">Estados</Text>
            {estados.map((estado) => (
                <Box key={estado.id}>
                    <Text>{estado.nome}</Text>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                </Box>
            ))}
            <Button onClick={() => setIsEstadoModalOpen(true)}>Add Estado</Button>
            <Modal
                opened={isEstadoModalOpen}
                onClose={() => setIsEstadoModalOpen(false)}
                title="Adicionar Estado"
            >
                <TextInput
                    label="Nome"
                    value={estadoForm.nome}
                    onChange={(event) => setEstadoForm({ nome: event.target.value })}
                />
                <Button onClick={handleCreateEstado}>Adicionar</Button>
            </Modal>
        </Box>
    );
}