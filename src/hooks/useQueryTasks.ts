import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { fetchDelay } from '../utils/fetchDelay'

type Task = {
  id: number
  title: string
}

const getTasks = async () => {
  const { data } = await axios
    .get<Task[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .then(await fetchDelay(5000))

  return data
}

export const useQueryTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  })
}
