import Spinner from './Spinner'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres()

  if (error) return null

  if (isLoading) return <Spinner />

  return (
    <div>
      <h2 className="text-2xl font-semibold mt-9 mb-3">Genres</h2>
      <ul>
        {data.map((genre) => (
          <li key={genre.id} className="py-2">
            <div className="flex items-center space-x-3">
              <img
                className="w-8 h-8 rounded-lg object-cover"
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <button
                className={`text-left text-md font-normal ${
                  genre.id === selectedGenre?.id ? 'font-bold' : ''
                }`}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GenreList
