'use client';

import { Box, Button, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Tipo } from '@prisma/client';
import { useEffect, useTransition } from 'react';


export type TipoFormInput = Omit<Tipo, "id">;

type TipoFormProps = {
    data?: TipoFormInput | undefined;
    onSubmit?: (values: TipoFormInput) => Promise<void>;
    title?: string;
}
export function TipoForm({ data, onSubmit, title }: TipoFormProps) {
    const form = useForm<TipoFormInput>({
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
    const handleSubmit = (values: TipoFormInput) => {
        if (onSubmit) {
            startTransition(async () => onSubmit(values));
        }
    }
    return (
        <Box>
            <Text variant="h1">{title}</Text>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    label="Tipo do Benefício"
                    {...form.getInputProps('nome')}
                />
                <Box>
                    <Button mt="sm" type="submit" loading={isPending}>{data ? "Alterar" : "Adicionar"}</Button>
                </Box>

            </form>
        </Box>
    );
}