import React from 'react'
import {Game} from '../entities/Game'
import CriticScore from './CriticScore'

interface Props {
  game: Game
}

const DefinitionItem = ({
  term,
  children,
}: {
  term: string
  children: React.ReactNode
}) => {
  return (
    <div className="my-5">
      <dt className="text-lg font-semibold text-slat-700">{term}</dt>
      <dd className="ml-4">{children}</dd>
    </div>
  )
}

const GameAttributes = ({ game }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <p key={platform.id} className="text-sm text-slat-600">
            {platform.name}
          </p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <p key={genre.id} className="text-sm text-slat-600">
            {genre.name}
          </p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <p key={publisher.id} className="text-sm text-slat-600">
            {publisher.name}
          </p>
        ))}
      </DefinitionItem>
    </div>
  )
}

export default GameAttributes
