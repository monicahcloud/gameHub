import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import usePlatforms from '../hooks/usePlatforms'

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms()

  if (error) return null

  return (
    <>
      <div className="dropdown relative"> 
        <label
          tabIndex={0}
          className="btn btn-neutral w-full flex justify-between items-center"
        >
          {selectedPlatform?.name || 'Platforms'}
          <BsChevronDown className="ml-2" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 absolute z-10"
        >
          {data?.results.map((platform) => (
            <li key={platform.id}>
              <a
                onClick={() => onSelectPlatform(platform)}
                className="hover:bg-primary hover:text-white"
              >
                {platform.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default PlatformSelector
