import { InMemoryCache, makeVar } from '@apollo/client'

const cache = new InMemoryCache()
export const sortOption = makeVar<string | number>('rating_desc')

export default cache
