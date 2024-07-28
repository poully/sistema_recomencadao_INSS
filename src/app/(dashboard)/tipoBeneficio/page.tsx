import { getTipo } from '@/src/api-client/tipoBeneficioService';
import { Box, Button, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';

export default async function tipoBeneficioList() {
    const tipo = await getTipo();


    const rows = tipo.map((element) => (
        <TableTr key={element.id}>
            <TableTd>{element.nome}</TableTd>
            <TableTd>
                <Link href={`/tipoBeneficio/update/${element.id}`}>
                    <Button>Editar</Button>
                </Link>
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
                <Text variant="h1">Lista de Tipo Beneficio</Text>
                <Link href="/tipoBeneficio/create">
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
