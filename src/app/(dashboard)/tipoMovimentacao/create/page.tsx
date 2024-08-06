'use client'

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { TipoMovimentacaoForm, TipoMovimentacaoFormInput } from '@/src/components/TipoMovimentacaoForm';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function TipoCreate() {
    const axios = useAxiosClient();
    const router = useRouter();

    const onSubmit = async (values: TipoMovimentacaoFormInput) => {
        try {
            const response = await axios.post("/tipoMovimentacao", values);
            toast.success("Inserido com sucesso.");
            router.push("/tipoMovimentacao");
        } catch (e) {
            const error = e as AxiosError;
            // @ts-expect-error
            toast.error(error.response?.data?.error!);
        }
    }
    return <TipoMovimentacaoForm onSubmit={onSubmit} title="Adicionar tipo" />
}