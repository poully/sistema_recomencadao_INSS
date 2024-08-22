'use client';
import { getMovimentacao, MovimentacaoGet } from '@/src/services-client/movimentacaoService';
import { TableTr, TableTd } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { RowActions } from '@/src/components';


export function MovimentacaoRows(props: { data: MovimentacaoGet }) {

    const { data } = useQuery({
        queryKey: ['movimentacoes'],
        queryFn: getMovimentacao,
        initialData: props.data,
    });


    return (
        <>
            {data.map((item) => (
                <TableTr key={item.id}>
                    <TableTd>{item.tipo_movimentacao.nome}</TableTd>
                    <TableTd>{item.beneficio.tipo.nome}</TableTd>
                    <TableTd>{item.beneficio.pessoa.nome}</TableTd>

                    <TableTd>
                        <RowActions viewUrl={`/movimentacao/${item.id}`} />
                    </TableTd>

                </TableTr >
            ))}
        </>

    );
}