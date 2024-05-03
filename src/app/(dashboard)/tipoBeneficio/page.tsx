import { getTipo } from '@/src/api-client/tipoBeneficioService';
import { Box, Button, Group, Table, TableData, Text } from '@mantine/core';
import Link from 'next/link';

export default async function TipoList() {
    const tipo = await getTipo();
    const tableData: TableData = {
        caption: '',
        head: ["Tipo", "Nome"],
        body: tipo.map((tipo) => (
            [tipo.id, tipo.nome]
        )),
    };
    return (
        <Box>
            <Group>
                <Text variant="h1">Lista dos tipos de beneficios</Text>
                <Link href="/tipoBeneficio/create">
                    <Button>Novo tipo</Button>
                </Link>

            </Group>

            <Table data={tableData} />
        </Box>
    );
}
