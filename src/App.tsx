import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'


//undefined: the absence of a value
//null: the international absence of a value

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
          selectedGenreId={gameQuery.genreId}
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
        />
      </div>

      {/* Main Content */}
      <div className="px-2">
        <GameHeading gameQuery={gameQuery} />
        <div className="flex mb-5">
          {/* Platform Selector */}
          <div className="mr-5">
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
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
