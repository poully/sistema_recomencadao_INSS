'use client';

import { BeneficioWithMovimentacao, getBeneficio, removeBeneficio } from '@/src/services-client/beneficioService';
import { TableTd, TableTr } from '@mantine/core';
import { IconEye, IconPencil, IconTrash } from "@tabler/icons-react";
import { useMutation, useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { toast } from "react-toastify";

export function BeneficioRows(props: { beneficios: BeneficioWithMovimentacao[] }) {

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
                        <Link href={`/beneficio/${beneficio.id}`}><IconEye /></Link>
                        <Link href={`/beneficio/update/${beneficio.id}`}><IconPencil /></Link>
                        <IconTrash style={{
                            cursor: "pointer"
                        }} onClick={async () => {
                            console.log("chamou!")
                            await mutate({ id: beneficio.id });

                        }} />
                    </TableTd>

                </TableTr >

            ))}
        </>

    )

}