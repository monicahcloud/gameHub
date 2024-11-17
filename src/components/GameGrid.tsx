import { GameQuery } from '../App'
import useGames from '../hooks/useGames'
import { Genre } from '../hooks/useGenres'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkelton'

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6]

  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
      {isLoading &&
        skeletons.map((skeleton) => (
          <div key={skeleton} className="col-span-1">
            <GameCardContainer>
              <GameCardSkeleton />
            </GameCardContainer>
          </div>
        ))}
      {data.map((game) => (
        <div key={game.id} className="col-span-1">
          <GameCardContainer>
            <GameCard game={game} />
          </GameCardContainer>
        </div>
      ))}
    </div>
  )
}

export default GameGrid
