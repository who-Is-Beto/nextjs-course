import React from 'react'
import Layout from '@components/Layout/Layout'
import StoreProvider from '../store/StoreProvider'
import { AppProps } from 'next/app'
import './index.css'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  // Purspose: - context/providers, Themes, data
  // https://github.com/LayoutComponents
  // additional props
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
