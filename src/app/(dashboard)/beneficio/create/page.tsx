'use client';

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { Box, Button, Loader, Select, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Beneficio } from '@prisma/client';
import { Movimentacao } from '@prisma/client';
import { Tipo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-toastify';

type Pessoa = {
    id: number;
    nome: string;
}

type Movimentacao = {
    id: number;
    nome: string;
}

type Tipo = {
    id: number;
    nome: string;
}

type BeneficioForm =  {
estado: number;
} & Omit<Beneficio, "id" >;

export default function BeneficioCreate() {
    const [pessoa, setPessoa] = useState<Pessoa[]>([]);
    const [pessoasLoading, setPessoasLoading] = useState(false);
    const axios = useAxiosClient();
    const router = useRouter();
    const form = useForm<BeneficioForm>({
        initialValues: {
            numero_beneficio: '',
            situacao_id: 0,
            pessoa_id: 0,
            tipo_id: 0,
            especialista_id: 0,
        },
    });

    // useEffect(() => {
    //     const fetchEstados = async () => {
    //         const estadosResponse = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
    //         const estados = await estadosResponse.json();
    //         setEstados(estados);
    //     };
    //     fetchEstados();
    // }, []);

    // useEffect(() => {
    //     const fetchMunicipios = async () => {
    //         if (form.values.estado) {
    //             setCidadesLoading(true);
    //             const municipiosResponse = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${form.values.estado}/municipios`);
    //             const municipios = await municipiosResponse.json();
    //             setCidades(municipios);
    //             setCidadesLoading(false);
    //         }
    //     };
    //     fetchMunicipios();
    // }, [form.values.estado]);
    const [isPending, startTransition] = useTransition();
    const handleSubmit = (values: BeneficioForm) => {
        startTransition(async () => {
            try{
                const response = await axios.post("/beneficio", values);
                toast.success("Inserido com sucesso.");
                router.push("/beneficio");
            } catch(e) {
                toast.error("Erro ao adicionar um novo beneficio");
            }
        });
    }
    return (
        <Box>
            <Text variant="h1">Adicionar Beneficio</Text>
            <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
                label="Número Beneficio"
                {...form.getInputProps('numero_beneficio')}
            />
            
            <Select
                label="Pessoa"
                placeholder="Selecione a pessoa"
                data={pessoa.map(e => ({ value: `${e.id}`, label: e.nome }))}
                {...form.getInputProps('estado')}
            />
            
            {pessoasLoading && <Loader />}
            {pessoa?.length && !pessoasLoading ? <Select
                label="Cidade"
                placeholder="Selecione a cidade"
                disabled={!form.values.estado}
                data={pessoa.map(e => ({ value: `${e.id}`, label: e.nome }))}

                {...form.getInputProps('cidade_ibge_id')}
            /> : null}

            <Button type="submit" loading={isPending}>Adicionar</Button>
            </form>
        </Box>
    );
}