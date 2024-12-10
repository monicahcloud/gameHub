import { Link } from 'react-router-dom'
import Game from '../entities/Game'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105 transition-all duration-300 ease-in-out ">
      <figure>
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="w-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <div className="flex justify-between items-center mb-3">
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
        <h2 className="card-title text-xl">
          <Link to={'/games/' + game.slug}>{game.name}</Link>{' '}
          <Emoji rating={game.rating_top} />
        </h2>
      </div>
    </div>
  )
}

export default GameCard
