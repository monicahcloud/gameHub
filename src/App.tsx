import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-[250px,1fr] lg:grid-rows-[auto,1fr]  gap-4 p-4">
        <div className="col-span-2 ">
          <NavBar />
        </div>
        <div className="hidden lg:block lg:col-start-1 lg:col-span-1 bg-white-200 p-4 rounded ">
          <GenreList />
        </div>
        <div className="lg:col-start-2 bg-base-100 p-4 rounded">
          <GameGrid />
        </div>
      </div>
    </>
  )
}

export default App
