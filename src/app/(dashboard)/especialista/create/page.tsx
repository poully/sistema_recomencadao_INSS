'use client';

import { apiClient } from '@/src/api-client/client';
import { EspecialistaForm, EspecialistaFormInput } from '@/src/components';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export default function EspecialistaCreate() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: apiClient.especialista.create,
        mutationKey: ['createEspecialista'],
        onError(e) {
            toast.error("Erro ao criar especialista");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['especialistas'] });
        },
        onSuccess(data, variables, context) {
            toast.success("Criado com sucesso");
            router.push("/especialista");
            router.refresh();
        },
    });


    const onSubmit = async (values: EspecialistaFormInput) => {
        await mutate(values);
    }
    return <EspecialistaForm onSubmit={onSubmit} title="Adicionar especialista" />;
}