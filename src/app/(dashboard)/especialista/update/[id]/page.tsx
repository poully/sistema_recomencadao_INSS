'use client'
import { EspecialistaForm, EspecialistaFormInput } from '@/src/components';
import { Loader } from '@mantine/core';
import { apiClient } from "@/src/api-client/client";
import type { EspecialistaGet } from "@/src/api-client/client/especialista";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function EspecialistaUpdate() {

    const router = useRouter();
    const queryClient = useQueryClient();
    const params = useParams<{ id: string }>();
    const { data: especialista, error, isLoading } = useQuery(
        {
            queryKey: ['especialista', params.id],
            queryFn: async () => apiClient.especialista.get({ id: params.id }) as Promise<EspecialistaGet[0]>
        }
    );
    const { mutate } = useMutation({
        mutationFn: apiClient.especialista.update, mutationKey: ['updateEspecialista'], onError(e) {
            toast.error("Erro ao alterar especialista");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['especialistas'] })
        },
        onSuccess(data, variables, context) {
            toast.success("Alterado com sucesso.");
            router.push("/especialista");
            router.refresh();
        },
    });
    const onSubmit = async (values: EspecialistaFormInput) => {
        await mutate({ id: params.id, ...values });
    }

    return !isLoading && especialista ? <EspecialistaForm onSubmit={onSubmit} data={especialista as unknown as EspecialistaFormInput} title="Editar especialista" /> : <Loader color="blue" />;
}