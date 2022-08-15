import { FC, useState, useEffect, useTransition, ChangeEvent } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

type Photo = {
  id: number
  title: string
}

const Concurrent: FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [inputText, setInputText] = useState('')
  const [searchText, setSearchText] = useState('')
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Photo[]>(
          'https://jsonplaceholder.typicode.com/photos'
        )
        if (res.status === 200 && res.data.length > 0) {
          setPhotos(res.data)
        }
      } catch (error) {
        console.error(error)
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData()
  }, [])

  const filteredPhotos = photos.filter((photo) => {
    return photo.title.includes(searchText)
  })

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    // NOTE: Urgent state update
    setInputText(e.target.value)
    // NOTE: Not urgent state update
    startTransition(() => setSearchText(e.target.value))
  }

  return (
    <div className='flex flex-col items-center font-mono text-gray-600'>
      <NavBar />
      <p
        className={`my-3 text-xl font-bold ${
          isPending ? 'text-pink-500' : 'text-blue-500'
        }`}
      >
        startTransition (concurrent feature)
      </p>
      <input
        type='text'
        className='mb-5 rounded border border-gray-300 px-3 py-1 text-xs'
        value={inputText}
        onChange={onChangeText}
      />
      {filteredPhotos.map((photo) => (
        <p
          className='mb-2 text-xs'
          key={photo.id}
        >
          {photo.title}
        </p>
      ))}
    </div>
  )
}

export default Concurrent
