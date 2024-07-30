'use client';

import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { PessoaForm, PessoaFormInput } from '@/src/components';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


export default function PessoaCreate() {
    const axios = useAxiosClient();
    const router = useRouter();


    const onSubmit = async (values: PessoaFormInput) => {
        try {
            //const { uf, ...input } = values;
            const response = await axios.post("/pessoas", values);
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