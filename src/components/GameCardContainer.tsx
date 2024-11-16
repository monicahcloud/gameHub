import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return <div className="rounded-xl overflow-hidden shadow-lg">{children}</div>
}

export default GameCardContainer
