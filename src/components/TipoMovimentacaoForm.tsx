'use client';

import { Box, Button, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { TipoMovimentacao } from '@prisma/client';
import { useTransition } from 'react';


export type TipoMovimentacaoFormInput = Omit<TipoMovimentacao, "id">;

type TipoMovimentacaoFormProps = {
    data?: TipoMovimentacaoFormInput | undefined;
    onSubmit?: (values: TipoMovimentacaoFormInput) => Promise<void>;
    title?: string;
}
export function TipoMovimentacaoForm({ data, onSubmit, title }: TipoMovimentacaoFormProps) {
    const form = useForm<TipoMovimentacaoFormInput>({
        initialValues: {
            nome: '',
        },
    });

    const [isPending, startTransition] = useTransition();
    const handleSubmit = (values: TipoMovimentacaoFormInput) => {
        if (onSubmit) {
            startTransition(async () => onSubmit(values));
        }
    }
    return (
        <Box>
            <Text variant="h1">{title}</Text>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    label="Tipo de movimentação do benefício"
                    {...form.getInputProps('nome')}
                />
                <Box>
                    <Button mt="sm" type="submit" loading={isPending}>{data ? "Alterar" : "Adicionar"}</Button>
                </Box>

            </form>
        </Box>
    );
}