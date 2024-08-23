import { getEspecialista } from '@/src/api-client/especialistaService';
import { RowActions } from '@/src/components';
import { Box, Button, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';

export default async function EspecialistasList() {
    const especialistas = await getEspecialista();


    const rows = especialistas.map((element) => (
        <TableTr key={element.id}>
            <TableTd>{element.nome}</TableTd>
            <TableTd>{element.email}</TableTd>
            <TableTd>{element.telefone}</TableTd>
            <TableTd>
                <Link href={`/especialista/update/${element.id}`}>
                    <Button>Editar</Button>
                </Link>
            </TableTd>
        </TableTr>
    ));
    const ths = (
        <TableTr>
            <TableTh>Nome</TableTh>
            <TableTh>Email</TableTh>
            <TableTh>Telefone</TableTh>

        </TableTr>
    );
    return (
        <Box>
            <Group>
                <Text variant="h1">Lista de Especialistas</Text>
                <Link href="/especialista/create">
                    <Button>Adicionar</Button>
                </Link>
                <TableTd>
                    <RowActions viewUrl={`/beneficio/${especialistas.id}`}
                        editUrl={`/beneficio/update/${especialistas.id}`}
                        onClickDelete={async () => {

                            await mutate({ id: beneficio.id });
                            router.refresh();

                        }} />

                </TableTd>
            </Group>
            <Table>
                <TableThead>{ths}</TableThead>
                <TableTbody>{rows}</TableTbody>
            </Table>
        </Box >
    );
}
