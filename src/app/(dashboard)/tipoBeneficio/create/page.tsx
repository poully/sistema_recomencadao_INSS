'use client'

import { apiClient } from '@/src/api-client/client';
import { TipoForm, TipoFormInput } from '@/src/components';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function TipoCreate() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: apiClient.tipoBeneficio.create, mutationKey: ['createTipoBeneficio'], onError(e) {
            toast.error("Erro ao criar tipo de benefício");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['tiposBeneficio'] })
        },
        onSuccess(data, variables, context) {
            toast.success("Criado com sucesso");
            router.push("/tipoBeneficio");
            router.refresh();
        },
    });

    return <TipoForm onSubmit={mutate} title="Adicionar tipo" />
}