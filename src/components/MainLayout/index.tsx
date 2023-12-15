// import logo from '@logo.png';
import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

export const MainLayout = ({ children }: { children: ReactNode }) => {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                    <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                    <p>
                        {/* <Image
                            src={logo}
                            alt="Picture of the author"
                        // width={500} automatically provided
                        // height={500} automatically provided
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        /> */}
                    </p>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                
                {/* {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt="sm" animate={false}  />
                    ))} */}
                <Link href="/">Home</Link>
                <Link href="/auxilio-maternidade">Auxilio Maternidade</Link>
                <Link href="https://sso.acesso.gov.br/login?client_id=portal-logado.estaleiro.serpro.gov.br&authorization_id=18aa4fd7e5c" target="_blank">Gov</Link>
                <Link href="https://meu.inss.gov.br" target="_blank">Meu INSS</Link>
            </AppShell.Navbar>
            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell >
    );
}