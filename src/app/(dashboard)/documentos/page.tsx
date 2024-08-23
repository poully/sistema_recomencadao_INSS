import { apiServerClient } from '@/src/api-client/server';
import type { DocumentosGet } from '@/src/api-client/server/documentos';
import { Box, Button, Group, Table, TableTbody, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';
import { DocumentoRows } from './DocumentosRows';

export default async function DocumentoList() {
    const documentos = await apiServerClient.documentos.get({}) as DocumentosGet;

    const headers = ["Nome", "email", "telefone"];

    return (
        <Box>
            <Group>
                <Text variant="h1">Lista de Especialistas</Text>
                <Link href="/especialista/create">
                    <Button>Novo especialista</Button>
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

                <TableTbody><DocumentoRows documentos={documentos} /> </TableTbody>
            </Table>
        </Box>
    );
}
