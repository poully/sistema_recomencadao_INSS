import { TipoBeneficioGet } from '@/src/api-client/client/tipoBeneficio';
import { Box, Button, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';
import { TipoBeneficioRows } from './TipoBeneficioRows';
import { apiServerClient } from '@/src/api-client/server';

export default async function TipoBeneficioList() {
    const tipobeneficios = await apiServerClient.tipoBeneficio.get({}) as TipoBeneficioGet;


    const headers = ['Nome', ""];
    return (
        <Box>
            <Group>
                <Text variant="h1">Lista de Tipos de Benefício</Text>
                <Link href="/pessoa/create">
                    <Button>Criar Tipo de Benefício</Button>
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

                <TableTbody><TipoBeneficioRows tipobeneficios={tipobeneficios} /></TableTbody>
            </Table>
        </Box>
    );
}
