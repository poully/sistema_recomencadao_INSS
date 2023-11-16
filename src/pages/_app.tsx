import { MainLayout } from "@/src/components/MainLayout";
import { ClerkProvider } from "@clerk/nextjs";
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';


const theme = createTheme({
  /** Put your mantine theme override here */
});

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </QueryClientProvider>
      </MantineProvider>
    </ClerkProvider>
  )
}