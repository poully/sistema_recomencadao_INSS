import { getDocumentos } from '@/src/api-client/pessoaService';
import { Box, Button, Group, Table, TableData, Text } from '@mantine/core';
import Link from 'next/link';

export default async function DocumentoList() {
    const pessoas = await getDocumentos();
    const tableData: TableData = {
        caption: '',
        head: ["Nome", "E-mail"],
        body: pessoas.map((documento) => (
            [pessoa.nome, pessoa.email]
        )),
      };
    return (
        <Box>
            <Group>
            <Text variant="h1">Lista de Documentos</Text>
            <Link href="/pessoa/create">
            <Button>Adicionar</Button>
            </Link>
            <Link href="/pessoa/update">
            <Button>Editar</Button>
            </Link>
            <Button>Remover</Button>
      
            </Group>
            
            <Table data={tableData} />
        </Box>
    );
}
