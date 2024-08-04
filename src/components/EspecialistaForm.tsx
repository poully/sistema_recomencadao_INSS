'use client';

import { useIbge } from '@/src/hooks';
import { Box, Button, Loader, Select, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Especialista } from '@prisma/client';
import { useEffect, useTransition } from 'react';


export type EspecialistaFormInput = Omit<Especialista, "id">;

type EspecialistaFormProps = {
    data?: EspecialistaFormInput | undefined;
    onSubmit?: (values: EspecialistaFormInput) => Promise<void>;
    title?: string;
}
export function EspecialistaForm({ data, onSubmit, title }: EspecialistaFormProps) {
    const form = useForm<EspecialistaFormInput>({
        initialValues: {
            nome: '',
            email: '',
            cidade: '',
            uf: '',
            telefone: "",
            endereco: "",
        },
    });

    const { cidades, estados, cidadesLoading, estadosLoading, setSelectedEstado } = useIbge();

    useEffect(() => {
        
        if (form.values.uf && form.values.uf !== '' && !estadosLoading) {
            setSelectedEstado(form.values.uf);
        }
    }, [form.values.uf, estadosLoading]);

    useEffect(() => {
        if (data) {
            form.setValues({ ...data});
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
                {estadosLoading && <Loader />}
                {!estadosLoading ? <Select
                    label="Estado"
                    placeholder="Selecione o estado"
                    data={estados.map(e => ({ value: `${e.sigla}`, label: e.nome }))}
                    {...form.getInputProps('uf')}
                /> : null}
                {cidadesLoading && <Loader />}
                {cidades?.length && !cidadesLoading ? <Select
                    label="Cidade"
                    placeholder="Selecione a cidade"
                    disabled={!form.values.uf}
                    data={cidades.map(e => ({ value: `${e.id}`, label: e.nome }))}

                    {...form.getInputProps('cidade')}
                /> : null}

                <Box>
                    <Button mt="sm" type="submit" loading={isPending}>{data ? "Alterar" : "Adicionar"}</Button>
                </Box>

            </form>
        </Box>
    );
}