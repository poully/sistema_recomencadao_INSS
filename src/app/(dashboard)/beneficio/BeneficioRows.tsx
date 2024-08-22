'use client';

import { BeneficioWithMovimentacao, getBeneficio, removeBeneficio } from '@/src/services-client/beneficioService';
import { TableTd, TableTr } from '@mantine/core';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from "react-toastify";
import { RowActions } from '@/src/components';
import { useRouter } from 'next/navigation';

export function BeneficioRows(props: { beneficios: BeneficioWithMovimentacao[] }) {
    const router = useRouter();

    const { data } = useQuery({
        queryKey: ['beneficios'],
        queryFn: getBeneficio,
        initialData: props.beneficios,
    });

    const { mutate } = useMutation({
        mutationFn: removeBeneficio, mutationKey: ['removeBeneficio'], onError(e) {
            toast.error("Erro ao remover");
            console.log(e);
        },
        onSuccess(data, variables, context) {
            toast.success("Removido com sucesso");
            router.refresh();

        },
    });

    return (
        <>
            {data.map((beneficio) => (

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