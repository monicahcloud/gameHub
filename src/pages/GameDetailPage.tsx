import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import  Spinner  from '../components/Spinner'
import ExpandableText from '../components/ExpandableText'
import DefinintionItem from '../components/DefinintionItem'
import CriticScore from '../components/CriticScore'
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
      <h1 className="text-4xl font-semibold text-slat-800 prose">
        {game.name}
      </h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game}/>
      <GameTrailer gameId={game.id}/>
      <GameScreenshots gameId={game.id}/>
    </>
  )
}

export default GameDetailPage
