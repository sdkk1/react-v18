import { useQueryTasks } from '../hooks/useQueryTasks'

export const FetchTasks = () => {
  const { data: tasks } = useQueryTasks()

  return (
    <div className='my-3 text-center'>
      <p className='my-3 font-bold'>Task List</p>
      {tasks?.map((task) => (
        <p
          className='my-3 text-sm'
          key={task.id}
        >
          {task.title}
        </p>
      ))}
    </div>
  )
}
