'use client';

import { apiClient } from '@/src/api-client/client';
import { TableTd, TableTr } from '@mantine/core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from "react-toastify";
import { RowActions } from '@/src/components';
import { useRouter } from 'next/navigation';
import { EspecialistaGet } from '@/src/api-client/client/especialista';

export function EspecialistaRows(props: { especialistas: EspecialistaGet }) {
    const router = useRouter();

    const queryClient = useQueryClient()
    const { data } = useQuery({
        queryKey: ['especialistas'],
        queryFn: async () => apiClient.especialista.get({}) as Promise<EspecialistaGet>,
        initialData: props.especialistas,
    });

    const { mutate } = useMutation({
        mutationFn: apiClient.especialista.remove, mutationKey: ['removeEspecialista'], onError(e) {
            console.log(e);
            toast.error("Erro ao remover");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['especialistas'] })
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
                    <TableTd>{item.email}</TableTd>
                    <TableTd>{item.telefone}</TableTd>
                    <TableTd>
                        <RowActions viewUrl={`/especialista/${item.id}`}
                            editUrl={`/especialista/update/${item.id}`}
                            onClickDelete={async () => {

                                await mutate({ id: item.id });

                            }} />

                    </TableTd>

                </TableTr >

            ))}
        </>

    )

}