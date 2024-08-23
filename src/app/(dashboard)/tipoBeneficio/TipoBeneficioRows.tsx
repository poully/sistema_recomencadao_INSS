'use client';

import { apiClient } from '@/src/api-client/client';
import { TableTd, TableTr } from '@mantine/core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from "react-toastify";
import { RowActions } from '@/src/components';
import { useRouter } from 'next/navigation';
import { TipoBeneficioGet } from '@/src/api-client/client/tipoBeneficio';

export function TipoBeneficioRows(props: { tipobeneficios: TipoBeneficioGet }) {
    const router = useRouter();

    const queryClient = useQueryClient()
    const { data } = useQuery({
        queryKey: ['tiposBeneficio'],
        queryFn: async () => apiClient.tipoBeneficio.get({}) as Promise<TipoBeneficioGet>,
        initialData: props.tipobeneficios,
    });

    const { mutate } = useMutation({
        mutationFn: apiClient.tipoBeneficio.remove, mutationKey: ['removeTipoBeneficio'], onError(e) {
            console.log(e);
            toast.error("Erro ao remover");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['tiposBeneficio'] })
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
                        <RowActions viewUrl={`/tipoBeneficio/${item.id}`}
                            editUrl={`/tipoBeneficio/update/${item.id}`}
                            onClickDelete={async () => {

                                await mutate({ id: item.id });

                            }} />

                    </TableTd>

                </TableTr >

            ))}
        </>

    )

}