import { Platform } from '../hooks/Platform'
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'

interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  }

  return (
    <div className="flex space-x-2">
      {platforms.map((platform) => {
        // Get the icon component from the map
        const IconComponent = iconMap[platform.slug]

        // If no icon is found for this platform, don't render anything
        if (!IconComponent) return null

        // Return the icon component
        return (
          <IconComponent
            key={platform.slug}
            className="text-xl text-gray-500"
          />
        )
      })}
    </div>
  )
}

export default PlatformIconList
