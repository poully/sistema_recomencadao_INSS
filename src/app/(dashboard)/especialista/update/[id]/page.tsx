'use client'
import { useAxiosClient } from '@/src/api-client/getAxiosClient';
import { EspecialistaFormInput, EspecialistaForm } from '@/src/components/EspecialistaForm';
import { Loader } from '@mantine/core';
import { Especialista } from '@prisma/client';
import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-toastify';


export default function EspecialistaUpdate() {
    const axios = useAxiosClient();
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const [isPending, startTransition] = useTransition();
    const [especialista, setEspecialista] = useState<Especialista | null>(null);
    useEffect(() => {
        startTransition(async () => {
            try {
                const especialista = await axios.get(`/especialista/${params.id}`);
                setEspecialista(especialista.data);
            } catch (e) {
                const error = e as AxiosError;
                // @ts-expect-error
                toast.error(error.response?.data?.error!);
                router.back();
            }

        });
    }, [])

    const onSubmit = async (values: EspecialistaFormInput) => {
        try {
            const { estado, ...input } = values;
            const response = await axios.put(`/especialista/${especialista?.id}`, input);
            toast.success("Alterado com sucesso.");
            router.push("/especialista");
        } catch (e) {
            const error = e as AxiosError;
            // @ts-expect-error
            toast.error(error.response?.data?.error!);
        }
    }
    return !isPending && especialista ? <EspecialistaForm onSubmit={onSubmit} data={especialista as unknown as EspecialistaFormInput} title="Editar Especialista" /> : <Loader color="blue" />;
}