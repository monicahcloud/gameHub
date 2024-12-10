interface Props {
  children: React.ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md ">
      {children}
    </div>
  )
}

export default GameCardContainer
