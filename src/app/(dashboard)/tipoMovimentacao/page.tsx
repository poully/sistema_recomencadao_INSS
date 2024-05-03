import { gettipoMovimentacao } from '@/src/api-client/tipoMovimentacaoService';
import { Box, Button, Group, Table, TableData, Text } from '@mantine/core';
import Link from 'next/link';

export default async function tipoMovimentacaoList() {
    const tipoMovimentacao = await gettipoMovimentacao();
    const tableData: TableData = {
        caption: '',
        head: ["Tipo", "Nome"],
        body: tipoMovimentacao.map((tipoMovimentacao) => (
            [tipoMovimentacao.id, tipoMovimentacao.nome]
        )),
    };
    return (
        <Box>
            <Group>
                <Text variant="h1">Lista dos tipos de Movimentação</Text>
                <Link href="/tipoMovimentacao/create">
                    <Button>Novo tipo</Button>
                </Link>

            </Group>

            <Table data={tableData} />
        </Box>
    );
}