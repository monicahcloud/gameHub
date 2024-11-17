import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import usePlatforms from '../hooks/usePlatforms'

const SortSelector = () => {
  return (
    <>
      <div className="dropdown">
        <label
          tabIndex={0}
          className="btn btn-neutral w-full flex justify-between items-center"
        >
         Order by Relevance
          <BsChevronDown className="ml-2" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
         <li>Relevance</li>
         <li>Item 2</li>
         <li>Item 3</li>
         <li>Item 4</li>
        </ul>
      </div>
    </>
  )
}

export default SortSelector
