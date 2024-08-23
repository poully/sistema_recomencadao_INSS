import type { TipoMovimentacaoGet } from '@/src/api-client/server/tipoMovimentacao';
import { Box, Button, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';
import { TipoMovimentacaoRows } from './TipoMovimentacaoRows';
import { apiServerClient } from '@/src/api-client/server';

export default async function tipoMovimentacaoList() {
    const tipomovimentacaos = await apiServerClient.tipoMovimentacao.get({}) as TipoMovimentacaoGet;


    const headers = ['Nome'];
    return (
        <Box>
            <Group>
                <Text variant="h1">Lista de Tipos de Movimentação</Text>
                <Link href="/tipoMovimentacao/create">
                    <Button>Criar Tipo Movimentacao</Button>
                </Link>

            </Group>

            <Table highlightOnHover >
                <TableThead>
                    <TableTr>
                        {headers.map((header) => (
                            <TableTh key={header}>{header}</TableTh>
                        ))}
                    </TableTr>
                </TableThead>

                <TableTbody><TipoMovimentacaoRows tipomovimentacaos={tipomovimentacaos} /></TableTbody>
            </Table>
        </Box>
    );
}
