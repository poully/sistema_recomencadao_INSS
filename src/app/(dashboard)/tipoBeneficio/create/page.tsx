'use client'

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { TipoForm, TipoFormInput } from '@/src/components/TipoForm';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function TipoCreate() {
    const axios = useAxiosClient();
    const router = useRouter();

    const onSubmit = async (values: TipoFormInput) => {
        try {
            const response = await axios.post("/tipoBeneficio", values);
            toast.success("Inserido com sucesso.");
            router.push("/tipoBeneficio");
        } catch (e) {
            const error = e as AxiosError;
            // @ts-expect-error
            toast.error(error.response?.data?.error!);
        }
    }
    return <TipoForm onSubmit={onSubmit} title="Adicionar tipo" />
}