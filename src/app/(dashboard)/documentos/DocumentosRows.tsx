'use client';

import { apiClient } from '@/src/api-client/client';
import { TableTd, TableTr } from '@mantine/core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from "react-toastify";
import { RowActions } from '@/src/components';
import { useRouter } from 'next/navigation';
import { DocumentosGet } from '@/src/api-client/client/documentos';

export function DocumentoRows(props: { documentos: DocumentosGet }) {
    const router = useRouter();

    const queryClient = useQueryClient()
    const { data } = useQuery({
        queryKey: ['documentos'],
        queryFn: async () => apiClient.documentos.get({}) as Promise<DocumentosGet>,
        initialData: props.documentos,
    });

    const { mutate } = useMutation({
        mutationFn: apiClient.documentos.remove, mutationKey: ['removeDocumento'], onError(e) {
            console.log(e);
            toast.error("Erro ao remover");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['documentos'] })
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
                        <RowActions viewUrl={`/documento/${item.id}`}
                            editUrl={`/documento/update/${item.id}`}
                            onClickDelete={async () => {

                                await mutate({ id: item.id });

                            }} />

                    </TableTd>

                </TableTr >

            ))}
        </>

    )

}