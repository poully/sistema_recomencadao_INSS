import { getBeneficio } from '@/src/api-client/beneficioService';
import { Box, Button, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text, Loader } from '@mantine/core';
import { IconEye, IconPencil, IconTrash } from "@tabler/icons-react";
import Link from 'next/link';
import { Suspense } from 'react';
import { BeneficioRows } from './BeneficioRows';

export default async function PessoaList() {

    const beneficios = await getBeneficio();

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
