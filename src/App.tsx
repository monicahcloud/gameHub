import GameGrid from './components/GameGrid'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-1 gap-0">
        <div className="col-span-2 ">
          <NavBar />
        </div>
        <div className="hidden md:block ">Aside</div>
        <div className=" md:col-span-1">
          <GameGrid />
        </div>
      </div>
    </>
  )
}

export default App
