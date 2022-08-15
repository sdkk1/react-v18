import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import AutoBatch from './components/AutoBatch'
import './index.css'
import SuspenseDemo from './components/SuspenseDemo'
import NestedSuspense from './components/NestedSuspense'
import Concurrent from './components/Concurrent'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<App />}
          />
          <Route
            path='/autobatch'
            element={<AutoBatch />}
          />
          <Route
            path='/suspense'
            element={<SuspenseDemo />}
          />
          <Route
            path='/nested_suspense'
            element={<NestedSuspense />}
          />
          <Route
            path='/concurrent'
            element={<Concurrent />}
          />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)
