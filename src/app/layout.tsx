import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { DatesProvider } from '@mantine/dates';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import 'dayjs/locale/pt-br';
import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
    title: "Recomendação INSS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            localization={ptBR}
            signInUrl="/sign-in"
        >
            <html lang="en">
                <head>
                    <ColorSchemeScript />
                </head>
                <body>
                    <ToastContainer />
                    <MantineProvider>
                        <DatesProvider settings={{ locale: "pt-br", timezone: "America/Sao_Paulo" }}>
                            {children}
                        </DatesProvider>
                    </MantineProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
