'use client';

import { apiClient } from '@/src/api-client/client';
import { SituacaoGet } from '@/src/api-client/client/situacao';
import { TableTr, TableTd } from '@mantine/core';
import { RowActions } from '@/src/components';
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export function SituacaoRows(props: { data: SituacaoGet }) {

    const router = useRouter();
    const queryClient = useQueryClient();
    const { data } = useQuery({
        queryKey: ['situacoes'],
        queryFn: () => apiClient.situacao.get({}) as Promise<SituacaoGet>,
        initialData: props.data,
    });
    const { mutate } = useMutation({
        mutationFn: apiClient.situacao.remove, mutationKey: ['removeSituacao'], onError(e) {
            console.log(e);
            toast.error("Erro ao remover");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['situacoes'] })
        },
        onSuccess(data, variables, context) {
            toast.success("Removido com sucesso");
            router.refresh();
        },
    });



    return (
        <>
            {data.map((item) => (
                <TableTr key={item.id}>
                    <TableTd>{item.nome}</TableTd>

                    <TableTd>
                        <RowActions
                            viewUrl={`/situacao/${item.id}`}
                            editUrl={`/situacao/update/${item.id}`}
                            onClickDelete={async () => {
                                await mutate({ id: item.id });
                            }} />
                    </TableTd>

                </TableTr >
            ))}
        </>

    );
}