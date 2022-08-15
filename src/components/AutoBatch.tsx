import { FC, useState } from 'react'
import axios from 'axios'
// import { flushSync } from 'react-dom'
import Layout from './Layout'

const AutoBatch: FC = () => {
  const [fetchCount, setFetchCount] = useState(0)
  const [users, setUsers] = useState([])

  const clickHandler = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setUsers(res.data)
        setFetchCount((fetchCount) => fetchCount + 1)

        // NOTE: 自動バッチングからオプトアウトするためには flushSync を使う
        // flushSync(() => {
        //   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        //   setUsers(res.data)
        // })
        // flushSync(() => {
        //   setFetchCount((count) => count + 1)
        // })
      })
  }

  console.log('Rendered AutoBach')

  return (
    <Layout>
      <p className='my-3 text-xl font-bold text-blue-500'>Automatic batching</p>
      <p className='my-5'>{fetchCount}</p>
      <p className='my-5'>{users.length}</p>
      <button
        className='my-5 rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-500'
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={clickHandler}
      >
        click
      </button>
    </Layout>
  )
}

export default AutoBatch
