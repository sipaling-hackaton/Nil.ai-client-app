import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// react-query create a client
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </>)
}
