import noImage from '../assets/no-image-placeholder.webp'

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage

  const target = 'media/'
  const index = url.indexOf(target) + target.length

  // Ensure that the 'crop/600/400/' string is added only if the target is found
  if (index !== -1) {
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
  }

  return noImage // In case the 'media/' part is not found, return the placeholder
}

export default getCroppedImageUrl
