import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import '../styles/global.scss';

import { Provider as NextAuthProvider } from 'next-auth/client';


const initialOptions = {
  "client-id": "AWMn6t9yt38ZnBKv9i51hMndITTYR5ypswngtqqBlcHKW1MdjnuEge20-rmPScU-Fdn8EJkfnchWfHe1",
  currency: "BRL",
  intent: "capture",
};


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session} >
      <PayPalScriptProvider options={initialOptions}>
        <Header/>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp
