'use client'
import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { Tipo } from '@prisma/client';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import input from 'postcss/lib/input';
import { toast } from 'react-toastify';

type TipoForm = Omit<Tipo, "id">;

export default function TipoCreate() {
    const axios = useAxiosClient();
    const router = useRouter();

    const onSubmit = async (values: TipoForm) => {
        try {
            const response = await axios.post("/tipoBeneficio", input);
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