import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] =  useState<Platform | null>(null)

  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-[250px,1fr] lg:grid-rows-[auto,1fr]  gap-4 p-4">
        <div className="col-span-2 ">
          <NavBar />
        </div>
        <div className="hidden lg:block lg:col-start-1 lg:col-span-1 bg-white-200 p-4 rounded ">
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </div>
        <div className="lg:col-start-2 bg-base-100 p-4 rounded">
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
        </div>
      </div>
    </>
  )
}

export default App
