import { getPessoas } from '@/src/api-client/pessoaService';
import { Box, Button, Group, Table, TableData, Text } from '@mantine/core';
import Link from 'next/link';

export default async function PessoaList() {
    const pessoas = await getPessoas();
    const tableData: TableData = {
        caption: '',
        head: ["Nome", "E-mail"],
        body: pessoas.map((pessoa) => (
            [pessoa.nome, pessoa.email]
        )),
      };
    return (
        <Box>
            <Group>
            <Text variant="h1">Lista de Pessoas</Text>
            <Link href="/pessoa/create">
            <Button>Adicionar</Button>
            </Link>
      
            </Group>
            
            <Table data={tableData} />
        </Box>
    );
}
