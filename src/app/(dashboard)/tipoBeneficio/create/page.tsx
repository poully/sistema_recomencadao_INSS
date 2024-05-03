'use client'
import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { Box, Button, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Tipo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'react-toastify';

type TipoForm = Omit<Tipo, "id">;

export default function TipoCreate() {
    const axios = useAxiosClient();
    const router = useRouter();
    const form = useForm<TipoForm>({
        initialValues: {
            nome: '',
        },
    });
    console.log(form);

    const [isPending, startTransition] = useTransition();
    const handleSubmit = (values: TipoForm) => {
        startTransition(async () => {
            try {
                const response = await axios.post("/tipoBeneficio", values);
                toast.success("Inserido com sucesso.");
                router.push("/tipoBeneficio");
                console.log(response);
            } catch (e) {
                toast.error("Erro ao adicionar um novo tipo de beneficio");
            }
        });
    }
    return (
        <Box>
            <Text variant="h1">Adicionar tipo</Text>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <TextInput
                    label="Nome do tipo beneficio"
                    {...form.getInputProps('nome')}
                />

                <Button type="submit" loading={isPending}>Adicionar</Button>
            </form>
        </Box>
    );
}