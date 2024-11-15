import useGames from '../hooks/useGames'
import GameCard from './GameCard'

const GameGrid = () => {
  const { games, error } = useGames()
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10">
        {error && <div className="text-4xl font-extrabold">{error}</div>}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  )
}

export default GameGrid
