'use client';

import { apiClient } from '@/src/api-client/client';
import { TipoMovimentacaoForm, TipoMovimentacaoFormInput } from '@/src/components';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export default function TipoMovimentacaoCreate() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: apiClient.tipoMovimentacao.create,
        mutationKey: ['createTipoMovimentacao'],
        onError(e) {
            toast.error("Erro ao criar tipo de movimentação");
        },
        onSettled: async () => {
            await queryClient.invalidateQueries({ queryKey: ['tiposMovimentacao'] });
        },
        onSuccess(data, variables, context) {
            toast.success("Criado com sucesso");
            router.push("/tipoMovimentacao");
            router.refresh();
        },
    });

    const onSubmit = async (values: TipoMovimentacaoFormInput) => {
        await mutate(values);
    };

    return <TipoMovimentacaoForm onSubmit={onSubmit} title="Adicionar tipo de movimentação" />;
}