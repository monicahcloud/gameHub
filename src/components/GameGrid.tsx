import { GameQuery } from '../App'
import React from 'react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkelton'

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery)
  const skeletons = Array.from({ length: 6 }, (_, i) => i + 1)

  if (error) return <p className="text-red-500 text-center">{error.message}</p>

  return (
    <div p-4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {isLoading &&
          skeletons.map((skeleton) => (
            <div
              key={skeleton}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <GameCardSkeleton />
            </div>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <div
                key={game.id}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <GameCard game={game} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      {hasNextPage &&  (
        <button className='btn btn-default my-5' onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? 'Loading' : 'Load More'}
          </button> 
       )}
        </div>
  )
}

export default GameGrid
