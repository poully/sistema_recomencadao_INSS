import { getPessoas } from '@/src/api-client/pessoaService';
import { Box, Button, Group, Table, TableData, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';

export default async function PessoaList() {
    const pessoas = await getPessoas();


    const rows = pessoas.map((element) => (
        <TableTr key={element.id}>
            <TableTd>{element.nome}</TableTd>
            <TableTd>{element.email}</TableTd>
            <TableTd>{element.cpf}</TableTd>
            <TableTd>{element.telefone}</TableTd>
            <TableTd>
                <Link href={`/pessoa/update/${element.id}`}>
                    <Button>Editar</Button>
                </Link>
            </TableTd>
        </TableTr>
    ));
    const ths = (
        <TableTr>
            <TableTh>Nome</TableTh>
            <TableTh>Email</TableTh>
            <TableTh>Cpf</TableTh>
            <TableTh>Telefone</TableTh>
            <TableTh></TableTh>
        </TableTr>
    );
    return (
        <Box>
            <Group>
                <Text variant="h1">Lista de Pessoas</Text>
                <Link href="/pessoa/create">
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
