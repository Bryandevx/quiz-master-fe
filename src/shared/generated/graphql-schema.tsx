import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Answer = {
  __typename?: 'Answer';
  id?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type AnswerCreateInput = {
  text: Scalars['String'];
};

export type AnswerCreateNestedOneWithoutCorrectAnswerQuestionsInput = {
  create: AnswerCreateInput;
};

export type AnswerCreateNestedOneWithoutOptionAnswerQuestionsInput = {
  connect?: InputMaybe<AnswerWhereUniqueInput>;
  create?: InputMaybe<AnswerCreateInput>;
};

export type AnswerWhereUniqueInput = {
  id?: InputMaybe<Scalars['Float']>;
  uuid: Scalars['String'];
};

export enum Language {
  English = 'ENGLISH',
  Spanish = 'SPANISH'
}

export enum Level {
  Advanced = 'ADVANCED',
  Beginner = 'BEGINNER',
  Medium = 'MEDIUM'
}

export type LoginOutput = {
  __typename?: 'LoginOutput';
  access_token: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  user: User;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnswer: Answer;
  createQuestion: Question;
  createTest: Test;
  createUser: User;
  login: LoginOutput;
  signup: User;
};


export type MutationCreateAnswerArgs = {
  data: AnswerCreateInput;
};


export type MutationCreateQuestionArgs = {
  data: QuestionCreateInput;
};


export type MutationCreateTestArgs = {
  data: TestCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationLoginArgs = {
  data: LoginUserInput;
};


export type MutationSignupArgs = {
  data: SignUpInput;
};

export enum OrderByArg {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Query = {
  __typename?: 'Query';
  question?: Maybe<Question>;
  tests: Array<Test>;
  user?: Maybe<User>;
};


export type QueryQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type QueryTestsArgs = {
  cursor?: InputMaybe<TestWhereUniqueInput>;
  orderBy?: InputMaybe<TestOrderByInput>;
  search?: InputMaybe<SearchInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TestWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Question = {
  __typename?: 'Question';
  id?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type QuestionAnswerCreateNestedManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<QuestionAnswerWhereUniqueInput>>;
  create?: InputMaybe<Array<QuestionAnswerCreateWithoutQuestionInput>>;
};

export type QuestionAnswerCreateWithoutQuestionInput = {
  answer: AnswerCreateNestedOneWithoutOptionAnswerQuestionsInput;
};

export type QuestionAnswerWhereUniqueInput = {
  uuid: Scalars['String'];
};

export type QuestionCreateInput = {
  correctAnswer: AnswerCreateNestedOneWithoutCorrectAnswerQuestionsInput;
  text: Scalars['String'];
};

export type QuestionCreateWithoutTestsInput = {
  answers: QuestionAnswerCreateNestedManyWithoutQuestionInput;
  correctAnswer: AnswerCreateNestedOneWithoutCorrectAnswerQuestionsInput;
  text: Scalars['String'];
};

export type QuestionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Float']>;
  text?: InputMaybe<Scalars['String']>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SearchInput = {
  value: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export enum Status {
  Active = 'ACTIVE',
  Deleted = 'DELETED'
}

export type Test = {
  __typename?: 'Test';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Level>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type TestCreateInput = {
  description: Scalars['String'];
  level: Level;
  name: Scalars['String'];
  questions: TestQuestionCreateNestedManyWithoutTestInput;
  status: Status;
};

export type TestOrderByInput = {
  createdAt?: InputMaybe<OrderByArg>;
  description?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<OrderByArg>;
  updatedAt?: InputMaybe<OrderByArg>;
  uuid?: InputMaybe<OrderByArg>;
};

export type TestQuestionCreateNestedManyWithoutTestInput = {
  create: Array<TestQuestionCreateWithoutTestInput>;
};

export type TestQuestionCreateWithoutTestInput = {
  question: QuestionCreateWithoutTestsInput;
};

export type TestWhereInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type TestWhereUniqueInput = {
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  language?: Maybe<Language>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  type: Role;
  username: Scalars['String'];
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type GetTestsQueryVariables = Exact<{
  cursor?: InputMaybe<TestWhereUniqueInput>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
  order: TestOrderByInput;
  where?: InputMaybe<TestWhereInput>;
  search?: InputMaybe<SearchInput>;
}>;


export type GetTestsQuery = { __typename?: 'Query', payload: Array<{ __typename?: 'Test', uuid?: string | null, name?: string | null, description?: string | null }> };

export type CreateTestMutationVariables = Exact<{
  data: TestCreateInput;
}>;


export type CreateTestMutation = { __typename?: 'Mutation', createTest: { __typename?: 'Test', id?: number | null, uuid?: string | null, name?: string | null } };

export type LoginMutationVariables = Exact<{
  data: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', access_token: string, expiresAt: any, user: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, username?: string | null, name?: string | null, type?: Role | null, lastName?: string | null, createdAt?: any | null, updatedAt?: any | null } } };

export type SignupMutationVariables = Exact<{
  data: SignUpInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id?: number | null, uuid?: string | null, email?: string | null, username?: string | null, name?: string | null, type?: Role | null, firstName?: string | null, lastName?: string | null, createdAt?: any | null, updatedAt?: any | null } };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', uuid?: string | null, username?: string | null, email?: string | null, language?: Language | null } | null };


export const GetTestsDocument = gql`
    query getTests($cursor: TestWhereUniqueInput, $skip: Int!, $take: Int!, $order: TestOrderByInput!, $where: TestWhereInput, $search: SearchInput) {
  payload: tests(
    cursor: $cursor
    skip: $skip
    take: $take
    orderBy: $order
    where: $where
    search: $search
  ) {
    uuid
    name
    description
  }
}
    `;

/**
 * __useGetTestsQuery__
 *
 * To run a query within a React component, call `useGetTestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTestsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      order: // value for 'order'
 *      where: // value for 'where'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetTestsQuery(baseOptions: Apollo.QueryHookOptions<GetTestsQuery, GetTestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTestsQuery, GetTestsQueryVariables>(GetTestsDocument, options);
      }
export function useGetTestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTestsQuery, GetTestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTestsQuery, GetTestsQueryVariables>(GetTestsDocument, options);
        }
export type GetTestsQueryHookResult = ReturnType<typeof useGetTestsQuery>;
export type GetTestsLazyQueryHookResult = ReturnType<typeof useGetTestsLazyQuery>;
export type GetTestsQueryResult = Apollo.QueryResult<GetTestsQuery, GetTestsQueryVariables>;
export const CreateTestDocument = gql`
    mutation createTest($data: TestCreateInput!) {
  createTest(data: $data) {
    id
    uuid
    name
  }
}
    `;
export type CreateTestMutationFn = Apollo.MutationFunction<CreateTestMutation, CreateTestMutationVariables>;

/**
 * __useCreateTestMutation__
 *
 * To run a mutation, you first call `useCreateTestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestMutation, { data, loading, error }] = useCreateTestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTestMutation(baseOptions?: Apollo.MutationHookOptions<CreateTestMutation, CreateTestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTestMutation, CreateTestMutationVariables>(CreateTestDocument, options);
      }
export type CreateTestMutationHookResult = ReturnType<typeof useCreateTestMutation>;
export type CreateTestMutationResult = Apollo.MutationResult<CreateTestMutation>;
export type CreateTestMutationOptions = Apollo.BaseMutationOptions<CreateTestMutation, CreateTestMutationVariables>;
export const LoginDocument = gql`
    mutation login($data: LoginUserInput!) {
  login(data: $data) {
    access_token
    expiresAt
    user {
      id
      uuid
      email
      username
      name
      type
      lastName
      createdAt
      updatedAt
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation signup($data: SignUpInput!) {
  signup(data: $data) {
    id
    uuid
    email
    username
    name
    type
    firstName
    lastName
    createdAt
    updatedAt
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UserDocument = gql`
    query user($where: UserWhereUniqueInput!) {
  user(where: $where) {
    uuid
    username
    email
    language
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;