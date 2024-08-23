'use client'

import { TipoMovimentacaoForm, TipoMovimentacaoFormInput } from '@/src/components';
import { Loader } from '@mantine/core';
import { apiClient } from "@/src/api-client/client";
import type { TipoMovimentacaoGet } from "@/src/api-client/client/tipoMovimentacao";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


export default function TipoMovimentacaoUpdate() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const params = useParams<{ id: string }>();
    const { data: tipoMovimentacao, error, isPending } = useQuery(
        {
            queryKey: ['tipoMovimentacao', params.id],
            queryFn: async () => apiClient.tipoMovimentacao.get({ id: params.id }) as Promise<TipoMovimentacaoGet[0]>
        }
    );
    const { mutate } = useMutation({
        mutationFn: apiClient.tipoMovimentacao.update, mutationKey: ['updateTipoMovimentacao'], onError(e) {
            toast.error("Erro ao alterar tipo de movimentação");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['tiposMovimentacao'] })
        },
        onSuccess(data, variables, context) {
            toast.success("Alterado com sucesso.");
            router.push("/tipoMovimentacao");
            router.refresh();
        },
    });
    const onSubmit = async (values: TipoMovimentacaoFormInput) => {
        await mutate({ id: params.id, ...values });
    }
    return !isPending && tipoMovimentacao ? <TipoMovimentacaoForm onSubmit={onSubmit} data={tipoMovimentacao as unknown as TipoMovimentacaoFormInput} title="Editar tipo de movimentação" /> : <Loader color="blue" />;
}