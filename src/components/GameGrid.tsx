import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkelton'


interface Props {
 
  selectedGenre: Genre | null
}


const GameGrid = ({selectedGenre}: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre)
  const skeletons = [1, 2, 3, 4, 5, 6]

  if (error) return <p className="text-red-500">{error}</p>
  return (
    <>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* {error && <div className="text-4xl font-extrabold">{error}</div>} */}

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
