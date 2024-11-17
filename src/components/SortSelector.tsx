import { BsChevronDown } from 'react-icons/bs'

interface Props {
  onSelectSortOrder: (sortOrder: string) => void
  sortOrder: string
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]

  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder)

  return (
    <>
      <div className="dropdown relative">
        <label
          tabIndex={0}
          className="btn btn-neutral w-full flex justify-between items-center"
        >
          Order by: {currentSortOrder?.label || 'Relevance'}
          <BsChevronDown className="ml-2" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 absolute z-10"
        >
          {sortOrders.map((order) => (
            <li key={order.value}>
              <a
                onClick={() => onSelectSortOrder(order.value)}
                className="hover:bg-primary hover:text-white cursor-pointer"
              >
                {order.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SortSelector
