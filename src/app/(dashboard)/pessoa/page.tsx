import type { PessoaGet } from '@/src/api-client/server/pessoa';
import { apiServerClient } from '@/src/api-client/server';
import { Box, Button, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';
import { PessoaRows } from './PessoaRows';

export default async function PessoaList() {

    const pessoas = await apiServerClient.pessoa.get({}) as PessoaGet;


    const headers = ['Nome', 'Email', "CPF", 'Telefone', ''];

    return (
        <Box>
            <Group>
                <Text variant="h1">Lista de Pessoas</Text>
                <Link href="/pessoa/create">
                    <Button>Criar pessoa</Button>
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

                <TableTbody><PessoaRows pessoas={pessoas} /></TableTbody>
            </Table>
        </Box>
    );
}
