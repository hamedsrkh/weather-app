import type { AppProps } from 'next/app'
import { GlobalStyle, theme } from 'src/theme'
import localFont from 'next/font/local'
import Head from 'next/head'
import Header from 'components/global/Header'
import { ThemeProvider } from 'styled-components'

const font = localFont({
  display: 'swap',
  fallback: ['sans-serif'],
  src: [
    {
      path: '../theme/fonts/DM_Sans/static/DMSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../theme/fonts/DM_Sans/static/DMSans-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../theme/fonts/DM_Sans/static/DMSans-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <GlobalStyle FontFamily={font.style.fontFamily} />
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}
