import { apiServerClient } from '@/src/api-client/server';
import type { SituacaoGet } from '@/src/api-client/server/situacao';
import { Box, Button, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';
import { SituacaoRows } from './SituacaoRows';

export default async function SituacaoList() {
    const situacoes = await apiServerClient.situacao.get({}) as SituacaoGet;


    const headers = ["Nome", ""];

    return (
        <Box>
            <Group>
                <Text variant="h1">Lista de Situações</Text>
            </Group>

            <Table highlightOnHover >
                <TableThead>
                    <TableTr>
                        {headers.map((header) => (
                            <TableTh key={header}>{header}</TableTh>
                        ))}
                    </TableTr>
                </TableThead>
                <TableTbody> <SituacaoRows data={situacoes} /> </TableTbody>
            </Table>
        </Box>
    );
}
