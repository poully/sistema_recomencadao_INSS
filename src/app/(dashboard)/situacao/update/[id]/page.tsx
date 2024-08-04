'use client'
import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { SituacaoForm, SituacaoFormInput } from '@/src/components/SituacaoForm';
import { Loader } from '@mantine/core';
import { Situacao } from '@prisma/client';
import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-toastify';


export default function SituacaoUpdate() {
    const axios = useAxiosClient();
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const [isPending, startTransition] = useTransition();
    const [situacao, setSituacao] = useState<Situacao | null>(null);
    useEffect(() => {
        startTransition(async () => {
            try {
                const situacao = await axios.get(`/situacao/${params.id}`);
                setSituacao(situacao.data);
            } catch (e) {
                const error = e as AxiosError;
                // @ts-expect-error
                toast.error(error.response?.data?.error!);
                router.back();
            }

        });
    }, [])

    const onSubmit = async (values: SituacaoFormInput) => {
        try {
            const response = await axios.put(`/situacao/${situacao?.id}`, values);
            toast.success("Alterado com sucesso.");
            router.push("/situacao");
        } catch (e) {
            const error = e as AxiosError;
            // @ts-expect-error
            toast.error(error.response?.data?.error!);
        }
    }
    return !isPending && situacao ? <SituacaoForm onSubmit={onSubmit} data={situacao as unknown as SituacaoFormInput} title="Editar situacao de benefício" /> : <Loader color="blue" />;
}