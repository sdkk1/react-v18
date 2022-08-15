import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { fetchDelay } from '../utils/fetchDelay'

type Comment = {
  id: number
  name: string
}

const getComments = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = await axios
    .get<Comment[]>('https://jsonplaceholder.typicode.com/comments?_limit=3')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .then(await fetchDelay(1000))

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data
}

export const useQueryComments = () => {
  return useQuery({
    queryKey: ['comments'],
    queryFn: getComments,
  })
}
