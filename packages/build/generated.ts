import type {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import type { MercuriusContext } from 'mercurius'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) =>
  | Promise<import('mercurius-codegen').DeepPartial<TResult>>
  | import('mercurius-codegen').DeepPartial<TResult>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  _FieldSet: any
}

export type Business = {
  __typename?: 'Business'
  carbonScore?: Maybe<Scalars['Float']>
  certificateScore?: Maybe<Scalars['Float']>
  charitableScore?: Maybe<Scalars['Float']>
  comments: Array<Comment>
  createdAt: Scalars['DateTime']
  customerScore?: Maybe<Scalars['Float']>
  dataPrivacyScore?: Maybe<Scalars['Float']>
  diversityScore?: Maybe<Scalars['Float']>
  envProtectionScore?: Maybe<Scalars['Float']>
  equalPayScore?: Maybe<Scalars['Float']>
  humanRightsScore?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  locations: Array<Location>
  name: Scalars['String']
  owner?: Maybe<User>
  productSafetyScore?: Maybe<Scalars['Float']>
  profilePicture?: Maybe<Scalars['String']>
  profileText?: Maybe<Scalars['String']>
  reviews: Array<Review>
  sustainabilityScore?: Maybe<Scalars['Float']>
  taxScore?: Maybe<Scalars['Float']>
  type: BusinessType
  updatedAt: Scalars['DateTime']
}

export type BusinessInput = {
  locations: Array<Scalars['ID']>
  name: Scalars['String']
  owner?: InputMaybe<Scalars['ID']>
  profilePicture?: InputMaybe<Scalars['String']>
  profileText?: InputMaybe<Scalars['String']>
  type?: InputMaybe<BusinessType>
}

export enum BusinessType {
  BAR = 'BAR',
  CAFE = 'CAFE',
  OTHER = 'OTHER',
  RESTAURANT = 'RESTAURANT',
}

export type Comment = {
  __typename?: 'Comment'
  business: Business
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  location?: Maybe<Location>
  text: Scalars['String']
  updatedAt: Scalars['DateTime']
  user: User
}

export type CommentInput = {
  business: Scalars['ID']
  location?: InputMaybe<Scalars['ID']>
  text: Scalars['String']
  user: Scalars['ID']
}

export type DisplayableBusiness = {
  __typename?: 'DisplayableBusiness'
  customerScore?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  images: Array<Maybe<Scalars['String']>>
  name: Scalars['String']
  profilePicture?: Maybe<Scalars['String']>
  profileText?: Maybe<Scalars['String']>
  sustainabilityScore?: Maybe<Scalars['Float']>
  type: BusinessType
}

export type Location = {
  __typename?: 'Location'
  address: Scalars['String']
  business: Business
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
  name: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type LocationInput = {
  address: Scalars['String']
  business: Scalars['ID']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
  name: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createBusiness?: Maybe<Business>
  createComment?: Maybe<Comment>
  createLocation?: Maybe<Location>
  createReview?: Maybe<Review>
  createUser?: Maybe<User>
  deleteBusiness?: Maybe<Business>
  deleteComment?: Maybe<Comment>
  deleteLocation?: Maybe<Location>
  deleteReview?: Maybe<Review>
  deleteUser?: Maybe<User>
  updateBusiness?: Maybe<Business>
  updateComment?: Maybe<Comment>
  updateLocation?: Maybe<Location>
  updateReview?: Maybe<Review>
  updateUser?: Maybe<User>
}

export type MutationcreateBusinessArgs = {
  input?: InputMaybe<BusinessInput>
}

export type MutationcreateCommentArgs = {
  input?: InputMaybe<CommentInput>
}

export type MutationcreateLocationArgs = {
  input?: InputMaybe<LocationInput>
}

export type MutationcreateReviewArgs = {
  input?: InputMaybe<ReviewInput>
}

export type MutationcreateUserArgs = {
  input?: InputMaybe<UserInput>
}

export type MutationdeleteBusinessArgs = {
  id: Scalars['ID']
}

export type MutationdeleteCommentArgs = {
  id: Scalars['ID']
}

export type MutationdeleteLocationArgs = {
  id: Scalars['ID']
}

export type MutationdeleteReviewArgs = {
  id: Scalars['ID']
}

export type MutationdeleteUserArgs = {
  id: Scalars['ID']
}

export type MutationupdateBusinessArgs = {
  id: Scalars['ID']
  input?: InputMaybe<BusinessInput>
}

export type MutationupdateCommentArgs = {
  id: Scalars['ID']
  input?: InputMaybe<CommentInput>
}

export type MutationupdateLocationArgs = {
  id: Scalars['ID']
  input?: InputMaybe<LocationInput>
}

export type MutationupdateReviewArgs = {
  id: Scalars['ID']
  input?: InputMaybe<ReviewInput>
}

export type MutationupdateUserArgs = {
  id: Scalars['ID']
  input?: InputMaybe<UserInput>
}

export type Query = {
  __typename?: 'Query'
  business?: Maybe<Business>
  businessByName?: Maybe<Business>
  businesses?: Maybe<Array<Maybe<Business>>>
  comment?: Maybe<Comment>
  comments?: Maybe<Array<Maybe<Comment>>>
  location?: Maybe<Location>
  locations?: Maybe<Array<Maybe<Location>>>
  review?: Maybe<Review>
  reviews?: Maybe<Array<Maybe<Review>>>
  user?: Maybe<User>
  userByEmail?: Maybe<User>
  users?: Maybe<Array<Maybe<User>>>
}

export type QuerybusinessArgs = {
  id: Scalars['ID']
}

export type QuerybusinessByNameArgs = {
  name: Scalars['String']
}

export type QuerycommentArgs = {
  id: Scalars['ID']
}

export type QuerylocationArgs = {
  id: Scalars['ID']
}

export type QueryreviewArgs = {
  id: Scalars['ID']
}

export type QueryuserArgs = {
  id: Scalars['ID']
}

export type QueryuserByEmailArgs = {
  email: Scalars['String']
}

export type Review = {
  __typename?: 'Review'
  business: Business
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  reputation: Scalars['Int']
  updatedAt: Scalars['DateTime']
  user: User
}

export type ReviewInput = {
  business: Scalars['ID']
  user: Scalars['ID']
}

export enum Role {
  ADMIN = 'ADMIN',
  BUSINESS = 'BUSINESS',
  CUSTOMER = 'CUSTOMER',
}

export type User = {
  __typename?: 'User'
  comments?: Maybe<Array<Comment>>
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  firstName: Scalars['String']
  id: Scalars['ID']
  lastName: Scalars['String']
  profilePhoto?: Maybe<Scalars['String']>
  reviews?: Maybe<Array<Review>>
  roles?: Maybe<Array<Role>>
  updatedAt: Scalars['DateTime']
}

export type UserInput = {
  email: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  password: Scalars['String']
  profilePicture?: InputMaybe<Scalars['String']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Business: ResolverTypeWrapper<Business>
  Float: ResolverTypeWrapper<Scalars['Float']>
  ID: ResolverTypeWrapper<Scalars['ID']>
  String: ResolverTypeWrapper<Scalars['String']>
  BusinessInput: BusinessInput
  BusinessType: BusinessType
  Comment: ResolverTypeWrapper<Comment>
  CommentInput: CommentInput
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>
  DisplayableBusiness: ResolverTypeWrapper<DisplayableBusiness>
  Location: ResolverTypeWrapper<Location>
  LocationInput: LocationInput
  Mutation: ResolverTypeWrapper<{}>
  Query: ResolverTypeWrapper<{}>
  Review: ResolverTypeWrapper<Review>
  Int: ResolverTypeWrapper<Scalars['Int']>
  ReviewInput: ReviewInput
  Role: Role
  User: ResolverTypeWrapper<User>
  UserInput: UserInput
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Business: Business
  Float: Scalars['Float']
  ID: Scalars['ID']
  String: Scalars['String']
  BusinessInput: BusinessInput
  Comment: Comment
  CommentInput: CommentInput
  DateTime: Scalars['DateTime']
  DisplayableBusiness: DisplayableBusiness
  Location: Location
  LocationInput: LocationInput
  Mutation: {}
  Query: {}
  Review: Review
  Int: Scalars['Int']
  ReviewInput: ReviewInput
  User: User
  UserInput: UserInput
  Boolean: Scalars['Boolean']
}

export type BusinessResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Business'] = ResolversParentTypes['Business']
> = {
  carbonScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  certificateScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  charitableScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  customerScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  dataPrivacyScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  diversityScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  envProtectionScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  equalPayScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  humanRightsScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  locations?: Resolver<
    Array<ResolversTypes['Location']>,
    ParentType,
    ContextType
  >
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  owner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  productSafetyScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  profilePicture?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  profileText?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  reviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType>
  sustainabilityScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  taxScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  type?: Resolver<ResolversTypes['BusinessType'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommentResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']
> = {
  business?: Resolver<ResolversTypes['Business'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  location?: Resolver<
    Maybe<ResolversTypes['Location']>,
    ParentType,
    ContextType
  >
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type DisplayableBusinessResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['DisplayableBusiness'] = ResolversParentTypes['DisplayableBusiness']
> = {
  customerScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  images?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  profilePicture?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  profileText?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  sustainabilityScore?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  type?: Resolver<ResolversTypes['BusinessType'], ParentType, ContextType>
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type LocationResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  business?: Resolver<ResolversTypes['Business'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createBusiness?: Resolver<
    Maybe<ResolversTypes['Business']>,
    ParentType,
    ContextType,
    Partial<MutationcreateBusinessArgs>
  >
  createComment?: Resolver<
    Maybe<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    Partial<MutationcreateCommentArgs>
  >
  createLocation?: Resolver<
    Maybe<ResolversTypes['Location']>,
    ParentType,
    ContextType,
    Partial<MutationcreateLocationArgs>
  >
  createReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    Partial<MutationcreateReviewArgs>
  >
  createUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<MutationcreateUserArgs>
  >
  deleteBusiness?: Resolver<
    Maybe<ResolversTypes['Business']>,
    ParentType,
    ContextType,
    RequireFields<MutationdeleteBusinessArgs, 'id'>
  >
  deleteComment?: Resolver<
    Maybe<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<MutationdeleteCommentArgs, 'id'>
  >
  deleteLocation?: Resolver<
    Maybe<ResolversTypes['Location']>,
    ParentType,
    ContextType,
    RequireFields<MutationdeleteLocationArgs, 'id'>
  >
  deleteReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<MutationdeleteReviewArgs, 'id'>
  >
  deleteUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationdeleteUserArgs, 'id'>
  >
  updateBusiness?: Resolver<
    Maybe<ResolversTypes['Business']>,
    ParentType,
    ContextType,
    RequireFields<MutationupdateBusinessArgs, 'id'>
  >
  updateComment?: Resolver<
    Maybe<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<MutationupdateCommentArgs, 'id'>
  >
  updateLocation?: Resolver<
    Maybe<ResolversTypes['Location']>,
    ParentType,
    ContextType,
    RequireFields<MutationupdateLocationArgs, 'id'>
  >
  updateReview?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<MutationupdateReviewArgs, 'id'>
  >
  updateUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationupdateUserArgs, 'id'>
  >
}

export type QueryResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  business?: Resolver<
    Maybe<ResolversTypes['Business']>,
    ParentType,
    ContextType,
    RequireFields<QuerybusinessArgs, 'id'>
  >
  businessByName?: Resolver<
    Maybe<ResolversTypes['Business']>,
    ParentType,
    ContextType,
    RequireFields<QuerybusinessByNameArgs, 'name'>
  >
  businesses?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Business']>>>,
    ParentType,
    ContextType
  >
  comment?: Resolver<
    Maybe<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<QuerycommentArgs, 'id'>
  >
  comments?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Comment']>>>,
    ParentType,
    ContextType
  >
  location?: Resolver<
    Maybe<ResolversTypes['Location']>,
    ParentType,
    ContextType,
    RequireFields<QuerylocationArgs, 'id'>
  >
  locations?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Location']>>>,
    ParentType,
    ContextType
  >
  review?: Resolver<
    Maybe<ResolversTypes['Review']>,
    ParentType,
    ContextType,
    RequireFields<QueryreviewArgs, 'id'>
  >
  reviews?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Review']>>>,
    ParentType,
    ContextType
  >
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryuserArgs, 'id'>
  >
  userByEmail?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryuserByEmailArgs, 'email'>
  >
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >
}

export type ReviewResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']
> = {
  business?: Resolver<ResolversTypes['Business'], ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  reputation?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserResolvers<
  ContextType = MercuriusContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  comments?: Resolver<
    Maybe<Array<ResolversTypes['Comment']>>,
    ParentType,
    ContextType
  >
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  profilePhoto?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  reviews?: Resolver<
    Maybe<Array<ResolversTypes['Review']>>,
    ParentType,
    ContextType
  >
  roles?: Resolver<
    Maybe<Array<ResolversTypes['Role']>>,
    ParentType,
    ContextType
  >
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = MercuriusContext> = {
  Business?: BusinessResolvers<ContextType>
  Comment?: CommentResolvers<ContextType>
  DateTime?: GraphQLScalarType
  DisplayableBusiness?: DisplayableBusinessResolvers<ContextType>
  Location?: LocationResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Review?: ReviewResolvers<ContextType>
  User?: UserResolvers<ContextType>
}

export type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj
    params: TParams
  }>,
  context: TContext & {
    reply: import('fastify').FastifyReply
  }
) => Promise<Array<import('mercurius-codegen').DeepPartial<TReturn>>>
export type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>
      opts?: {
        cache?: boolean
      }
    }
export interface Loaders<
  TContext = import('mercurius').MercuriusContext & {
    reply: import('fastify').FastifyReply
  }
> {
  Business?: {
    carbonScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      Business,
      {},
      TContext
    >
    certificateScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      Business,
      {},
      TContext
    >
    charitableScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      Business,
      {},
      TContext
    >
    comments?: LoaderResolver<Array<Comment>, Business, {}, TContext>
    createdAt?: LoaderResolver<Scalars['DateTime'], Business, {}, TContext>
    customerScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      Business,
      {},
      TContext
    >
    dataPrivacyScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      Business,
      {},
      TContext
    >
    diversityScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      Business,
      {},
      TContext
    >
    envProtectionScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      Business,
      {},
      TContext
    >
    equalPayScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      Business,
      {},
      TContext
    >
    humanRightsScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      Business,
      {},
      TContext
    >
    id?: LoaderResolver<Scalars['ID'], Business, {}, TContext>
    locations?: LoaderResolver<Array<Location>, Business, {}, TContext>
    name?: LoaderResolver<Scalars['String'], Business, {}, TContext>
    owner?: LoaderResolver<Maybe<User>, Business, {}, TContext>
    productSafetyScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      Business,
      {},
      TContext
    >
    profilePicture?: LoaderResolver<
      Maybe<Scalars['String']>,
      Business,
      {},
      TContext
    >
    profileText?: LoaderResolver<
      Maybe<Scalars['String']>,
      Business,
      {},
      TContext
    >
    reviews?: LoaderResolver<Array<Review>, Business, {}, TContext>
    sustainabilityScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      Business,
      {},
      TContext
    >
    taxScore?: LoaderResolver<Maybe<Scalars['Float']>, Business, {}, TContext>
    type?: LoaderResolver<BusinessType, Business, {}, TContext>
    updatedAt?: LoaderResolver<Scalars['DateTime'], Business, {}, TContext>
  }

  Comment?: {
    business?: LoaderResolver<Business, Comment, {}, TContext>
    createdAt?: LoaderResolver<Scalars['DateTime'], Comment, {}, TContext>
    id?: LoaderResolver<Scalars['ID'], Comment, {}, TContext>
    location?: LoaderResolver<Maybe<Location>, Comment, {}, TContext>
    text?: LoaderResolver<Scalars['String'], Comment, {}, TContext>
    updatedAt?: LoaderResolver<Scalars['DateTime'], Comment, {}, TContext>
    user?: LoaderResolver<User, Comment, {}, TContext>
  }

  DisplayableBusiness?: {
    customerScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      DisplayableBusiness,
      {},
      TContext
    >
    id?: LoaderResolver<Scalars['ID'], DisplayableBusiness, {}, TContext>
    images?: LoaderResolver<
      Array<Maybe<Scalars['String']>>,
      DisplayableBusiness,
      {},
      TContext
    >
    name?: LoaderResolver<Scalars['String'], DisplayableBusiness, {}, TContext>
    profilePicture?: LoaderResolver<
      Maybe<Scalars['String']>,
      DisplayableBusiness,
      {},
      TContext
    >
    profileText?: LoaderResolver<
      Maybe<Scalars['String']>,
      DisplayableBusiness,
      {},
      TContext
    >
    sustainabilityScore?: LoaderResolver<
      Maybe<Scalars['Float']>,
      DisplayableBusiness,
      {},
      TContext
    >
    type?: LoaderResolver<BusinessType, DisplayableBusiness, {}, TContext>
  }

  Location?: {
    address?: LoaderResolver<Scalars['String'], Location, {}, TContext>
    business?: LoaderResolver<Business, Location, {}, TContext>
    createdAt?: LoaderResolver<Scalars['DateTime'], Location, {}, TContext>
    id?: LoaderResolver<Scalars['ID'], Location, {}, TContext>
    latitude?: LoaderResolver<Scalars['Float'], Location, {}, TContext>
    longitude?: LoaderResolver<Scalars['Float'], Location, {}, TContext>
    name?: LoaderResolver<Scalars['String'], Location, {}, TContext>
    updatedAt?: LoaderResolver<Scalars['DateTime'], Location, {}, TContext>
  }

  Review?: {
    business?: LoaderResolver<Business, Review, {}, TContext>
    createdAt?: LoaderResolver<Scalars['DateTime'], Review, {}, TContext>
    id?: LoaderResolver<Scalars['ID'], Review, {}, TContext>
    reputation?: LoaderResolver<Scalars['Int'], Review, {}, TContext>
    updatedAt?: LoaderResolver<Scalars['DateTime'], Review, {}, TContext>
    user?: LoaderResolver<User, Review, {}, TContext>
  }

  User?: {
    comments?: LoaderResolver<Maybe<Array<Comment>>, User, {}, TContext>
    createdAt?: LoaderResolver<Scalars['DateTime'], User, {}, TContext>
    email?: LoaderResolver<Scalars['String'], User, {}, TContext>
    firstName?: LoaderResolver<Scalars['String'], User, {}, TContext>
    id?: LoaderResolver<Scalars['ID'], User, {}, TContext>
    lastName?: LoaderResolver<Scalars['String'], User, {}, TContext>
    profilePhoto?: LoaderResolver<Maybe<Scalars['String']>, User, {}, TContext>
    reviews?: LoaderResolver<Maybe<Array<Review>>, User, {}, TContext>
    roles?: LoaderResolver<Maybe<Array<Role>>, User, {}, TContext>
    updatedAt?: LoaderResolver<Scalars['DateTime'], User, {}, TContext>
  }
}
declare module 'mercurius' {
  interface IResolvers
    extends Resolvers<import('mercurius').MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
