import Color from 'color'

const DEFAULT_COLOR = new Color('#004B15')

/**
 * Converts a numeric rating to a hex color string
 * 
 * @param rating Numeric rating for business (0-100)
 * @returns Hex colour string
 */
export const ratingToColour = (rating : number | null) : Color => {
  console.log('rating', rating)
  if (rating === null || isNaN(rating)) {
    return DEFAULT_COLOR
  }
  if (rating < 0 || rating > 100) {
    throw new Error('ratingValue must be between 0 and 100')
  }

  switch (rating % 10) {
  case 0:
    return new Color('#004B15')
  case 1:
    return new Color('#005B12')
  case 2:
    return new Color('#006B0E')
  case 3:
    return new Color('#007A08')
  case 4:
    return new Color('#008800')
  case 5:
    return new Color('#2F9A22')
  case 6:
    return new Color('#5BAB44')
  case 7:
    return new Color('#84BC66')
  case 8:
    return new Color('#A8CC88')
  case 9:
    return new Color('#C7DBAA')
  default:
    return DEFAULT_COLOR
  }
}
