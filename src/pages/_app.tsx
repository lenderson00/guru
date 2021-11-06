import type { AppProps } from 'next/app'

import { ChakraProvider } from "@chakra-ui/react"
import theme from '../style/theme'
import React from 'react'
import ColorToogleButton from '@app/components/ColorToogleButton'
import { AuthContext } from '@app/components/AuthContext'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorToogleButton />
      <Toaster  
        position="bottom-center" 
        reverseOrder={false}
        toastOptions={{
          error: {
            duration: 3000,
          },
          success: {
            duration: 3000,
          },
        }}
        />
      <AuthContext>
        <Component {...pageProps} />
      </AuthContext>
    </ChakraProvider>
  )
}

export default MyApp