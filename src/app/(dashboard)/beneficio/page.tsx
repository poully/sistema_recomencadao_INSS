import { getBeneficio } from '@/src/api-client/beneficioService';
import { Box, Button, Group, Table, TableData, Text } from '@mantine/core';
import Link from 'next/link';

export default async function PessoaList() {
    const pessoas = await getBeneficio();
    const tableData: TableData = {
        caption: '',
        head: ["Benefício", "Tipo", "Nome", "Situação"],
        body: pessoas.map((beneficio) => (
            [beneficio.id, beneficio.tipo_id, beneficio.pessoa_id, beneficio.situacao_id]
        )),
    };
    return (
        <Box>
            <Group>
                <Text variant="h1">Lista de Beneficios</Text>
                <Link href="/beneficio/create">
                    <Button>Novo beneficio</Button>
                </Link>

            </Group>

            <Table data={tableData} />
        </Box>
    );
}
