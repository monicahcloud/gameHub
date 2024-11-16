import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkelton from './GameCardSkelton'

const GameGrid = () => {
  const { games, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10">
        {error && <div className="text-4xl font-extrabold">{error}</div>}

        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkelton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  )
}

export default GameGrid
