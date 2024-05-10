'use client';

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { Box, Button, Loader, Select, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Beneficio, Movimentacao } from '@prisma/client';
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

type BeneficioForm = Omit<Beneficio, "id">;

export default function BeneficioCreate() {
    const [pessoa] = useState<Pessoa[]>([]);
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

    const [isPending, startTransition] = useTransition();
    const handleSubmit = (values: BeneficioForm) => {
        startTransition(async () => {
            try {
                const response = await axios.post("/beneficio", values);
                toast.success("Inserido com sucesso.");
                router.push("/beneficio");
            } catch (e) {
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
                    {...form.getInputProps('pessoa')}
                />
                <Select
                    label="Situação"
                    placeholder="Selecione a Situação"
                    data={pessoa.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('situacao')}
                />
                <Select
                    label="Movimentação"
                    placeholder="Selecione a Movimentação"
                    data={pessoa.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('movimentacao')}
                />
                <Select
                    label="Tipo de Beneficio"
                    placeholder="Tipo de Beneficio"
                    data={pessoa.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('tipoBeneficio')}
                />
                <Select
                    label="Especialista"
                    placeholder="Selecione o Especialista"
                    data={pessoa.map(e => ({ value: `${e.id}`, label: e.nome }))}
                    {...form.getInputProps('especialista')}
                />

                <Button type="submit" loading={isPending}>Adicionar</Button>
            </form>
        </Box>
    );
}