
import { BsSearch } from 'react-icons/bs'
const SearchInputs = () => {
  return (
    <>
      <BsSearch className="absolute left-4 text-gray-500" />
      <input
        
        type="text"
        placeholder="Search games..."
        className="input input-bordered w-full pl-12 pr-4 rounded-full"
      />
    </>
  )
}

export default SearchInputs
