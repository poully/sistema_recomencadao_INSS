'use client'
import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { TipoMovimentacao } from '@prisma/client';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import input from 'postcss/lib/input';
import { toast } from 'react-toastify';

type TipoMovimentacaoForm = Omit<TipoMovimentacao, "id">;

export default function TipoCreate() {
    const axios = useAxiosClient();
    const router = useRouter();

    const onSubmit = async (values: TipoMovimentacaoForm) => {
        try {
            const response = await axios.post("/TipoMovimentacao", input);
            toast.success("Inserido com sucesso.");
            router.push("/TipoMovimentacao");
        } catch (e) {
            const error = e as AxiosError;
            // @ts-expect-error
            toast.error(error.response?.data?.error!);
        }
    }
    return <TipoMovimentacaoForm onSubmit={onSubmit} title="Adicionar tipo" />
}