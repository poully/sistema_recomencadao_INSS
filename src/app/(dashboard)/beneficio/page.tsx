import { getBeneficio } from '@/src/api-client/beneficioService';
import { Box, Button, Group, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text } from '@mantine/core';
import Link from 'next/link';

export default async function PessoaList() {
    const beneficios = await getBeneficio();
    const rows = beneficios.map((beneficio) => (
        
            <TableTr>
                <Link href={`/beneficio/${beneficio.id}`} key={beneficio.id}>
                <TableTd>{beneficio.numero_beneficio}</TableTd>
                <TableTd>{beneficio.tipo.nome}</TableTd>
                <TableTd>{beneficio.pessoa.nome}</TableTd>
                <TableTd>{beneficio.situacao.nome}</TableTd>
                
                </Link>
            </TableTr>
       
    ));
    const headers = ["Benefício", "Tipo", "Nome", "Situação"];

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
