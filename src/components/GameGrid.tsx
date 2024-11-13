import useGames from '../hooks/useGames'

const GameGrid = () => {
  const { games, error } = useGames()
  return (
    <>
      <ul>
        {error && <div className="text-4xl font-extrabold">{error}</div>}
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GameGrid
