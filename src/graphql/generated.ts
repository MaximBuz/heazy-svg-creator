import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables
) {
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
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Design = {
  __typename?: 'Design';
  copiedFrom?: Maybe<User>;
  copiedFromUserId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
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
  delete?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  optionParameters?: InputMaybe<Scalars['JSON']>;
  public?: InputMaybe<Scalars['Boolean']>;
};

export type MutationUpdateUserArgs = {
  userName?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getDesignById?: Maybe<Design>;
  getDesignTypes: Array<Maybe<DesignType>>;
  getPublicDesigns?: Maybe<Array<Maybe<Design>>>;
  getUserByFirebaseId?: Maybe<User>;
  getUserById?: Maybe<User>;
};

export type QueryGetDesignByIdArgs = {
  id: Scalars['Int'];
};

export type QueryGetPublicDesignsArgs = {
  cursor?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Array<Scalars['Int']>>;
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

export type CreateNewDesignMutationVariables = Exact<{
  public?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  typeId: Scalars['Int'];
  thumbnailUrl: Scalars['String'];
  copiedFromUserId?: InputMaybe<Scalars['Int']>;
  optionParameters: Scalars['JSON'];
}>;

export type CreateNewDesignMutation = {
  __typename?: 'Mutation';
  design?: {
    __typename?: 'Design';
    id: number;
    timesCopied: number;
    public: boolean;
    name: string;
    thumbnailUrl?: string | null;
    optionParameters: any;
    createdAt: any;
    type: { __typename?: 'DesignType'; id: number; name: string };
    copiedFrom?: { __typename?: 'User'; id: number; userName: string } | null;
  } | null;
};

export type CreateNewUserMutationVariables = Exact<{
  firebaseId: Scalars['String'];
  email: Scalars['String'];
  userName: Scalars['String'];
  avatarUrl?: InputMaybe<Scalars['String']>;
}>;

export type CreateNewUserMutation = {
  __typename?: 'Mutation';
  user?: {
    __typename?: 'User';
    id: number;
    firebaseId: string;
    email: string;
    userName: string;
    avatarUrl?: string | null;
  } | null;
};

export type IncrementTimesCopiedMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type IncrementTimesCopiedMutation = {
  __typename?: 'Mutation';
  design?: {
    __typename?: 'Design';
    id: number;
    timesCopied: number;
    public: boolean;
    name: string;
    thumbnailUrl?: string | null;
    optionParameters: any;
    createdAt: any;
    type: { __typename?: 'DesignType'; id: number; name: string };
    copiedFrom?: { __typename?: 'User'; id: number; userName: string } | null;
  } | null;
};

export type UpdateDesignMutationVariables = Exact<{
  id: Scalars['Int'];
  public?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  optionParameters?: InputMaybe<Scalars['JSON']>;
  delete?: InputMaybe<Scalars['Boolean']>;
}>;

export type UpdateDesignMutation = {
  __typename?: 'Mutation';
  design?: {
    __typename?: 'Design';
    id: number;
    timesCopied: number;
    public: boolean;
    name: string;
    thumbnailUrl?: string | null;
    optionParameters: any;
    createdAt: any;
    type: { __typename?: 'DesignType'; id: number; name: string };
    copiedFrom?: { __typename?: 'User'; id: number; userName: string } | null;
  } | null;
};

export type UpdateUserMutationVariables = Exact<{
  userName?: InputMaybe<Scalars['String']>;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  user?: {
    __typename?: 'User';
    id: number;
    firebaseId: string;
    email: string;
    userName: string;
    avatarUrl?: string | null;
  } | null;
};

export type GetDesignByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetDesignByIdQuery = {
  __typename?: 'Query';
  design?: {
    __typename?: 'Design';
    id: number;
    name: string;
    timesCopied: number;
    public: boolean;
    thumbnailUrl?: string | null;
    optionParameters: any;
    createdAt: any;
    type: { __typename?: 'DesignType'; id: number; name: string };
    copiedFrom?: { __typename?: 'User'; userName: string; id: number } | null;
  } | null;
};

export type GetDesignTypesQueryVariables = Exact<{ [key: string]: never }>;

export type GetDesignTypesQuery = {
  __typename?: 'Query';
  designTypes: Array<{
    __typename?: 'DesignType';
    id: number;
    name: string;
  } | null>;
};

export type GetPublicDesignsQueryVariables = Exact<{
  sortBy?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  cursor?: InputMaybe<Scalars['Int']>;
}>;

export type GetPublicDesignsQuery = {
  __typename?: 'Query';
  designs?: Array<{
    __typename?: 'Design';
    id: number;
    name: string;
    timesCopied: number;
    public: boolean;
    thumbnailUrl?: string | null;
    optionParameters: any;
    createdAt: any;
    type: { __typename?: 'DesignType'; id: number; name: string };
    copiedFrom?: {
      __typename?: 'User';
      id: number;
      firebaseId: string;
      userName: string;
    } | null;
    user: {
      __typename?: 'User';
      id: number;
      firebaseId: string;
      userName: string;
    };
  } | null> | null;
};

export type GetUserByFirebaseIdQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserByFirebaseIdQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    id: number;
    firebaseId: string;
    email: string;
    userName: string;
    avatarUrl?: string | null;
    designs?: Array<{
      __typename?: 'Design';
      id: number;
      timesCopied: number;
      public: boolean;
      name: string;
      thumbnailUrl?: string | null;
      optionParameters: any;
      createdAt: any;
      type: { __typename?: 'DesignType'; id: number; name: string };
      copiedFrom?: { __typename?: 'User'; userName: string; id: number } | null;
    } | null> | null;
  } | null;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetUserByIdQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    id: number;
    firebaseId: string;
    email: string;
    userName: string;
    avatarUrl?: string | null;
    designs?: Array<{
      __typename?: 'Design';
      id: number;
      timesCopied: number;
      public: boolean;
      name: string;
      thumbnailUrl?: string | null;
      optionParameters: any;
      createdAt: any;
      type: { __typename?: 'DesignType'; id: number; name: string };
      copiedFrom?: { __typename?: 'User'; userName: string; id: number } | null;
    } | null> | null;
  } | null;
};

export const CreateNewDesignDocument = `
    mutation createNewDesign($public: Boolean, $name: String!, $typeId: Int!, $thumbnailUrl: String!, $copiedFromUserId: Int, $optionParameters: JSON!) {
  design: createNewDesign(
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
  TContext = unknown,
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    CreateNewDesignMutation,
    TError,
    CreateNewDesignMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateNewDesignMutation,
    TError,
    CreateNewDesignMutationVariables,
    TContext
  >(
    ['createNewDesign'],
    (variables?: CreateNewDesignMutationVariables) =>
      fetcher<CreateNewDesignMutation, CreateNewDesignMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateNewDesignDocument,
        variables
      )(),
    options
  );
export const CreateNewUserDocument = `
    mutation createNewUser($firebaseId: String!, $email: String!, $userName: String!, $avatarUrl: String) {
  user: createNewUser(
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
export const useCreateNewUserMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    CreateNewUserMutation,
    TError,
    CreateNewUserMutationVariables,
    TContext
  >
) =>
  useMutation<
    CreateNewUserMutation,
    TError,
    CreateNewUserMutationVariables,
    TContext
  >(
    ['createNewUser'],
    (variables?: CreateNewUserMutationVariables) =>
      fetcher<CreateNewUserMutation, CreateNewUserMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateNewUserDocument,
        variables
      )(),
    options
  );
export const IncrementTimesCopiedDocument = `
    mutation incrementTimesCopied($id: Int!) {
  design: incrementTimesCopied(id: $id) {
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
export const useIncrementTimesCopiedMutation = <
  TError = unknown,
  TContext = unknown,
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    IncrementTimesCopiedMutation,
    TError,
    IncrementTimesCopiedMutationVariables,
    TContext
  >
) =>
  useMutation<
    IncrementTimesCopiedMutation,
    TError,
    IncrementTimesCopiedMutationVariables,
    TContext
  >(
    ['incrementTimesCopied'],
    (variables?: IncrementTimesCopiedMutationVariables) =>
      fetcher<
        IncrementTimesCopiedMutation,
        IncrementTimesCopiedMutationVariables
      >(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        IncrementTimesCopiedDocument,
        variables
      )(),
    options
  );
export const UpdateDesignDocument = `
    mutation updateDesign($id: Int!, $public: Boolean, $name: String, $optionParameters: JSON, $delete: Boolean) {
  design: updateDesign(
    id: $id
    public: $public
    name: $name
    optionParameters: $optionParameters
    delete: $delete
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
export const useUpdateDesignMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    UpdateDesignMutation,
    TError,
    UpdateDesignMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateDesignMutation,
    TError,
    UpdateDesignMutationVariables,
    TContext
  >(
    ['updateDesign'],
    (variables?: UpdateDesignMutationVariables) =>
      fetcher<UpdateDesignMutation, UpdateDesignMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        UpdateDesignDocument,
        variables
      )(),
    options
  );
export const UpdateUserDocument = `
    mutation updateUser($userName: String) {
  user: updateUser(userName: $userName) {
    id
    firebaseId
    email
    userName
    avatarUrl
  }
}
    `;
export const useUpdateUserMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<
    UpdateUserMutation,
    TError,
    UpdateUserMutationVariables,
    TContext
  >
) =>
  useMutation<
    UpdateUserMutation,
    TError,
    UpdateUserMutationVariables,
    TContext
  >(
    ['updateUser'],
    (variables?: UpdateUserMutationVariables) =>
      fetcher<UpdateUserMutation, UpdateUserMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        UpdateUserDocument,
        variables
      )(),
    options
  );
export const GetDesignByIdDocument = `
    query getDesignById($id: Int!) {
  design: getDesignById(id: $id) {
    id
    name
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
    `;
export const useGetDesignByIdQuery = <
  TData = GetDesignByIdQuery,
  TError = unknown,
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: GetDesignByIdQueryVariables,
  options?: UseQueryOptions<GetDesignByIdQuery, TError, TData>
) =>
  useQuery<GetDesignByIdQuery, TError, TData>(
    ['getDesignById', variables],
    fetcher<GetDesignByIdQuery, GetDesignByIdQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetDesignByIdDocument,
      variables
    ),
    options
  );
export const GetDesignTypesDocument = `
    query getDesignTypes {
  designTypes: getDesignTypes {
    id
    name
  }
}
    `;
export const useGetDesignTypesQuery = <
  TData = GetDesignTypesQuery,
  TError = unknown,
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetDesignTypesQueryVariables,
  options?: UseQueryOptions<GetDesignTypesQuery, TError, TData>
) =>
  useQuery<GetDesignTypesQuery, TError, TData>(
    variables === undefined
      ? ['getDesignTypes']
      : ['getDesignTypes', variables],
    fetcher<GetDesignTypesQuery, GetDesignTypesQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetDesignTypesDocument,
      variables
    ),
    options
  );
export const GetPublicDesignsDocument = `
    query getPublicDesigns($sortBy: String, $type: [Int!], $take: Int, $cursor: Int) {
  designs: getPublicDesigns(
    sortBy: $sortBy
    type: $type
    take: $take
    cursor: $cursor
  ) {
    id
    name
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
      firebaseId
      userName
    }
    user {
      id
      firebaseId
      userName
    }
    optionParameters
    createdAt
  }
}
    `;
export const useGetPublicDesignsQuery = <
  TData = GetPublicDesignsQuery,
  TError = unknown,
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetPublicDesignsQueryVariables,
  options?: UseQueryOptions<GetPublicDesignsQuery, TError, TData>
) =>
  useQuery<GetPublicDesignsQuery, TError, TData>(
    variables === undefined
      ? ['getPublicDesigns']
      : ['getPublicDesigns', variables],
    fetcher<GetPublicDesignsQuery, GetPublicDesignsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetPublicDesignsDocument,
      variables
    ),
    options
  );
export const GetUserByFirebaseIdDocument = `
    query getUserByFirebaseId {
  user: getUserByFirebaseId {
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
export const useGetUserByFirebaseIdQuery = <
  TData = GetUserByFirebaseIdQuery,
  TError = unknown,
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetUserByFirebaseIdQueryVariables,
  options?: UseQueryOptions<GetUserByFirebaseIdQuery, TError, TData>
) =>
  useQuery<GetUserByFirebaseIdQuery, TError, TData>(
    variables === undefined
      ? ['getUserByFirebaseId']
      : ['getUserByFirebaseId', variables],
    fetcher<GetUserByFirebaseIdQuery, GetUserByFirebaseIdQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetUserByFirebaseIdDocument,
      variables
    ),
    options
  );
export const GetUserByIdDocument = `
    query getUserById($id: Int!) {
  user: getUserById(id: $id) {
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
export const useGetUserByIdQuery = <TData = GetUserByIdQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: GetUserByIdQueryVariables,
  options?: UseQueryOptions<GetUserByIdQuery, TError, TData>
) =>
  useQuery<GetUserByIdQuery, TError, TData>(
    ['getUserById', variables],
    fetcher<GetUserByIdQuery, GetUserByIdQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetUserByIdDocument,
      variables
    ),
    options
  );
