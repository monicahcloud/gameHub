import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkelton'
import { Platform } from '../hooks/useGames'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6]

  if (error) return <p className="text-red-500">{error}</p>
  return (
    <>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading &&
          skeletons.map((_, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg">
              <GameCardSkeleton />
            </div>
          ))}
        {data.map((game) => (
          <div key={game.id} className="rounded-xl overflow-hidden shadow-lg">
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </>
  )
}

export default GameGrid
