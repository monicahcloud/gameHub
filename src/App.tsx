import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-[250px,1fr] lg:grid-rows-[auto,1fr]  gap-4 p-4">
        <div className="col-span-2 ">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </div>
        <div className="hidden lg:block lg:col-start-1 lg:col-span-1 bg-white-200 p-4 rounded ">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </div>
        <div className="col-span-full lg:col-start-2 p-2">
          <div className="pl-2">
            <div className="flex flex-wrap gap-3 mb-3">
              <div className="flex-shrink-0">
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </div>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </div>
            <GameGrid gameQuery={gameQuery} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
