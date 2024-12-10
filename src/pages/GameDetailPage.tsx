import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import  Spinner  from '../components/Spinner'

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGame(slug!)

  if (isLoading) return <Spinner />
  if (error || !game) throw error
  return (
    <>
      <h1 className="text-4xl font-semibold text-slat-800 prose">
        {game.name}
      </h1>
      <p className="text-lg text-slat-600 prose">{game.description_raw}</p>
    </>
  )
}

export default GameDetailPage
