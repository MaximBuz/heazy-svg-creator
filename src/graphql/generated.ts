import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    ...({"headers":{"My-Header":"SomeValue","Content-Type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BubbleOptions = {
  __typename?: 'BubbleOptions';
  bgColor: Scalars['String'];
  endColor: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  seed: Scalars['Int'];
  shadowColor: Scalars['String'];
  shadowSD: Scalars['Float'];
  shadowX: Scalars['Float'];
  shadowY: Scalars['Float'];
  size: Scalars['Float'];
  solid: Scalars['Int'];
  startColor: Scalars['String'];
  stroke: Scalars['Boolean'];
  strokeWidth: Scalars['Int'];
  user?: Maybe<User>;
  userId: Scalars['Int'];
  velocity: Scalars['Float'];
};

export type CornerOptions = {
  __typename?: 'CornerOptions';
  balance: Scalars['Float'];
  bgColor: Scalars['String'];
  bottomLeftCorner?: Maybe<Scalars['Boolean']>;
  bottomRightCorner?: Maybe<Scalars['Boolean']>;
  breaks: Scalars['Int'];
  distance: Scalars['Int'];
  endColor: Scalars['String'];
  id: Scalars['Int'];
  mirror?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  seed: Scalars['Int'];
  shadowColor: Scalars['String'];
  shadowSD: Scalars['Float'];
  shadowX: Scalars['Float'];
  shadowY: Scalars['Float'];
  smooth: Scalars['Float'];
  solid: Scalars['Int'];
  stacks: Scalars['Int'];
  startColor: Scalars['String'];
  stroke: Scalars['Boolean'];
  strokeShrink: Scalars['Boolean'];
  strokeWidth: Scalars['Int'];
  topLeftCorner?: Maybe<Scalars['Boolean']>;
  topRightCorner?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
  userId: Scalars['Int'];
  velocity: Scalars['Float'];
};

export type MarkerOptions = {
  __typename?: 'MarkerOptions';
  bgColor: Scalars['String'];
  endColor: Scalars['String'];
  ghost: Scalars['Boolean'];
  ghostEndColor: Scalars['String'];
  ghostSize: Scalars['Float'];
  ghostStartColor: Scalars['String'];
  id: Scalars['Int'];
  lineCap: Scalars['String'];
  lineJoin: Scalars['String'];
  markerHeight: Scalars['Int'];
  mirror: Scalars['Boolean'];
  name: Scalars['String'];
  padding: Scalars['Float'];
  pressure: Scalars['Float'];
  seed: Scalars['Int'];
  shadowColor: Scalars['String'];
  shadowSD: Scalars['Float'];
  shadowX: Scalars['Float'];
  shadowY: Scalars['Float'];
  startColor: Scalars['String'];
  strokeWidth: Scalars['Int'];
  user?: Maybe<User>;
  userId: Scalars['Int'];
  yPosition: Scalars['Float'];
  zickZacks: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNewBubble?: Maybe<BubbleOptions>;
  createNewCorners?: Maybe<CornerOptions>;
  createNewMarker?: Maybe<MarkerOptions>;
  createNewUser?: Maybe<User>;
  createNewWaves?: Maybe<WaveOptions>;
};


export type MutationCreateNewBubbleArgs = {
  bgColor: Scalars['String'];
  endColor: Scalars['String'];
  name: Scalars['String'];
  seed: Scalars['Int'];
  shadowColor: Scalars['String'];
  shadowSD: Scalars['Float'];
  shadowX: Scalars['Float'];
  shadowY: Scalars['Float'];
  size: Scalars['Float'];
  solid: Scalars['Int'];
  startColor: Scalars['String'];
  stroke: Scalars['Boolean'];
  strokeWidth: Scalars['Int'];
  userId: Scalars['Int'];
  velocity: Scalars['Float'];
};


export type MutationCreateNewCornersArgs = {
  balance: Scalars['Float'];
  bgColor: Scalars['String'];
  bottomLeftCorner?: InputMaybe<Scalars['Boolean']>;
  bottomRightCorner?: InputMaybe<Scalars['Boolean']>;
  breaks: Scalars['Int'];
  distance: Scalars['Int'];
  endColor: Scalars['String'];
  mirror?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  seed: Scalars['Int'];
  shadowColor: Scalars['String'];
  shadowSD: Scalars['Float'];
  shadowX: Scalars['Float'];
  shadowY: Scalars['Float'];
  smooth: Scalars['Float'];
  solid: Scalars['Int'];
  stacks: Scalars['Int'];
  startColor: Scalars['String'];
  stroke: Scalars['Boolean'];
  strokeShrink: Scalars['Boolean'];
  strokeWidth: Scalars['Int'];
  topLeftCorner?: InputMaybe<Scalars['Boolean']>;
  topRightCorner?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['Int'];
  velocity: Scalars['Float'];
};


export type MutationCreateNewMarkerArgs = {
  bgColor: Scalars['String'];
  endColor: Scalars['String'];
  ghost: Scalars['Boolean'];
  ghostEndColor: Scalars['String'];
  ghostSize: Scalars['Float'];
  ghostStartColor: Scalars['String'];
  lineCap: Scalars['String'];
  lineJoin: Scalars['String'];
  markerHeight: Scalars['Int'];
  mirror: Scalars['Boolean'];
  name: Scalars['String'];
  padding: Scalars['Float'];
  pressure: Scalars['Float'];
  seed: Scalars['Int'];
  shadowColor: Scalars['String'];
  shadowSD: Scalars['Float'];
  shadowX: Scalars['Float'];
  shadowY: Scalars['Float'];
  startColor: Scalars['String'];
  strokeWidth: Scalars['Int'];
  userId: Scalars['Int'];
  yPosition: Scalars['Float'];
  zickZacks: Scalars['Int'];
};


export type MutationCreateNewUserArgs = {
  email: Scalars['String'];
  firebaseId?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};


export type MutationCreateNewWavesArgs = {
  balance: Scalars['Float'];
  bgColor: Scalars['String'];
  breaks: Scalars['Int'];
  distance: Scalars['Int'];
  endColor: Scalars['String'];
  name: Scalars['String'];
  seed: Scalars['Int'];
  shadowColor: Scalars['String'];
  shadowSD: Scalars['Float'];
  shadowX: Scalars['Float'];
  shadowY: Scalars['Float'];
  smooth: Scalars['Float'];
  solid: Scalars['Int'];
  stacks: Scalars['Int'];
  startColor: Scalars['String'];
  stroke?: InputMaybe<Scalars['Boolean']>;
  strokeShrink?: InputMaybe<Scalars['Boolean']>;
  strokeWidth: Scalars['Int'];
  userId: Scalars['Int'];
  velocity: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getBubbleById?: Maybe<BubbleOptions>;
  getBubblesByFirebaseId?: Maybe<Array<Maybe<BubbleOptions>>>;
  getBubblesByUserId?: Maybe<Array<Maybe<BubbleOptions>>>;
  getCornerById?: Maybe<CornerOptions>;
  getCornersByFirebaseId?: Maybe<Array<Maybe<CornerOptions>>>;
  getCornersByUserId?: Maybe<Array<Maybe<CornerOptions>>>;
  getMarkerById?: Maybe<MarkerOptions>;
  getMarkersByFirebaseId?: Maybe<Array<Maybe<MarkerOptions>>>;
  getMarkersByUserId?: Maybe<Array<Maybe<MarkerOptions>>>;
  getUserByFirebaseId?: Maybe<User>;
  getUserById?: Maybe<User>;
  getWaveById?: Maybe<WaveOptions>;
  getWavesByFirebaseId?: Maybe<Array<Maybe<WaveOptions>>>;
  getWavesByUserId?: Maybe<Array<Maybe<WaveOptions>>>;
};


export type QueryGetBubbleByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetBubblesByFirebaseIdArgs = {
  id: Scalars['String'];
};


export type QueryGetBubblesByUserIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetCornerByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetCornersByFirebaseIdArgs = {
  id: Scalars['String'];
};


export type QueryGetCornersByUserIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetMarkerByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetMarkersByFirebaseIdArgs = {
  id: Scalars['String'];
};


export type QueryGetMarkersByUserIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetUserByFirebaseIdArgs = {
  id: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetWaveByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetWavesByFirebaseIdArgs = {
  id: Scalars['String'];
};


export type QueryGetWavesByUserIdArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  bubbles?: Maybe<Array<Maybe<BubbleOptions>>>;
  corners?: Maybe<Array<Maybe<CornerOptions>>>;
  email: Scalars['String'];
  firebaseId: Scalars['String'];
  id: Scalars['Int'];
  markers?: Maybe<Array<Maybe<MarkerOptions>>>;
  username: Scalars['String'];
  waves?: Maybe<Array<Maybe<WaveOptions>>>;
};

export type WaveOptions = {
  __typename?: 'WaveOptions';
  balance: Scalars['Float'];
  bgColor: Scalars['String'];
  breaks: Scalars['Int'];
  distance: Scalars['Int'];
  endColor: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  seed: Scalars['Int'];
  shadowColor: Scalars['String'];
  shadowSD: Scalars['Float'];
  shadowX: Scalars['Float'];
  shadowY: Scalars['Float'];
  smooth: Scalars['Float'];
  solid: Scalars['Int'];
  stacks: Scalars['Int'];
  startColor: Scalars['String'];
  stroke?: Maybe<Scalars['Boolean']>;
  strokeShrink?: Maybe<Scalars['Boolean']>;
  strokeWidth: Scalars['Int'];
  user?: Maybe<User>;
  userId: Scalars['Int'];
  velocity: Scalars['Float'];
};

export type UserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', getUserByFirebaseId?: { __typename?: 'User', id: number, firebaseId: string, email: string, username: string, bubbles?: Array<{ __typename?: 'BubbleOptions', name: string, id: number, seed: number, stroke: boolean, velocity: number } | null> | null } | null };


export const UserDocument = `
    query User($id: String!) {
  getUserByFirebaseId(id: $id) {
    id
    firebaseId
    email
    username
    bubbles {
      name
      id
      seed
      stroke
      velocity
    }
  }
}
    `;
export const useUserQuery = <
      TData = UserQuery,
      TError = unknown
    >(
      variables: UserQueryVariables,
      options?: UseQueryOptions<UserQuery, TError, TData>
    ) =>
    useQuery<UserQuery, TError, TData>(
      ['User', variables],
      fetcher<UserQuery, UserQueryVariables>(UserDocument, variables),
      options
    );