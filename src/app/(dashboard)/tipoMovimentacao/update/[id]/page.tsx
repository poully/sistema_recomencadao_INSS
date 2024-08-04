'use client'
import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { TipoMovimentacaoForm, TipoMovimentacaoFormInput } from '@/src/components/TipoMovimentacaoForm';
import { Loader } from '@mantine/core';
import { TipoMovimentacao } from '@prisma/client';
import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-toastify';


export default function TipoMovimentacaoUpdate() {
    const axios = useAxiosClient();
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const [isPending, startTransition] = useTransition();
    const [tipoMovimentacao, setTipoMovimentacao] = useState<TipoMovimentacao | null>(null);
    useEffect(() => {
        startTransition(async () => {
            try {
                const tipoMovimentacao = await axios.get(`/tipoMovimentacao/${params.id}`);
                setTipoMovimentacao(tipoMovimentacao.data);
            } catch (e) {
                const error = e as AxiosError;
                // @ts-expect-error
                toast.error(error.response?.data?.error!);
                router.back();
            }

        });
    }, [])

    const onSubmit = async (values: TipoMovimentacaoFormInput) => {
        try {
            const response = await axios.put(`/tipoMovimentacao/${tipoMovimentacao?.id}`, values);
            toast.success("Alterado com sucesso.");
            router.push("/tipoMovimentacao");
        } catch (e) {
            const error = e as AxiosError;
            // @ts-expect-error
            toast.error(error.response?.data?.error!);
        }
    }
    return !isPending && tipoMovimentacao ? <TipoMovimentacaoForm onSubmit={onSubmit} data={tipoMovimentacao as unknown as TipoMovimentacaoFormInput} title="Editar tipo de movimentação" /> : <Loader color="blue" />;
}