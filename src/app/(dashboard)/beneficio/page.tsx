import { apiServerClient } from '@/src/api-client/server';
import { Box, Button, Group, Table, TableTbody, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';
import { BeneficioRows } from './BeneficioRows';
import { BeneficioGet } from '@/src/api-client/server/beneficio';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BeneficioListPage() {

    const beneficios = await apiServerClient.beneficio.get({}) as BeneficioGet;

    const headers = ["Benefício", "Tipo", "Nome", "Situação", ""];

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

                <TableTbody><BeneficioRows beneficios={beneficios} /> </TableTbody>
            </Table>
        </Box>
    );
}
