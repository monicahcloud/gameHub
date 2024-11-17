
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
      <img
        className="w-full h-60 object-cover"
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <div className="p-4">
        <div className="flex justify-between mb-3">
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
        <h2 className="text-2xl font-semibold">
          <h2 className="text-2xl font-semibold">
            {game.name} <Emoji rating={game.rating_top} />
          </h2>
        </h2>
      </div>
    </div>
  )
}

export default GameCard
