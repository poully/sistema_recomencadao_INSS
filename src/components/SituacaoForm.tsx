'use client';

import { Box, Button, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Situacao } from '@prisma/client';
import { useEffect, useTransition } from 'react';


export type SituacaoFormInput = Omit<Situacao, "id">;

type SituacaoFormProps = {
    data?: SituacaoFormInput | undefined;
    onSubmit?: (values: SituacaoFormInput) => Promise<void>;
    title?: string;
}
export function SituacaoForm({ data, onSubmit, title }: SituacaoFormProps) {
    const form = useForm<SituacaoFormInput>({
        initialValues: {
            nome: '',
        },
    });
    useEffect(() => {
        if (data) {
            form.setValues(data);
        }
    }, [data]);
    const [isPending, startTransition] = useTransition();
    const handleSubmit = (values: SituacaoFormInput) => {
        if (onSubmit) {
            startTransition(async () => onSubmit(values));
        }
    }
    return (
        <Box>
            <Text variant="h1">{title}</Text>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    label="Situacao do Benefício"
                    {...form.getInputProps('nome')}
                />
                <Box>
                    <Button mt="sm" type="submit" loading={isPending}>{data ? "Alterar" : "Adicionar"}</Button>
                </Box>

            </form>
        </Box>
    );
}