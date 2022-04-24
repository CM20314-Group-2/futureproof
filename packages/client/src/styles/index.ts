import Color from 'color'

const BASE_COLOR = new Color('#080')
export const DEFAULT_COLOR = BASE_COLOR.darken(1)

/**
 * Converts a numeric rating to a hex color string
 * 
 * @param rating Numeric rating for business (0-100)
 * @returns Hex colour string
 */
export const ratingToColour = (rating : number | null) : Color => {
  if (rating === null) {
    return DEFAULT_COLOR
  }
  if (rating < 0 || rating > 100) {
    throw new Error('ratingValue must be between 0 and 100')
  }

  return new Color(BASE_COLOR).lightness(rating)
}
