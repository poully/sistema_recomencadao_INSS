import { gettipoMovimentacao } from '@/src/api-client/tipoMovimentacaoService';
import { Box, Button, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';

export default async function tipoMovimentacaoList() {
    const tipoMovimentacao = await gettipoMovimentacao();


    const rows = tipoMovimentacao.map((element) => (
        <TableTr key={element.id}>
            <TableTd>{element.nome}</TableTd>
            <TableTd>
                <Link href={`/tipoMovimentacao/update/${element.id}`}>
                    <Button>Editar</Button>
                </Link>
                {/* <Link href={`/tipoMovimentacao/delete/${element.id}`}>
                    <Button variant="filled" color="red">Excluir</Button>
                </Link> */}
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
                <Text variant="h1">Lista de Tipo Movimentação</Text>
                <Link href="/tipoMovimentacao/create">
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