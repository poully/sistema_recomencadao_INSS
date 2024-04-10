import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";


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
                    <MantineProvider>
                        {children}
                    </MantineProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
