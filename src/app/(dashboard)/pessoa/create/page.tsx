'use client';

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { PessoaFormInput, PessoaForm } from '@/src/components';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


export default function PessoaCreate() {
    const axios = useAxiosClient();
    const router = useRouter();


    const onSubmit = async (values: PessoaFormInput) => {
        try {
            const { estado, ...input } = values;
            const response = await axios.post("/pessoas", input);
            toast.success("Inserido com sucesso.");
            router.push("/pessoa");
        } catch (e) {
            const error = e as AxiosError;
            // @ts-expect-error
            toast.error(error.response?.data?.error!);
        }
    }
    return <PessoaForm onSubmit={onSubmit} title="Adicionar pessoa" />
}