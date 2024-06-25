'use client';

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { EspecialistaFormInput , EspecialistaForm } from '@/src/components/EspecialistaForm';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


export default function EspecialistaCreate() {
    const axios = useAxiosClient();
    const router = useRouter();


    const onSubmit = async (values: EspecialistaFormInput) => {
        try {
            const { estado, ...input } = values;
            const response = await axios.post("/especialista", input);
            toast.success("Inserido com sucesso.");
            router.push("/especialista");
        } catch (e) {
            const error = e as AxiosError;
            // @ts-expect-error
            toast.error(error.response?.data?.error!);
        }
    }
    return <EspecialistaForm onSubmit={onSubmit} title="Adicionar Especialista" />
}