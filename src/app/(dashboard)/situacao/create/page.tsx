'use client'

import { apiClient } from '@/src/api-client/client';
import { SituacaoForm, SituacaoFormInput } from '@/src/components/SituacaoForm';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from 'react-query';

export default function SituacaoCreate() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: apiClient.situacao.create, mutationKey: ['createSituacao'], onError(e) {
            console.log(e);
            toast.error("Erro ao criar situação");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['situacoes'] })
        },
        onSuccess(data, variables, context) {
            toast.success("Criado com sucesso");
        },
    });


    const onSubmit = async (values: SituacaoFormInput) => {
        try {
            const response = await mutate(values);
            toast.success("Inserido com sucesso.");
            router.push("/situacao");
            router.refresh();
        } catch (e) {
            const error = e;
            // @ts-expect-error
            toast.error(error);
        }
    }
    return <SituacaoForm onSubmit={onSubmit} title="Adicionar situação" />
}