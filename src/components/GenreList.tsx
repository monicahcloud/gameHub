import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
import useGameQueryStore from '../store'

const GenreList = () => {
  const { data, isLoading, error } = useGenres()
const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

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
        {data?.results.map((genre) => (
          <li
            key={genre.id}
            className={`flex items-center gap-4 py-2 ${
              genre.id === selectedGenreId ? 'font-bold text-primary' : ''
            }`}
          >
            <img
              className="w-8 h-8 rounded object-cover"
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <button
              onClick={() => setSelectedGenreId(genre.id)}
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
