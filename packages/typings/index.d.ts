export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Business = {
  __typename?: 'Business';
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  customerScore?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  locations: Array<Location>;
  name: Scalars['String'];
  owner?: Maybe<User>;
  primaryLocation: Location;
  profilePicture?: Maybe<Scalars['String']>;
  profileText?: Maybe<Scalars['String']>;
  reviews: Array<Review>;
  sustainabilityScore?: Maybe<Scalars['Float']>;
  sustainabilityCertificates?: [BusinessCertificate];
  sustainabilityRatings?: [Rating];
  type: BusinessType;
  updatedAt: Scalars['DateTime'];
};

export type BusinessInput = {
  locations: Array<Scalars['ID']>;
  name: Scalars['String'];
  owner?: InputMaybe<Scalars['ID']>;
  primaryLocation: Scalars['ID'];
  profilePicture?: InputMaybe<Scalars['String']>;
  profileText?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<BusinessType>;
};

export enum BusinessType {
  Bar = 'BAR',
  Cafe = 'CAFE',
  Other = 'OTHER',
  Restaurant = 'RESTAURANT'
}

export type Comment = {
  __typename?: 'Comment';
  business: Business;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  location?: Maybe<Location>;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type CommentInput = {
  business: Scalars['ID'];
  location?: InputMaybe<Scalars['ID']>;
  text: Scalars['String'];
  user: Scalars['ID'];
};

export type DisplayableBusiness = {
  __typename?: 'DisplayableBusiness';
  customerScore?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  profilePicture?: Maybe<Scalars['String']>;
  profileText?: Maybe<Scalars['String']>;
  sustainabilityScore?: Maybe<Scalars['Float']>;
  sustainabilityCertificates?: [BusinessCertificate];
  sustainabilityRatings?: [Rating];
  type: BusinessType;
};

export type Location = {
  __typename?: 'Location';
  address: Scalars['String'];
  business: Business;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LocationInput = {
  address: Scalars['String'];
  business: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBusiness?: Maybe<Business>;
  createComment?: Maybe<Comment>;
  createLocation?: Maybe<Location>;
  createReview?: Maybe<Review>;
  createUser?: Maybe<User>;
  deleteBusiness?: Maybe<Business>;
  deleteComment?: Maybe<Comment>;
  deleteLocation?: Maybe<Location>;
  deleteReview?: Maybe<Review>;
  deleteUser?: Maybe<User>;
  updateBusiness?: Maybe<Business>;
  updateComment?: Maybe<Comment>;
  updateLocation?: Maybe<Location>;
  updateReview?: Maybe<Review>;
  updateUser?: Maybe<User>;
};


export type MutationCreateBusinessArgs = {
  input?: InputMaybe<BusinessInput>;
};


export type MutationCreateCommentArgs = {
  input?: InputMaybe<CommentInput>;
};


export type MutationCreateLocationArgs = {
  input?: InputMaybe<LocationInput>;
};


export type MutationCreateReviewArgs = {
  input?: InputMaybe<ReviewInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationDeleteBusinessArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLocationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateBusinessArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<BusinessInput>;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<CommentInput>;
};


export type MutationUpdateLocationArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<LocationInput>;
};


export type MutationUpdateReviewArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<ReviewInput>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  business?: Maybe<Business>;
  businessByName?: Maybe<Business>;
  businesses?: Maybe<Array<Maybe<Business>>>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  commentsByBusiness?: Maybe<Array<Maybe<Comment>>>;
  commentsByUser?: Maybe<Array<Maybe<Comment>>>;
  location?: Maybe<Location>;
  locations?: Maybe<Array<Maybe<Location>>>;
  locationsByBusiness?: Maybe<Array<Maybe<Location>>>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  reviewsByBusiness?: Maybe<Array<Maybe<Review>>>;
  reviewsByUser?: Maybe<Array<Maybe<Review>>>;
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryBusinessArgs = {
  id: Scalars['ID'];
};


export type QueryBusinessByNameArgs = {
  name: Scalars['String'];
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsByBusinessArgs = {
  businessId: Scalars['ID'];
};


export type QueryCommentsByUserArgs = {
  userId: Scalars['ID'];
};


export type QueryLocationArgs = {
  id: Scalars['ID'];
};


export type QueryLocationsByBusinessArgs = {
  businessId: Scalars['ID'];
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryReviewsByBusinessArgs = {
  businessId: Scalars['ID'];
};


export type QueryReviewsByUserArgs = {
  userId: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  business: Business;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  reputation: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type ReviewInput = {
  business: Scalars['ID'];
  user: Scalars['ID'];
};

export enum Role {
  Admin = 'ADMIN',
  Business = 'BUSINESS',
  Customer = 'CUSTOMER'
}

export type User = {
  __typename?: 'User';
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  profilePhoto?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Review>>;
  roles?: Maybe<Array<Role>>;
  updatedAt: Scalars['DateTime'];
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  profilePicture?: InputMaybe<Scalars['String']>;
};

export type Rating = {
  __typename?: 'Rating';
  id: Scalars['ID'];
  business: Business;
  ratingName: Scalars['String'];
  ratingValue: Scalars['Int'];
}

export type BusinessCertificate = {
  __typename?: 'BusinessCertificate';
  id: Scalars['ID'];
  certificateName: Scalars['String'];
  businessHasCertificate: Scalars['Int'];
}

export type SustainabilityScoreBreakdown = {
  __typename?: 'SustainabilityScoreBreakdown';
  id: Scalars['ID'];
  certificates: Array<BusinessCertificate>;
  ratings: [Rating]
}
