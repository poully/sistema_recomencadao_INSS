'use client';

import { apiClient } from '@/src/api-client/client';
import { TableTd, TableTr } from '@mantine/core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from "react-toastify";
import { RowActions } from '@/src/components';
import { useRouter } from 'next/navigation';
import { TipoMovimentacaoGet } from '@/src/api-client/client/tipoMovimentacao';

export function TipoMovimentacaoRows(props: { tipomovimentacaos: TipoMovimentacaoGet }) {
    const router = useRouter();

    const queryClient = useQueryClient()
    const { data } = useQuery({
        queryKey: ['tiposMovimentacao'],
        queryFn: async () => apiClient.tipoMovimentacao.get({}) as Promise<TipoMovimentacaoGet>,
        initialData: props.tipomovimentacaos,
    });

    const { mutate } = useMutation({
        mutationFn: apiClient.tipoMovimentacao.remove, mutationKey: ['removeTipoMovimentacao'], onError(e) {
            console.log(e);
            toast.error("Erro ao remover");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['tiposMovimentacao'] })
        },
        onSuccess(data, variables, context) {
            toast.success("Removido com sucesso");
        },
    });

    return (
        <>
            {data?.length && data.map((item) => (

                <TableTr key={item.id}>
                    <TableTd>{item.nome}</TableTd>
                    <TableTd>
                        <RowActions viewUrl={`/tipoMovimentacao/${item.id}`}
                            editUrl={`/tipoMovimentacao/update/${item.id}`}
                            onClickDelete={async () => {

                                await mutate({ id: item.id });

                            }} />

                    </TableTd>

                </TableTr >

            ))}
        </>

    )

}