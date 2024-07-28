import { getSituacao } from '@/src/api-client/situacao';
import { Box, Button, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';

export default async function SituacaoList() {
    const tipo = await getSituacao();


    const rows = tipo.map((element) => (
        <TableTr key={element.id}>
            <TableTd>{element.nome}</TableTd>
            <TableTd>
                <Link href={`/situacao/update/${element.id}`}>
                    <Button>Editar</Button>
                </Link>
            </TableTd>
        </TableTr>
    ));
    const ths = (
        <TableTr>
            <TableTh>Nome</TableTh>
            <TableTh></TableTh>
        </TableTr>
    );
    return (
        <Box>
            <Group>
                <Text variant="h1">Lista de Situações</Text>
                <Link href="/situacao/create">
                    <Button>Adicionar</Button>
                </Link>
            </Group>
            <Table>
                <TableThead>{ths}</TableThead>
                <TableTbody>{rows}</TableTbody>
            </Table>
        </Box >
    );
}
