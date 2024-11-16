interface Props {
  score: number
}

const CriticScore = ({ score }: Props) => {
  // Dynamically determine the badge color based on the score
  const badgeColor =
    score > 75 ? 'badge-success' : score > 60 ? 'badge-warning' : 'badge-error'

  return (
    <div
      className={`${badgeColor} text-sm p-1 rounded-md w-8 text-center `}
    >
      {score}
    </div>
  )
}

export default CriticScore
