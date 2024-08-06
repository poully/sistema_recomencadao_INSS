import { getMovimentacao } from '@/src/api-client/movimentacaoService';
import { Box, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';

export default async function MovimentacoesList() {
    const especialistas = await getMovimentacao();


    const rows = especialistas.map((element) => (
        <TableTr key={element.id}>
            <TableTd>{element.beneficio_id}</TableTd>
            <TableTd>{element.tipo_movimentacao_id}</TableTd>
            <TableTd></TableTd>
        </TableTr>
    ));
    const ths = (
        <TableTr>
            <TableTh>Movimentação</TableTh>
            <TableTh>Benefício</TableTh>
            <TableTh>Tipo de Movimentação</TableTh>
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