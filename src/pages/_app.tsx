import type { AppProps } from 'next/app'

import { ChakraProvider } from "@chakra-ui/react"
import theme from '../style/theme'
import React from 'react'
import ColorToogleButton from '@app/components/ColorToogleButton'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorToogleButton />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp