import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Design = {
  __typename?: 'Design';
  copiedFrom?: Maybe<User>;
  copiedFromUserId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  optionParameters: Scalars['JSON'];
  public: Scalars['Boolean'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  timesCopied: Scalars['Int'];
  type: DesignType;
  typeId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type DesignType = {
  __typename?: 'DesignType';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNewDesign?: Maybe<Design>;
  createNewUser?: Maybe<User>;
  incrementTimesCopied?: Maybe<Design>;
  updateDesign?: Maybe<Design>;
  updateUser?: Maybe<User>;
};


export type MutationCreateNewDesignArgs = {
  copiedFromUserId?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  optionParameters: Scalars['JSON'];
  public?: InputMaybe<Scalars['Boolean']>;
  thumbnailUrl?: InputMaybe<Scalars['String']>;
  typeId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type MutationCreateNewUserArgs = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firebaseId: Scalars['String'];
  userName: Scalars['String'];
};


export type MutationIncrementTimesCopiedArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateDesignArgs = {
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  optionParameters: Scalars['JSON'];
  public?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateUserArgs = {
  userId: Scalars['Int'];
  userName?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllPublicDesigns?: Maybe<Array<Maybe<Design>>>;
  getAllPublicDesignsByType?: Maybe<Array<Maybe<Design>>>;
  getDesignById?: Maybe<Design>;
  getDesignTypes: Array<Maybe<DesignType>>;
  getUserByFirebaseId?: Maybe<User>;
  getUserById?: Maybe<User>;
};


export type QueryGetAllPublicDesignsArgs = {
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllPublicDesignsByTypeArgs = {
  typeId: Scalars['Int'];
};


export type QueryGetDesignByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetUserByFirebaseIdArgs = {
  id: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  avatarUrl?: Maybe<Scalars['String']>;
  designs?: Maybe<Array<Maybe<Design>>>;
  email: Scalars['String'];
  firebaseId: Scalars['String'];
  id: Scalars['Int'];
  userName: Scalars['String'];
};

export type UserByFirebaseIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserByFirebaseIdQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, firebaseId: string, email: string, userName: string, avatarUrl?: string | null, designs?: Array<{ __typename?: 'Design', id: number, timesCopied: number, public: boolean, name: string, thumbnailUrl?: string | null, optionParameters: any, createdAt: string, type: { __typename?: 'DesignType', id: number, name: string }, copiedFrom?: { __typename?: 'User', userName: string, id: number } | null } | null> | null } | null };

export type CreateNewDesignMutationVariables = Exact<{
  userId: Scalars['Int'];
  public?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  typeId: Scalars['Int'];
  thumbnailUrl: Scalars['String'];
  copiedFromUserId?: InputMaybe<Scalars['Int']>;
  optionParameters: Scalars['JSON'];
}>;


export type CreateNewDesignMutation = { __typename?: 'Mutation', createNewDesign?: { __typename?: 'Design', id: number, timesCopied: number, public: boolean, name: string, thumbnailUrl?: string | null, optionParameters: any, createdAt: string, type: { __typename?: 'DesignType', id: number, name: string }, copiedFrom?: { __typename?: 'User', id: number, userName: string } | null } | null };

export type CreateNewUserMutationVariables = Exact<{
  firebaseId: Scalars['String'];
  email: Scalars['String'];
  userName: Scalars['String'];
  avatarUrl?: InputMaybe<Scalars['String']>;
}>;


export type CreateNewUserMutation = { __typename?: 'Mutation', createNewUser?: { __typename?: 'User', id: number, firebaseId: string, email: string, userName: string, avatarUrl?: string | null } | null };


export const UserByFirebaseIdDocument = `
    query UserByFirebaseId($id: String!) {
  user: getUserByFirebaseId(id: $id) {
    id
    firebaseId
    email
    userName
    avatarUrl
    designs {
      id
      timesCopied
      public
      name
      type {
        id
        name
      }
      thumbnailUrl
      copiedFrom {
        userName
        id
      }
      optionParameters
      createdAt
    }
  }
}
    `;
export const useUserByFirebaseIdQuery = <
      TData = UserByFirebaseIdQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: UserByFirebaseIdQueryVariables,
      options?: UseQueryOptions<UserByFirebaseIdQuery, TError, TData>
    ) =>
    useQuery<UserByFirebaseIdQuery, TError, TData>(
      ['UserByFirebaseId', variables],
      fetcher<UserByFirebaseIdQuery, UserByFirebaseIdQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UserByFirebaseIdDocument, variables),
      options
    );
export const CreateNewDesignDocument = `
    mutation createNewDesign($userId: Int!, $public: Boolean, $name: String!, $typeId: Int!, $thumbnailUrl: String!, $copiedFromUserId: Int, $optionParameters: JSON!) {
  createNewDesign(
    userId: $userId
    public: $public
    name: $name
    typeId: $typeId
    thumbnailUrl: $thumbnailUrl
    copiedFromUserId: $copiedFromUserId
    optionParameters: $optionParameters
  ) {
    id
    timesCopied
    public
    name
    type {
      id
      name
    }
    thumbnailUrl
    copiedFrom {
      id
      userName
    }
    optionParameters
    createdAt
  }
}
    `;
export const useCreateNewDesignMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<CreateNewDesignMutation, TError, CreateNewDesignMutationVariables, TContext>
    ) =>
    useMutation<CreateNewDesignMutation, TError, CreateNewDesignMutationVariables, TContext>(
      ['createNewDesign'],
      (variables?: CreateNewDesignMutationVariables) => fetcher<CreateNewDesignMutation, CreateNewDesignMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreateNewDesignDocument, variables)(),
      options
    );
export const CreateNewUserDocument = `
    mutation createNewUser($firebaseId: String!, $email: String!, $userName: String!, $avatarUrl: String) {
  createNewUser(
    firebaseId: $firebaseId
    email: $email
    userName: $userName
    avatarUrl: $avatarUrl
  ) {
    id
    firebaseId
    email
    userName
    avatarUrl
  }
}
    `;
export const useCreateNewUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<CreateNewUserMutation, TError, CreateNewUserMutationVariables, TContext>
    ) =>
    useMutation<CreateNewUserMutation, TError, CreateNewUserMutationVariables, TContext>(
      ['createNewUser'],
      (variables?: CreateNewUserMutationVariables) => fetcher<CreateNewUserMutation, CreateNewUserMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, CreateNewUserDocument, variables)(),
      options
    );