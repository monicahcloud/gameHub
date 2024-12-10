import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import  Spinner  from '../components/Spinner'
import ExpandableText from '../components/ExpandableText'
import GameAttributes from '../components/GameAttributes'
import GameTrailer from '../components/GameTrailers'
import GameScreenshots from '../components/GameScreenshots'

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGame(slug!)

  if (isLoading) return <Spinner />
  if (error || !game) throw error
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-5">
          <h2 className="text-4xl font-bold text-slat-800">{game.name}</h2>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </div>
        <div className="space-y-5">
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </div>
      </div>
    </>
  )
}

export default GameDetailPage
