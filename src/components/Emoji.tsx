import bullsEye from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'

interface Props {
  rating: number
}

const Emoji = ({ rating }: Props) => {
  // Return null if the rating is too low or undefined
  if (rating < 3) return null

  const emojiMap: { [key: number]: string } = {
    3: meh, // meh emoji
    4: thumbsUp, // thumbs up emoji
    5: bullsEye, // bulls-eye emoji
  }

  // If the rating is beyond the predefined ones, return a default emoji
  const defaultEmoji = thumbsUp // default to thumbs up emoji

  const emojiSrc = emojiMap[rating] || defaultEmoji

  // Determine the size of the emoji based on the rating
  const sizeClass = rating === 5 ? 'w-9 h-9' : 'w-6 h-6' // Larger for exceptional (5), smaller for others

  return (
    <img
      src={emojiSrc}
      alt="rating emoji"
      className={`${sizeClass} mt-1`} // Use Tailwind classes for size and margin-top
    />
  )
}

export default Emoji
