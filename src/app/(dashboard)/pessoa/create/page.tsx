'use client';

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { Box, Button, Loader, Select, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Pessoa } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-toastify';

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
type PessoaForm =  {
estado: number;
} & Omit<Pessoa, "endereco" | "id" >;

export default function PessoaCreate() {
    const [estados, setEstados] = useState<Estado[]>([]);
    const [cidades, setCidades] = useState<Cidade[]>([]);
    const [cidadesLoading, setCidadesLoading] = useState(false);
    const axios = useAxiosClient();
    const router = useRouter();
    const form = useForm<PessoaForm>({
        initialValues: {
            nome: '',
            email: '',
            cidade_ibge_id: 0,
            estado: 0,
            cpf: '',
            cnis: "",
            data_nasc: new Date(),
            telefone: "",
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
    const [isPending, startTransition] = useTransition();
    const handleSubmit = (values: PessoaForm) => {
        startTransition(async () => {
            try{
                const response = await axios.post("/pessoa", values);
                toast.success("Inserido com sucesso.");
                router.push("/pessoa");
            } catch(e) {
                toast.error("Erro ao adicionar uma nova pessoa");
            }
        });
    }
    return (
        <Box>
            <Text variant="h1">Adicionar Pessoa</Text>
            <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
                label="Nome"
                {...form.getInputProps('nome')}
            />
            <TextInput
                label="Email"
                {...form.getInputProps('email')}
            />
             <TextInput
                label="CPF"
                {...form.getInputProps('cpf')}
            />
             <TextInput
                label="CNIS"
                {...form.getInputProps('cnis')}
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

                {...form.getInputProps('cidade_ibge_id')}
            /> : null}

            <Button type="submit" loading={isPending}>Adicionar</Button>
            </form>
        </Box>
    );
}