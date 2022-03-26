import businessResolver, { defaultBusinessFields } from '@resolvers/business'
import commentResolver from '@resolvers/comment'
import locationResolver from '@resolvers/location'
import reviewResolver from '@resolvers/review'
import userResolver from '@resolvers/user'
import { merge } from 'lodash'

export const defaultFields = merge(defaultBusinessFields)

export default merge(
  businessResolver,
  commentResolver,
  locationResolver,
  reviewResolver,
  userResolver
)
