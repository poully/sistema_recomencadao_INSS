import { apiServerClient } from '@/src/api-client/server';
import { EspecialistaGet } from '@/src/api-client/server/especialista';
import { Box, Button, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';
import { EspecialistaRows } from './EspecialistaRows';

export default async function EspecialistasList() {
    const especialistas = await apiServerClient.especialista.get({}) as EspecialistaGet;

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

                <TableTbody><EspecialistaRows especialistas={especialistas} /> </TableTbody>
            </Table>
        </Box>
    );
}