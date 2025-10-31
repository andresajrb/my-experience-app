
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import { ThemeProvider } from 'next-themes';
import { appWithTranslation } from 'next-i18next';
import { ToastContainer } from 'react-toastify';


export default appWithTranslation(function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" >
      <Layout>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
});