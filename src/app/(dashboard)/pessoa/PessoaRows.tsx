'use client';

import { apiClient } from '@/src/api-client/client';
import { TableTd, TableTr } from '@mantine/core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from "react-toastify";
import { RowActions } from '@/src/components';
import { useRouter } from 'next/navigation';
import { PessoaGet } from '@/src/api-client/client/pessoa';

export function PessoaRows(props: { pessoas: PessoaGet }) {
    const router = useRouter();

    const queryClient = useQueryClient()
    const { data } = useQuery({
        queryKey: ['pessoas'],
        queryFn: async () => apiClient.pessoa.get({}) as Promise<PessoaGet>,
        initialData: props.pessoas,
    });

    const { mutate } = useMutation({
        mutationFn: apiClient.pessoa.remove, mutationKey: ['removePessoa'], onError(e) {
            console.log(e);
            toast.error("Erro ao remover");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['pessoas'] })
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
                        <RowActions viewUrl={`/pessoa/${item.id}`}
                            editUrl={`/pessoa/update/${item.id}`}
                            onClickDelete={async () => {

                                await mutate({ id: item.id });

                            }} />

                    </TableTd>

                </TableTr >

            ))}
        </>

    )

}