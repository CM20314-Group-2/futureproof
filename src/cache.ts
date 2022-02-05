import {InMemoryCache, makeVar} from '@apollo/client'
import {SortOptions} from '@typings/Search'

const cache = new InMemoryCache()
export const sortOption = makeVar<SortOptions>('name_asc')

export default cache