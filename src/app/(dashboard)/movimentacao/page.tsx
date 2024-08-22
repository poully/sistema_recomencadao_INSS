import { getMovimentacao } from '@/src/api-client/movimentacaoService';
import { Box, Group, Table, TableTbody, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import { MovimentacaoRows } from './MovimentacaoRows';

export default async function MovimentacaoListPage() {

    const movimentacoes = await getMovimentacao();

    const headers = ["Movimentação", "Tipo de benefício", "Nome do Beneficiário", ""];

    return (
        <Box>
            <Group>
                <Text variant="h1">Lista de Movimentacoes</Text>
            </Group>

            <Table highlightOnHover >
                <TableThead>
                    <TableTr>
                        {headers.map((header) => (
                            <TableTh key={header}>{header}</TableTh>
                        ))}
                    </TableTr>
                </TableThead>
                <TableTbody> <MovimentacaoRows data={movimentacoes} /> </TableTbody>
            </Table>
        </Box>
    );
}
