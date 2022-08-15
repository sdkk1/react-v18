import { useQueryComments } from '../hooks/useQueryComments'

export const FetchComments = () => {
  const { data: comments } = useQueryComments()

  return (
    <div className='my-3 text-center'>
      <p className='my-3 font-bold'>Comment List</p>
      {comments?.map((comment) => (
        <p
          className='my-3 text-sm'
          key={comment.id}
        >
          {comment.name}
        </p>
      ))}
    </div>
  )
}
