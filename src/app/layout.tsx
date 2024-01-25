"use client"
import './globals.css'
import ProminentAppBar from './components/navbar'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Provider } from 'react-redux';
import store from '../app/store/store'
import { motion } from 'framer-motion';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ProminentAppBar />
        {children}
        </AppRouterCacheProvider>
      </Provider>
      </body>
    </html>
  )
}
