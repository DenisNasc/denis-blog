import React, { useEffect } from 'react'
import Head from 'next/head'

import 'katex/dist/katex.min.css'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import lightTheme from 'style/themes/light'
import darkTheme from 'style/themes/dark'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CssBaseline />
      <ThemeProvider theme={false ? darkTheme : lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
