'use client';

import { apiClient } from '@/src/api-client/client';
import { TableTd, TableTr } from '@mantine/core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from "react-toastify";
import { RowActions } from '@/src/components';
import { useRouter } from 'next/navigation';
import type { BeneficioGet } from '@/src/api-client/client/beneficio';

export function BeneficioRows(props: { beneficios: BeneficioGet }) {
    const router = useRouter();

    const queryClient = useQueryClient()
    const { data } = useQuery({
        queryKey: ['beneficios'],
        queryFn: async () => apiClient.beneficio.get({}) as Promise<BeneficioGet>,
        initialData: props.beneficios,
    });

    const { mutate } = useMutation({
        mutationFn: apiClient.beneficio.remove, mutationKey: ['removeBeneficio'], onError(e) {
            console.log(e);
            toast.error("Erro ao remover");
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({ queryKey: ['beneficios'] })
        },
        onSuccess(data, variables, context) {
            toast.success("Removido com sucesso");
        },
    });

    return (
        <>
            {data?.length && data.map((beneficio) => (

                <TableTr key={beneficio.id}>
                    <TableTd>{beneficio.numero_beneficio}</TableTd>
                    <TableTd>{beneficio.tipo.nome}</TableTd>
                    <TableTd>{beneficio.pessoa.nome}</TableTd>
                    <TableTd>{beneficio.situacao.nome}</TableTd>
                    <TableTd>
                        <RowActions viewUrl={`/beneficio/${beneficio.id}`}
                            editUrl={`/beneficio/update/${beneficio.id}`}
                            onClickDelete={async () => {

                                await mutate({ id: beneficio.id });

                            }} />

                    </TableTd>

                </TableTr >

            ))}
        </>

    )

}