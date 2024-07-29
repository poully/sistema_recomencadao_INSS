'use client';

import { useIbge } from '@/src/hooks';
import { Box, Button, Loader, Select, Text, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { Pessoa } from '@prisma/client';
import { useEffect, useTransition } from 'react';


export type PessoaFormInput = Omit<Pessoa, "id">;

type PessoaFormProps = {
    data?: PessoaFormInput | undefined;
    onSubmit?: (values: PessoaFormInput) => Promise<void>;
    title?: string;
}
export function PessoaForm({ data, onSubmit, title }: PessoaFormProps) {
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

    const { cidades, estados, cidadesLoading, estadosLoading, setSelectedEstado } = useIbge();

    useEffect(() => {
        if (form.values.uf && form.values.uf !== '' && !estadosLoading) {
            setSelectedEstado(form.values.uf);
        }
    }, [form.values.uf, estadosLoading]);

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
                    data={cidades.map(e => ({ value: `${e.nome}`, label: e.nome }))}
                    {...form.getInputProps('cidade')}
                /> : null}

                <Box>
                    <Button mt="sm" type="submit" loading={isPending}>{data ? "Alterar" : "Adicionar"}</Button>
                </Box>

            </form>
        </Box>
    );
}