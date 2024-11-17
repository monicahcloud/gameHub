import bullsEye from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'

interface Props {
  rating: number
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null

  const emojiMap: {
    [key: number]: { src: string; alt: string; size: string }
  } = {
    3: { src: meh, alt: 'meh', size: 'w-6 h-6' },
    4: { src: thumbsUp, alt: 'recommended', size: 'w-6 h-6' },
    5: { src: bullsEye, alt: 'exceptional', size: 'w-9 h-9' },
  }

  const { src, alt, size } = emojiMap[rating]

  return <img src={src} alt={alt} className={`inline-block ${size} mt-1`} />
}

export default Emoji
