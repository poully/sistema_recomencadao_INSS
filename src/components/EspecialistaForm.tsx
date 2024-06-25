'use client';

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { useIbge } from '@/src/hooks';
import { Box, Button, Loader, Select, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Especialista } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useEffect, useTransition } from 'react';


export type EspecialistaFormInput = {
    estado: number;
} & Omit<Especialista, "id">;
type EspecialistaFormProps = {
    data?: EspecialistaFormInput | undefined;
    onSubmit?: (values: EspecialistaFormInput) => Promise<void>;
    title?: string;
}
export function EspecialistaForm({ data, onSubmit, title }: EspecialistaFormProps) {
    const axios = useAxiosClient();
    const router = useRouter();
    const form = useForm<EspecialistaFormInput>({
        initialValues: {
            nome: '',
            email: '',
            cidade_ibge_id: 0,
            estado: 0,
            telefone: "",
            endereco: "",
        },
    });
    const onChangeEstado = (estadoId: number) => {
        form.setFieldValue('estado', estadoId);
    };
    const { cidades, estados, cidadesLoading, setSelectedEstado, setSelectedCidade } = useIbge({ cidadeId: data?.cidade_ibge_id, onChangeEstado });

    useEffect(() => {
        if (form.values.estado) {
            setSelectedEstado(form.values.estado);
        }
    }, [form.values.estado, data?.cidade_ibge_id]);

    useEffect(() => {
        if (data) {
            if (data.cidade_ibge_id) setSelectedCidade(data.cidade_ibge_id);
        }
    }, [data]);

    const [isPending, startTransition] = useTransition();
    const handleSubmit = (values: EspecialistaFormInput) => {
        if (onSubmit) {
            startTransition(async () => onSubmit(values));
        }
    }
    return (
        <Box>
            <Text variant="h1">{title}</Text>
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
                    label="Telefone"
                    {...form.getInputProps('telefone')}
                />
                <TextInput
                    label="Endereço"
                    {...form.getInputProps('endereco')}
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

                <Box>
                    <Button mt="sm" type="submit" loading={isPending}>{data ? "Alterar" : "Adicionar"}</Button>
                </Box>

            </form>
        </Box>
    );
}