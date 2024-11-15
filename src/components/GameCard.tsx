import { Game } from '../hooks/useGames'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white rounded-lg">
        <img
          className="w-full h-48 object-cover"
          src={game.background_image}
          alt="Card image"
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-md text-gray-800">{game.name}</h2>
          {/* <p className="text-gray-700 text-base mt-2">
            This is a simple card component using Tailwind CSS. You can easily
            customize it further.
          </p> */}
        </div>
        {/* <div className="px-6 py-3 flex justify-between items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
            Action
          </button>
        </div> */}
      </div>
    </>
  )
}

export default GameCard
