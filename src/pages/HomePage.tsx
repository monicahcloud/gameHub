import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-4">
        {/* Navigation */}
        {/* <div className="col-span-full">
          <NavBar />
        </div> */}

        {/* Sidebar for Genre List */}
        <div className="hidden lg:block px-5">
          <GenreList />
        </div>

        {/* Main Content */}
        <div className="px-2">
          <GameHeading />
          <div className="flex mb-5">
            {/* Platform Selector */}
            <div className="mr-5">
              <PlatformSelector />
            </div>
            {/* Sort Selector */}
            <SortSelector />
          </div>
          {/* Game Grid */}
          <GameGrid />
        </div>
      </div>
    </>
  )
}

export default HomePage
