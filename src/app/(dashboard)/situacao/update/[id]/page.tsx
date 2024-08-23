'use client'
import { SituacaoForm, SituacaoFormInput } from '@/src/components/SituacaoForm';
import { Loader } from '@mantine/core';
import { Situacao } from '@prisma/client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'react-toastify';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from '@/src/api-client/client';

export default function SituacaoUpdate() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const params = useParams<{ id: string }>();
    const { data: situacao, error, isPending } = useQuery(
        {
            queryKey: ['situacao', params.id],
            queryFn: async () => apiClient.situacao.get({ id: params.id }) as Promise<SituacaoGet[0]>
        }
    );
    const { mutate } = useMutation({
        mutationFn: apiClient.situacao.update, mutationKey: ['updateSituacao'], onError(e) {
            console.log(e);
            toast.error("Erro ao alterar situação");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['situacoes'] })
        },
        onSuccess(data, variables, context) {
            toast.success("Alterado com sucesso");
        },
    });
    const onSubmit = async (values: SituacaoFormInput) => {
        try {
            const response = await mutate({ id: params.id, ...situacao });
            toast.success("Alterado com sucesso.");
            router.push("/situacao");
            router.refresh();
        } catch (e) {
            const error = e;
            // @ts-expect-error
            toast.error(error);
        }
    }
    return !isPending && situacao ? <SituacaoForm onSubmit={onSubmit} data={situacao as unknown as SituacaoFormInput} title="Editar situacao de benefício" /> : <Loader color="blue" />;
}