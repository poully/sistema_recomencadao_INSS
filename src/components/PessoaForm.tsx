'use client';

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { useIbge } from '@/src/hooks';
import { Box, Button, Loader, Select, Text, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { Pessoa } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useEffect, useTransition } from 'react';


export type PessoaFormInput = Omit<Pessoa, "id">;

type PessoaFormProps = {
    data?: PessoaFormInput | undefined;
    onSubmit?: (values: PessoaFormInput) => Promise<void>;
    title?: string;
}
export function PessoaForm({ data, onSubmit, title }: PessoaFormProps) {
    const axios = useAxiosClient();
    const router = useRouter();
    const form = useForm<PessoaFormInput>({
        initialValues: {
            nome: '',
            email: '',
            cidade: '',
            uf: '',
            cpf: '',
            cnis: "",
            data_nasc: new Date(),
            telefone: "",
            endereco: "",
        },
    });
    const onChangeEstado = (estadoId: string) => {
        form.setFieldValue('estado', estadoId);
    };
    const { cidades, estados, cidadesLoading, setSelectedEstado } = useIbge({ cidadeId: data?.cidade_ibge_id, onChangeEstado });

    useEffect(() => {
        if (form.values.estado) {
            setSelectedEstado(form.values.estado);
        }
    }, [form.values.estado]);

    useEffect(() => {
        if (data) {
            form.setValues({ ...data, data_nasc: new Date(data.data_nasc) });
        }
    }, [data]);

    const [isPending, startTransition] = useTransition();
    const handleSubmit = (values: PessoaFormInput) => {
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
                    label="CPF"
                    {...form.getInputProps('cpf')}
                />
                <TextInput
                    label="CNIS"
                    {...form.getInputProps('cnis')}
                />
                <TextInput
                    label="Telefone"
                    {...form.getInputProps('telefone')}
                />
                <TextInput
                    label="Endereço"
                    {...form.getInputProps('endereco')}
                />
                <DatePickerInput
                    valueFormat="DD MMM YYYY"
                    label="Data de nascimento"
                    placeholder="data de nascimento"
                    {...form.getInputProps('data_nasc')}
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