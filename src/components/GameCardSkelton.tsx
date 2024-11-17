const GameCardSkeleton = () => {
  return (
    <div className="card shadow-md rounded-lg">
      {/* Skeleton for the image */}
      <div className="h-48 bg-gray-300 animate-pulse"></div>
      <div className="card-body">
        {/* Skeleton for text */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default GameCardSkeleton
