import useGenres from '../hooks/useGenres'

const GenreList = () => {

    const {data} = useGenres()
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
              <span className="ml-3">{genre.name}</span> 
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default GenreList
