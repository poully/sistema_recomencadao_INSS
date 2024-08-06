import { getBeneficio } from '@/src/api-client/beneficioService';
import { Box, Button, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';

export default async function PessoaList() {
    const beneficios = await getBeneficio();
    const rows = beneficios.map((beneficio) => (
        <Link href={`/beneficio/${beneficio.id}`} key={beneficio.id}>
            <TableTr>

                <TableTd>{beneficio.tipo_id}</TableTd>
                <TableTd>{beneficio.pessoa_id}</TableTd>
                <TableTd>{beneficio.situacao_id}</TableTd>
                <TableTd>{beneficio?.movimentacao?.length ? beneficio.movimentacao[beneficio.movimentacao.length - 1].tipo_movimentacao.nome : ""}</TableTd>

            </TableTr>
        </Link>
    ));
    const headers = ["Benefício", "Tipo", "Nome", "Situação", "Última movimentação"];

    return (
        <Box>
            <Group>
                <Text variant="h1">Lista de Beneficios</Text>
                <Link href="/beneficio/create">
                    <Button>Novo beneficio</Button>
                </Link>

            </Group>

            <Table highlightOnHover >
                <TableThead>
                    <TableTr>
                        {headers.map((header) => (
                            <TableTh key={header}>{header}</TableTh>
                        ))}
                    </TableTr>
                </TableThead>
                <TableTbody>{rows}</TableTbody>
            </Table>
        </Box>
    );
}
