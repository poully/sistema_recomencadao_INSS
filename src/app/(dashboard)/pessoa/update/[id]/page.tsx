'use client'
import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { PessoaForm, PessoaFormInput } from '@/src/components';
import { Loader } from '@mantine/core';
import { Pessoa } from '@prisma/client';
import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-toastify';


export default function PessoaUpdate() {
    const axios = useAxiosClient();
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const [isPending, startTransition] = useTransition();
    const [pessoa, setPessoa] = useState<Pessoa | null>(null);
    useEffect(() => {
        startTransition(async () => {
            try {
                const pessoa = await axios.get(`/pessoas/${params.id}`);
                setPessoa(pessoa.data);
            } catch (e) {
                const error = e as AxiosError;
                // @ts-expect-error
                toast.error(error.response?.data?.error!);
                router.back();
            }

        });
    }, [])

    const onSubmit = async (values: PessoaFormInput) => {
        try {
            const response = await axios.put(`/pessoas/${pessoa?.id}`, values);
            toast.success("Alterado com sucesso.");
            router.push("/pessoa");
        } catch (e) {
            const error = e as AxiosError;
            // @ts-expect-error
            toast.error(error.response?.data?.error!);
        }
    }
    return !isPending && pessoa ? <PessoaForm onSubmit={onSubmit} data={pessoa as unknown as PessoaFormInput} title="Editar pessoa" /> : <Loader color="blue" />;
}