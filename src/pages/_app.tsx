// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout'; // Importamos nuestro Layout
import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';

// El alias '@/' funciona gracias al 'tsconfig.json' que creó Next.js

export default appWithTranslation(function App({ Component, pageProps }: AppProps) {
  return (
    // Envolvemos el 'Component' (la página actual) con nuestro 'Layout'
    <ThemeProvider attribute="class" >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
});