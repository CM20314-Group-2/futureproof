import { InMemoryCache, makeVar } from '@apollo/client'
import { SortOptions } from '@futureproof/typings'

const cache = new InMemoryCache()
export const sortOption = makeVar<SortOptions>('name_asc')

export default cache
