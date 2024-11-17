import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres()

  if (error) return null

  if (isLoading)
    return (
      <div className="flex justify-center">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    )

  return (
    <div className="mt-9 mb-3">
      <h2 className="text-2xl font-bold mb-4">Genres</h2>
      <ul>
        {data.map((genre) => (
          <li
            key={genre.id}
            className={`flex items-center gap-4 py-2 ${
              genre.id === selectedGenre?.id ? 'font-bold text-primary' : ''
            }`}
          >
            <img
              className="w-8 h-8 rounded object-cover"
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <button
              onClick={() => onSelectGenre(genre)}
              className="text-left text-base hover:underline"
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GenreList
