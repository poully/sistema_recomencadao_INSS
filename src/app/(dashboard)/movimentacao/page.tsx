import { getMovimentacao } from '@/src/api-client/movimentacaoService';
import { Box, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';

export default async function MovimentacoesList() {
    const movimentacoes = await getMovimentacao();
    const rows = movimentacoes.map((movimentacao) => (

        <TableTr key={movimentacao.id}>
            <TableTd>{movimentacao.tipo_movimentacao_id}</TableTd>
            <TableTd>{movimentacao.beneficio_id}</TableTd>
            {/* <TableTd>{movimentacao}</TableTd> */}
        </TableTr>
    ));
    const ths = (
        <TableTr>
            <TableTh>Movimentação</TableTh>
            <TableTh>Benefício</TableTh>
            <TableTh>Nome</TableTh>
        </TableTr>
    );
    return (
        <Box>
            <Group>
                <Text variant="h1">Lista de Movimentações</Text>
            </Group>
            <Table>
                <TableThead>{ths}</TableThead>
                <TableTbody>{rows}</TableTbody>
            </Table>
        </Box >
    );
}