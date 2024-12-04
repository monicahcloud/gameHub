import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'
import useGameQueryStore from '../store'

const PlatformSelector = () => {
  const { data, error } = usePlatforms()
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId)
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId)
  const selectedPlatform = usePlatform(selectedPlatformId)
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
                onClick={() => setSelectedPlatformId(platform.id)}
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
