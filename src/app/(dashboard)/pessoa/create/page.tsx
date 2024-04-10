'use client';

import { Box, Button, Loader, Select, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';


type Estado = {
    id: number;
    nome: string;
    sigla: string;
    regiao: {
        id: string;
        sigla: string;
        nome: string;
    }
};
type Cidade = {
    id: number;
    nome: string;
}
export default function PessoaCreate() {
    const [estados, setEstados] = useState<Estado[]>([]);
    const [cidades, setCidades] = useState<Cidade[]>([]);
    const [cidadesLoading, setCidadesLoading] = useState(false);

    const form = useForm({
        initialValues: {
            nome: '',
            cidade: 0,
            estado: 0,
        },
    });

    useEffect(() => {
        const fetchEstados = async () => {
            const estadosResponse = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
            const estados = await estadosResponse.json();
            setEstados(estados);
        };
        fetchEstados();
    }, []);

    useEffect(() => {
        const fetchMunicipios = async () => {
            if (form.values.estado) {
                setCidadesLoading(true);
                const municipiosResponse = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${form.values.estado}/municipios`);
                const municipios = await municipiosResponse.json();
                setCidades(municipios);
                setCidadesLoading(false);
            }
        };
        fetchMunicipios();
    }, [form.values.estado]);

    return (
        <Box>
            <Text variant="h1">Adicionar Pessoa</Text>
            <TextInput
                label="Nome"
            />
            <Select
                label="Estado"
                placeholder="Selecione o estado"
                data={estados.map(e => ({ value: `${e.id}`, label: e.nome }))}
                {...form.getInputProps('estado')}
            />
            {cidadesLoading && <Loader />}
            {cidades?.length && !cidadesLoading ? <Select
                label="Cidade"
                placeholder="Selecione a cidade"
                disabled={!form.values.estado}
                data={cidades.map(e => ({ value: `${e.id}`, label: e.nome }))}

                {...form.getInputProps('cidade')}
            /> : null}

            <Button>Adicionar</Button>
        </Box>
    );
}