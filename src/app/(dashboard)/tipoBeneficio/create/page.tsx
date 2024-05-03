'use client'
import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { Tipo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

type TipoForm = Omit<Tipo, "id">;

export default function TipoCreate() {
    const axios = useAxiosClient();
    const router = useRouter();

    const onSubmit = async (values: TipoForm) => {
        try {

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