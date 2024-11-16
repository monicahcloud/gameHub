const GameCardSkelton = () => {
  return (
    <>
      <div className="card w-96 bg-base-100 max-w-sm rounded-lg overflow-hidden shadow-lg bg-white rounded-lg">
        <div className="animate-pulse">
          <figure className="h-48 bg-gray-300"></figure>
          <div className=" px-6 py-4">
            <h2 className="card-title bg-gray-300 w-10 h-6 mb-4"></h2>
            <div className="bg-gray-300 w-20 h-4 mb-4"></div>
            <button className="flex space-x-4 justify-between items-center"></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameCardSkelton
