import { FC } from 'react'
import { BadgeCheckIcon } from '@heroicons/react/solid'
import Layout from './components/Layout'

const App: FC = () => {
  return (
    <Layout>
      <p className='my-5 text-xl font-bold'>React18 Lesson</p>
      <BadgeCheckIcon className='h-12 w-12 text-blue-500' />
    </Layout>
  )
}

export default App
