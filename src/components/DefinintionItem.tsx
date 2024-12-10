import  { ReactNode } from 'react'

interface Props {
    term: string
    children: ReactNode | ReactNode[]

}
const DefinintionItem = ({term, children} : Props) => {
  return (
    <div className="card bg-base-100 shadow-lg p-5">
      <dl className="my-5">
        <dt className="text-base font-semibold text-slat-600">{term}</dt>
        <dd className="ml-4">{children}</dd>
      </dl>
    </div>
  )
}

export default DefinintionItem
