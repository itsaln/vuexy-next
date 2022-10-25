import { Suspense } from 'react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// ** Intl & ThemeColors Context
import { ToastContainer } from 'react-toastify'
import { ThemeContext } from '@/utils/theme/ThemeColors'

// ** Spinner (Splash Screen)
import Spinner from '@core/components/spinner/FallbackSpinner'

// ** React Toastify
import '@core/scss/react/libs/toastify/toastify.scss'

// ** Core styles
import '@core/assets/fonts/feather/iconfont.css'
import '@core/scss/core.scss'

import '@/assets/scss/tailwind.scss'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Suspense fallback={<Spinner />}>
				<ThemeContext>
					<Component {...pageProps} />
					<ToastContainer newestOnTop />
					<ReactQueryDevtools initialIsOpen={false} />
				</ThemeContext>
			</Suspense>
		</QueryClientProvider>
	)
}

export default MyApp
