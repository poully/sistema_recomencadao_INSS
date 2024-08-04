'use client'
import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { TipoForm, TipoFormInput } from '@/src/components/TipoForm';
import { Loader } from '@mantine/core';
import { Tipo } from '@prisma/client';
import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-toastify';


export default function TipoBeneficioUpdate() {
    const axios = useAxiosClient();
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const [isPending, startTransition] = useTransition();
    const [tipoBeneficio, setTipoBeneficio] = useState<Tipo | null>(null);
    useEffect(() => {
        startTransition(async () => {
            try {
                const tipoBeneficio = await axios.get(`/tipoBeneficio/${params.id}`);
                setTipoBeneficio(tipoBeneficio.data);
            } catch (e) {
                const error = e as AxiosError;
                // @ts-expect-error
                toast.error(error.response?.data?.error!);
                router.back();
            }

        });
    }, [])

    const onSubmit = async (values: TipoFormInput) => {
        try {
            const response = await axios.put(`/tipoBeneficio/${tipoBeneficio?.id}`, values);
            toast.success("Alterado com sucesso.");
            router.push("/tipoBeneficio");
        } catch (e) {
            const error = e as AxiosError;
            // @ts-expect-error
            toast.error(error.response?.data?.error!);
        }
    }
    return !isPending && tipoBeneficio ? <TipoForm onSubmit={onSubmit} data={tipoBeneficio as unknown as TipoFormInput} title="Editar tipo de benefício" /> : <Loader color="blue" />;
}