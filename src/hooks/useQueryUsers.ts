import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { fetchDelay } from '../utils/fetchDelay'

type User = {
  id: number
  username: string
}

const getUsers = async () => {
  const { data } = await axios
    .get<User[]>('https://jsonplaceholder.typicode.com/users?_limit=3')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .then(await fetchDelay(3000))

  return data
}

export const useQueryUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })
}
