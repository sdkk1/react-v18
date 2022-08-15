import { useQueryUsers } from '../hooks/useQueryUsers'

export const FetchUsers = () => {
  const { data: users } = useQueryUsers()

  return (
    <div className='my-3 text-center'>
      <p className='my-3 font-bold'>User List</p>
      {users?.map((user) => (
        <p
          className='my-3 text-sm'
          key={user.id}
        >
          {user.username}
        </p>
      ))}
    </div>
  )
}
