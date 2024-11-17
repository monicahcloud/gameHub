import useGenres from '../hooks/useGenres'
import Spinner from './Spinner'

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres()
  if (error) return null
  if (isLoading) return <Spinner />
  return (
    <>
      <ul className="space-y-2">
        {data.map((genre) => (
          <li key={genre.id} className="py-2">
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-md object-cover"
                src={genre.image_background}
                alt={genre.name}
              />
              <a
                href="#"
                onClick={() => onSelectGenre(genre)}
                className="ml-3 text-slate-400 hover:underline"
              >
                {genre.name}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default GenreList
