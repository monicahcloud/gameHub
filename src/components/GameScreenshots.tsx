
import useScreenshots from '../hooks/useScreenShots'

interface Props {
  gameId: number
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId)

  if (isLoading) return null

  if (error) throw error

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {data?.results.map((file) => (
        <img
          key={file.id}
          src={file.image}
          alt={`Screenshot ${file.id}`}
          className="w-full h-auto object-cover rounded-md"
        />
      ))}
    </div>
  )
}

export default GameScreenshots
