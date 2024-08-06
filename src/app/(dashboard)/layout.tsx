// import logo from '@logo.png';
import { AppShell, AppShellHeader, AppShellMain, AppShellNavbar, Group, Loader } from '@mantine/core';
import Link from 'next/link';
import { ReactNode, Suspense } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {

    return (


        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
            }}
            padding="md"
        >
            <AppShellHeader>
                <Group h="100%" px="md">
                </Group>
            </AppShellHeader>
            <AppShellNavbar p="md">

                <Link href="/">Home</Link>
                <Link href="/beneficio">Benefício</Link>
                <Link href="/especialista">Especialista</Link>
                <Link href="/pessoa">Pessoa</Link>
                <Link href="/movimentacao">Movimentação</Link>
                <Link href="/situacao">Situação</Link>
                <Link href="/tipoBeneficio">Tipo de Beneficio</Link>
                <Link href="/tipoMovimentacao">Tipo de Movimentação</Link>                
                <Link href="https://sso.acesso.gov.br/login?client_id=portal-logado.estaleiro.serpro.gov.br&authorization_id=18aa4fd7e5c" target="_blank">Gov</Link>
                <Link href="https://meu.inss.gov.br" target="_blank">Meu INSS</Link>
            </AppShellNavbar>
            <AppShellMain>
                <Suspense fallback={<Loader />}>
                    {children}
                </Suspense>
            </AppShellMain>
        </AppShell >

    );
}