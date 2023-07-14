/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Design: ResolverTypeWrapper<Design>;
  DesignType: ResolverTypeWrapper<DesignType>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  Design: Design;
  DesignType: DesignType;
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  User: User;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DesignResolvers<ContextType = any, ParentType extends ResolversParentTypes['Design'] = ResolversParentTypes['Design']> = {
  copiedFrom?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  copiedFromUserId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  optionParameters?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  public?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  thumbnailUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timesCopied?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['DesignType'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DesignTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DesignType'] = ResolversParentTypes['DesignType']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createNewDesign?: Resolver<Maybe<ResolversTypes['Design']>, ParentType, ContextType, RequireFields<MutationCreateNewDesignArgs, 'name' | 'optionParameters' | 'typeId'>>;
  createNewUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateNewUserArgs, 'email' | 'firebaseId' | 'userName'>>;
  incrementTimesCopied?: Resolver<Maybe<ResolversTypes['Design']>, ParentType, ContextType, RequireFields<MutationIncrementTimesCopiedArgs, 'id'>>;
  updateDesign?: Resolver<Maybe<ResolversTypes['Design']>, ParentType, ContextType, RequireFields<MutationUpdateDesignArgs, 'id'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationUpdateUserArgs>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getDesignById?: Resolver<Maybe<ResolversTypes['Design']>, ParentType, ContextType, RequireFields<QueryGetDesignByIdArgs, 'id'>>;
  getDesignTypes?: Resolver<Array<Maybe<ResolversTypes['DesignType']>>, ParentType, ContextType>;
  getPublicDesigns?: Resolver<Maybe<Array<Maybe<ResolversTypes['Design']>>>, ParentType, ContextType, Partial<QueryGetPublicDesignsArgs>>;
  getUserByFirebaseId?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getUserById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  designs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Design']>>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firebaseId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Design?: DesignResolvers<ContextType>;
  DesignType?: DesignTypeResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

