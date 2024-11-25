import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import { Platform } from './hooks/usePlatforms'
import { Genre } from './hooks/useGenres'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-4">
      {/* Navigation */}
      <div className="col-span-full">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </div>

      {/* Sidebar for Genre List */}
      <div className="hidden lg:block px-5">
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </div>

      {/* Main Content */}
      <div className="px-2">
        <GameHeading gameQuery={gameQuery} />
        <div className="flex mb-5">
          {/* Platform Selector */}
          <div className="mr-5">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </div>
          {/* Sort Selector */}
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </div>
        {/* Game Grid */}
        <GameGrid gameQuery={gameQuery} />
      </div>
    </div>
  )
}

export default App
