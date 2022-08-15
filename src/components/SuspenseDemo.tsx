import { FC, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

import Layout from './Layout'
import Spinner from './Spinner'
import { FetchComments } from './FetchComments'
import { FetchTasks } from './FetchTasks'
import { FetchUsers } from './FetchUsers'

const SuspenseDemo: FC = () => {
  return (
    <Layout>
      <p className='mb-3 text-xl font-bold text-blue-500'>Suspense Demo</p>
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <>
            <ExclamationCircleIcon className='my-5 h-10 w-10 text-pink-500' />
            <p>{error.message}</p>
          </>
        )}
      >
        <Suspense fallback={<Spinner />}>
          <FetchUsers />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <>
            <ExclamationCircleIcon className='my-5 h-10 w-10 text-pink-500' />
            <p>{error.message}</p>
          </>
        )}
      >
        <Suspense fallback={<Spinner />}>
          <FetchTasks />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <>
            <ExclamationCircleIcon className='my-5 h-10 w-10 text-pink-500' />
            <p>{error.message}</p>
          </>
        )}
      >
        <Suspense fallback={<Spinner />}>
          <FetchComments />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  )
}

export default SuspenseDemo
