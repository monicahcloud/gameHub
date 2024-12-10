import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store'
import { useNavigate } from 'react-router-dom'



const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null)
const setSearchText = useGameQueryStore(s => s.setSearchText)
const navigate = useNavigate()  
return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (ref.current) setSearchText(ref.current.value); navigate('/')
      }}
      className="relative flex items-center"
    >
      <BsSearch className="absolute left-4 text-gray-500" />
      <input
        ref={ref}
        type="text"
        placeholder="Search games..."
        className="input input-bordered w-full pl-12 pr-4 rounded-full"
      />
    </form>
  )
}

export default SearchInput
