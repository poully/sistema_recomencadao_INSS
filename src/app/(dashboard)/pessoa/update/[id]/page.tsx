'use client'
import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { PessoaFormInput, PessoaForm } from '@/src/components';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


export default function PessoaUpdate({ params }: { params: { id: string } }) {
    const axios = useAxiosClient();
    const router = useRouter();
    const [pessoa, setPessoa] = useState<PessoaFormInput | null>(null);
    useEffect(() => {
        const fetchPessoa = async () => {
            const pessoa = await axios.get(`/pessoas/${params.id}`);
            setPessoa(pessoa.data);
        }
        fetchPessoa();
    }, [])

    const onSubmit = async (values: PessoaFormInput) => {
        try {
            const { estado, ...input } = values;
            const response = await axios.put("/pessoas", input);
            toast.success("Alterado com sucesso.");
            router.push("/pessoa");
        } catch (e) {
            const error = e as AxiosError;
            // @ts-expect-error
            toast.error(error.response?.data?.error!);
        }
    }
    return pessoa ? <PessoaForm onSubmit={onSubmit} data={pessoa} title="Editar pessoa" /> : <div>Carregando...</div>
}