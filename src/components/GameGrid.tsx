import { GameQuery } from '../App'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkelton'

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = Array.from({ length: 6 }, (_, i) => i + 1)

  if (error) return <p className="text-red-500 text-center">{error}</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {isLoading &&
        skeletons.map((skeleton) => (
          <div key={skeleton} className="rounded-lg overflow-hidden shadow-md">
            <GameCardSkeleton />
          </div>
        ))}
      {data.map((game) => (
        <div key={game.id} className="rounded-lg overflow-hidden shadow-md">
          <GameCard game={game} />
        </div>
      ))}
    </div>
  )
}

export default GameGrid
