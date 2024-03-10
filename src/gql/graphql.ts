/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AggregateCharacter = {
  __typename?: 'AggregateCharacter';
  _avg?: Maybe<CharacterAvgAggregate>;
  _count?: Maybe<CharacterCountAggregate>;
  _max?: Maybe<CharacterMaxAggregate>;
  _min?: Maybe<CharacterMinAggregate>;
  _sum?: Maybe<CharacterSumAggregate>;
};

export type AggregateLink = {
  __typename?: 'AggregateLink';
  _avg?: Maybe<LinkAvgAggregate>;
  _count?: Maybe<LinkCountAggregate>;
  _max?: Maybe<LinkMaxAggregate>;
  _min?: Maybe<LinkMinAggregate>;
  _sum?: Maybe<LinkSumAggregate>;
};

export type AggregateLinklist = {
  __typename?: 'AggregateLinklist';
  _avg?: Maybe<LinklistAvgAggregate>;
  _count?: Maybe<LinklistCountAggregate>;
  _max?: Maybe<LinklistMaxAggregate>;
  _min?: Maybe<LinklistMinAggregate>;
  _sum?: Maybe<LinklistSumAggregate>;
};

export type AggregateMintedNote = {
  __typename?: 'AggregateMintedNote';
  _avg?: Maybe<MintedNoteAvgAggregate>;
  _count?: Maybe<MintedNoteCountAggregate>;
  _max?: Maybe<MintedNoteMaxAggregate>;
  _min?: Maybe<MintedNoteMinAggregate>;
  _sum?: Maybe<MintedNoteSumAggregate>;
};

export type AggregateNote = {
  __typename?: 'AggregateNote';
  _avg?: Maybe<NoteAvgAggregate>;
  _count?: Maybe<NoteCountAggregate>;
  _max?: Maybe<NoteMaxAggregate>;
  _min?: Maybe<NoteMinAggregate>;
  _sum?: Maybe<NoteSumAggregate>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Character = {
  __typename?: 'Character';
  _count: CharacterCount;
  blockNumber: Scalars['Int']['output'];
  characterId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  fromAddress: Scalars['String']['output'];
  /** @DtoEntityHidden */
  fromLinks?: Maybe<Array<Link>>;
  /** @DtoEntityHidden */
  fromMintedNotes?: Maybe<Array<MintedNote>>;
  /** @DtoEntityHidden */
  fromNestedNotes?: Maybe<Array<Note>>;
  /** @DtoEntityHidden */
  fromNotes?: Maybe<Array<Note>>;
  handle: Scalars['String']['output'];
  /** @DtoEntityHidden */
  linklists?: Maybe<Array<Linklist>>;
  logIndex: Scalars['Int']['output'];
  metadata?: Maybe<Metadata>;
  /** @DtoEntityHidden */
  notes?: Maybe<Array<Note>>;
  /** @DtoEntityHidden */
  notifications?: Maybe<Array<Notification>>;
  operator: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  primary: Scalars['Boolean']['output'];
  /** @DtoEntityHidden */
  receivedTipConfigs?: Maybe<Array<TipConfig>>;
  /** @DtoEntityHidden */
  receivedTips?: Maybe<Array<Tip>>;
  /** @DtoEntityHidden */
  sentTips?: Maybe<Array<Tip>>;
  /** social token address */
  socialToken?: Maybe<Scalars['String']['output']>;
  /** @DtoEntityHidden */
  stat?: Maybe<Array<CharacterStat>>;
  /** @DtoEntityHidden */
  tipConfigs?: Maybe<Array<TipConfig>>;
  /** @DtoEntityHidden */
  toLinkModules?: Maybe<Array<LinkModule>>;
  /** @DtoEntityHidden */
  toLinks?: Maybe<Array<Link>>;
  /** @DtoEntityHidden */
  toMintModules?: Maybe<Array<MintModule>>;
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};

export type CharacterAvgAggregate = {
  __typename?: 'CharacterAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  characterId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type CharacterAvgAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  characterId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CharacterAvgOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
};

export type CharacterCount = {
  __typename?: 'CharacterCount';
  feeds: Scalars['Int']['output'];
  fromLinks: Scalars['Int']['output'];
  fromMintedNotes: Scalars['Int']['output'];
  fromNestedNotes: Scalars['Int']['output'];
  fromNotes: Scalars['Int']['output'];
  linklists: Scalars['Int']['output'];
  notes: Scalars['Int']['output'];
  notifications: Scalars['Int']['output'];
  receivedTipConfigs: Scalars['Int']['output'];
  receivedTips: Scalars['Int']['output'];
  sentTips: Scalars['Int']['output'];
  stat: Scalars['Int']['output'];
  tipConfigs: Scalars['Int']['output'];
  toLinkModules: Scalars['Int']['output'];
  toLinks: Scalars['Int']['output'];
  toMintModules: Scalars['Int']['output'];
};

export type CharacterCountAggregate = {
  __typename?: 'CharacterCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  fromAddress: Scalars['Int']['output'];
  handle: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  owner: Scalars['Int']['output'];
  primary: Scalars['Int']['output'];
  socialToken: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
  uri: Scalars['Int']['output'];
};

export type CharacterCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  characterId?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Boolean']['input']>;
  fromAddress?: InputMaybe<Scalars['Boolean']['input']>;
  handle?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  primary?: InputMaybe<Scalars['Boolean']['input']>;
  socialToken?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CharacterCountOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  fromAddress?: InputMaybe<SortOrder>;
  handle?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  primary?: InputMaybe<SortOrder>;
  socialToken?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrder>;
};

export type CharacterListRelationFilter = {
  every?: InputMaybe<CharacterWhereInput>;
  none?: InputMaybe<CharacterWhereInput>;
  some?: InputMaybe<CharacterWhereInput>;
};

export type CharacterMaxAggregate = {
  __typename?: 'CharacterMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  handle?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Scalars['Boolean']['output']>;
  socialToken?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type CharacterMaxAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  characterId?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Boolean']['input']>;
  fromAddress?: InputMaybe<Scalars['Boolean']['input']>;
  handle?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  primary?: InputMaybe<Scalars['Boolean']['input']>;
  socialToken?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CharacterMaxOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  fromAddress?: InputMaybe<SortOrder>;
  handle?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  primary?: InputMaybe<SortOrder>;
  socialToken?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrder>;
};

export type CharacterMinAggregate = {
  __typename?: 'CharacterMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  handle?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Scalars['Boolean']['output']>;
  socialToken?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type CharacterMinAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  characterId?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Boolean']['input']>;
  fromAddress?: InputMaybe<Scalars['Boolean']['input']>;
  handle?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  primary?: InputMaybe<Scalars['Boolean']['input']>;
  socialToken?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CharacterMinOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  fromAddress?: InputMaybe<SortOrder>;
  handle?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  primary?: InputMaybe<SortOrder>;
  socialToken?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrder>;
};

export type CharacterOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CharacterOrderByRelevanceFieldEnum {
  FromAddress = 'fromAddress',
  Handle = 'handle',
  Operator = 'operator',
  Owner = 'owner',
  SocialToken = 'socialToken',
  TransactionHash = 'transactionHash',
  UpdatedTransactionHash = 'updatedTransactionHash',
  Uri = 'uri'
}

export type CharacterOrderByRelevanceInput = {
  fields: Array<CharacterOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type CharacterOrderByWithAggregationInput = {
  _avg?: InputMaybe<CharacterAvgOrderByAggregateInput>;
  _count?: InputMaybe<CharacterCountOrderByAggregateInput>;
  _max?: InputMaybe<CharacterMaxOrderByAggregateInput>;
  _min?: InputMaybe<CharacterMinOrderByAggregateInput>;
  _sum?: InputMaybe<CharacterSumOrderByAggregateInput>;
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  fromAddress?: InputMaybe<SortOrder>;
  handle?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  primary?: InputMaybe<SortOrder>;
  socialToken?: InputMaybe<SortOrderInput>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrderInput>;
};

export type CharacterOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<CharacterOrderByRelevanceInput>;
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  feeds?: InputMaybe<FeedOrderByRelationAggregateInput>;
  fromAddress?: InputMaybe<SortOrder>;
  fromLinks?: InputMaybe<LinkOrderByRelationAggregateInput>;
  fromMintedNotes?: InputMaybe<MintedNoteOrderByRelationAggregateInput>;
  fromNestedNotes?: InputMaybe<NoteOrderByRelationAggregateInput>;
  fromNotes?: InputMaybe<NoteOrderByRelationAggregateInput>;
  handle?: InputMaybe<SortOrder>;
  linklists?: InputMaybe<LinklistOrderByRelationAggregateInput>;
  logIndex?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<MetadataOrderByWithRelationAndSearchRelevanceInput>;
  notes?: InputMaybe<NoteOrderByRelationAggregateInput>;
  notifications?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  primary?: InputMaybe<SortOrder>;
  receivedTipConfigs?: InputMaybe<TipConfigOrderByRelationAggregateInput>;
  receivedTips?: InputMaybe<TipOrderByRelationAggregateInput>;
  sentTips?: InputMaybe<TipOrderByRelationAggregateInput>;
  socialToken?: InputMaybe<SortOrderInput>;
  stat?: InputMaybe<CharacterStatOrderByRelationAggregateInput>;
  tipConfigs?: InputMaybe<TipConfigOrderByRelationAggregateInput>;
  toLinkModules?: InputMaybe<LinkModuleOrderByRelationAggregateInput>;
  toLinks?: InputMaybe<LinkOrderByRelationAggregateInput>;
  toMintModules?: InputMaybe<MintModuleOrderByRelationAggregateInput>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrderInput>;
};

export enum CharacterScalarFieldEnum {
  BlockNumber = 'blockNumber',
  CharacterId = 'characterId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  FromAddress = 'fromAddress',
  Handle = 'handle',
  LogIndex = 'logIndex',
  Operator = 'operator',
  Owner = 'owner',
  Primary = 'primary',
  SocialToken = 'socialToken',
  TransactionHash = 'transactionHash',
  UpdatedAt = 'updatedAt',
  UpdatedBlockNumber = 'updatedBlockNumber',
  UpdatedLogIndex = 'updatedLogIndex',
  UpdatedTransactionHash = 'updatedTransactionHash',
  Uri = 'uri'
}

export type CharacterScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CharacterScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CharacterScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CharacterScalarWhereWithAggregatesInput>>;
  blockNumber?: InputMaybe<IntWithAggregatesFilter>;
  characterId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  fromAddress?: InputMaybe<StringWithAggregatesFilter>;
  handle?: InputMaybe<StringWithAggregatesFilter>;
  logIndex?: InputMaybe<IntWithAggregatesFilter>;
  operator?: InputMaybe<StringWithAggregatesFilter>;
  owner?: InputMaybe<StringWithAggregatesFilter>;
  primary?: InputMaybe<BoolWithAggregatesFilter>;
  socialToken?: InputMaybe<StringNullableWithAggregatesFilter>;
  transactionHash?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  updatedBlockNumber?: InputMaybe<IntWithAggregatesFilter>;
  updatedLogIndex?: InputMaybe<IntWithAggregatesFilter>;
  updatedTransactionHash?: InputMaybe<StringWithAggregatesFilter>;
  uri?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type CharacterStat = {
  __typename?: 'CharacterStat';
  /** @DtoEntityHidden */
  character: Character;
  characterId: Scalars['ID']['output'];
  viewCount: Scalars['Int']['output'];
  viewDetailCount: Scalars['Int']['output'];
  viewInListCount: Scalars['Int']['output'];
  viewNoteCount: Scalars['Int']['output'];
};

export type CharacterStatAvgAggregate = {
  __typename?: 'CharacterStatAvgAggregate';
  characterId?: Maybe<Scalars['Float']['output']>;
  viewCount?: Maybe<Scalars['Float']['output']>;
  viewDetailCount?: Maybe<Scalars['Float']['output']>;
  viewInListCount?: Maybe<Scalars['Float']['output']>;
  viewNoteCount?: Maybe<Scalars['Float']['output']>;
};

export type CharacterStatCountAggregate = {
  __typename?: 'CharacterStatCountAggregate';
  _all: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  viewCount: Scalars['Int']['output'];
  viewDetailCount: Scalars['Int']['output'];
  viewInListCount: Scalars['Int']['output'];
  viewNoteCount: Scalars['Int']['output'];
};

export type CharacterStatListRelationFilter = {
  every?: InputMaybe<CharacterStatWhereInput>;
  none?: InputMaybe<CharacterStatWhereInput>;
  some?: InputMaybe<CharacterStatWhereInput>;
};

export type CharacterStatMaxAggregate = {
  __typename?: 'CharacterStatMaxAggregate';
  characterId?: Maybe<Scalars['Int']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
  viewDetailCount?: Maybe<Scalars['Int']['output']>;
  viewInListCount?: Maybe<Scalars['Int']['output']>;
  viewNoteCount?: Maybe<Scalars['Int']['output']>;
};

export type CharacterStatMinAggregate = {
  __typename?: 'CharacterStatMinAggregate';
  characterId?: Maybe<Scalars['Int']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
  viewDetailCount?: Maybe<Scalars['Int']['output']>;
  viewInListCount?: Maybe<Scalars['Int']['output']>;
  viewNoteCount?: Maybe<Scalars['Int']['output']>;
};

export type CharacterStatOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CharacterStatSumAggregate = {
  __typename?: 'CharacterStatSumAggregate';
  characterId?: Maybe<Scalars['Int']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
  viewDetailCount?: Maybe<Scalars['Int']['output']>;
  viewInListCount?: Maybe<Scalars['Int']['output']>;
  viewNoteCount?: Maybe<Scalars['Int']['output']>;
};

export type CharacterStatWhereInput = {
  AND?: InputMaybe<Array<CharacterStatWhereInput>>;
  NOT?: InputMaybe<Array<CharacterStatWhereInput>>;
  OR?: InputMaybe<Array<CharacterStatWhereInput>>;
  character?: InputMaybe<CharacterWhereInput>;
  characterId?: InputMaybe<IntFilter>;
  viewCount?: InputMaybe<IntFilter>;
  viewDetailCount?: InputMaybe<IntFilter>;
  viewInListCount?: InputMaybe<IntFilter>;
  viewNoteCount?: InputMaybe<IntFilter>;
};

export type CharacterSumAggregate = {
  __typename?: 'CharacterSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type CharacterSumAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  characterId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CharacterSumOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
};

export type CharacterWhereInput = {
  AND?: InputMaybe<Array<CharacterWhereInput>>;
  NOT?: InputMaybe<Array<CharacterWhereInput>>;
  OR?: InputMaybe<Array<CharacterWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  characterId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  fromAddress?: InputMaybe<StringFilter>;
  fromLinks?: InputMaybe<LinkListRelationFilter>;
  fromMintedNotes?: InputMaybe<MintedNoteListRelationFilter>;
  fromNestedNotes?: InputMaybe<NoteListRelationFilter>;
  fromNotes?: InputMaybe<NoteListRelationFilter>;
  handle?: InputMaybe<StringFilter>;
  linklists?: InputMaybe<LinklistListRelationFilter>;
  logIndex?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<MetadataWhereInput>;
  notes?: InputMaybe<NoteListRelationFilter>;
  notifications?: InputMaybe<NotificationListRelationFilter>;
  operator?: InputMaybe<StringFilter>;
  owner?: InputMaybe<StringFilter>;
  primary?: InputMaybe<BoolFilter>;
  receivedTipConfigs?: InputMaybe<TipConfigListRelationFilter>;
  receivedTips?: InputMaybe<TipListRelationFilter>;
  sentTips?: InputMaybe<TipListRelationFilter>;
  socialToken?: InputMaybe<StringNullableFilter>;
  stat?: InputMaybe<CharacterStatListRelationFilter>;
  tipConfigs?: InputMaybe<TipConfigListRelationFilter>;
  toLinkModules?: InputMaybe<LinkModuleListRelationFilter>;
  toLinks?: InputMaybe<LinkListRelationFilter>;
  toMintModules?: InputMaybe<MintModuleListRelationFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
  uri?: InputMaybe<StringNullableFilter>;
};

export type CharacterWhereUniqueInput = {
  characterId?: InputMaybe<Scalars['Int']['input']>;
};

export type CsbTransferAvgAggregate = {
  __typename?: 'CsbTransferAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
};

export type CsbTransferCountAggregate = {
  __typename?: 'CsbTransferCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  from: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  to: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
};

export type CsbTransferMaxAggregate = {
  __typename?: 'CsbTransferMaxAggregate';
  amount?: Maybe<Scalars['String']['output']>;
  blockNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type CsbTransferMinAggregate = {
  __typename?: 'CsbTransferMinAggregate';
  amount?: Maybe<Scalars['String']['output']>;
  blockNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type CsbTransferSumAggregate = {
  __typename?: 'CsbTransferSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumFeedTypeFilter = {
  equals?: InputMaybe<FeedType>;
  in?: InputMaybe<Array<FeedType>>;
  not?: InputMaybe<NestedEnumFeedTypeFilter>;
  notIn?: InputMaybe<Array<FeedType>>;
};

export type EnumLinkItemTypeFilter = {
  equals?: InputMaybe<LinkItemType>;
  in?: InputMaybe<Array<LinkItemType>>;
  not?: InputMaybe<NestedEnumLinkItemTypeFilter>;
  notIn?: InputMaybe<Array<LinkItemType>>;
};

export type EnumLinkItemTypeNullableFilter = {
  equals?: InputMaybe<LinkItemType>;
  in?: InputMaybe<Array<LinkItemType>>;
  not?: InputMaybe<NestedEnumLinkItemTypeNullableFilter>;
  notIn?: InputMaybe<Array<LinkItemType>>;
};

export type EnumLinkItemTypeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumLinkItemTypeNullableFilter>;
  _min?: InputMaybe<NestedEnumLinkItemTypeNullableFilter>;
  equals?: InputMaybe<LinkItemType>;
  in?: InputMaybe<Array<LinkItemType>>;
  not?: InputMaybe<NestedEnumLinkItemTypeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<LinkItemType>>;
};

export type EnumLinkItemTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumLinkItemTypeFilter>;
  _min?: InputMaybe<NestedEnumLinkItemTypeFilter>;
  equals?: InputMaybe<LinkItemType>;
  in?: InputMaybe<Array<LinkItemType>>;
  not?: InputMaybe<NestedEnumLinkItemTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<LinkItemType>>;
};

export type EnumLinkModuleTargetItemTypeFilter = {
  equals?: InputMaybe<LinkModuleTargetItemType>;
  in?: InputMaybe<Array<LinkModuleTargetItemType>>;
  not?: InputMaybe<NestedEnumLinkModuleTargetItemTypeFilter>;
  notIn?: InputMaybe<Array<LinkModuleTargetItemType>>;
};

export type EnumLinkModuleTargetItemTypeNullableFilter = {
  equals?: InputMaybe<LinkModuleTargetItemType>;
  in?: InputMaybe<Array<LinkModuleTargetItemType>>;
  not?: InputMaybe<NestedEnumLinkModuleTargetItemTypeNullableFilter>;
  notIn?: InputMaybe<Array<LinkModuleTargetItemType>>;
};

export type EnumMetadataStatusFilter = {
  equals?: InputMaybe<MetadataStatus>;
  in?: InputMaybe<Array<MetadataStatus>>;
  not?: InputMaybe<NestedEnumMetadataStatusFilter>;
  notIn?: InputMaybe<Array<MetadataStatus>>;
};

export type EnumMetadataTypeNullableFilter = {
  equals?: InputMaybe<MetadataType>;
  in?: InputMaybe<Array<MetadataType>>;
  not?: InputMaybe<NestedEnumMetadataTypeNullableFilter>;
  notIn?: InputMaybe<Array<MetadataType>>;
};

export type EnumMintModuleTargetItemTypeFilter = {
  equals?: InputMaybe<MintModuleTargetItemType>;
  in?: InputMaybe<Array<MintModuleTargetItemType>>;
  not?: InputMaybe<NestedEnumMintModuleTargetItemTypeFilter>;
  notIn?: InputMaybe<Array<MintModuleTargetItemType>>;
};

export type EnumMintModuleTargetItemTypeNullableFilter = {
  equals?: InputMaybe<MintModuleTargetItemType>;
  in?: InputMaybe<Array<MintModuleTargetItemType>>;
  not?: InputMaybe<NestedEnumMintModuleTargetItemTypeNullableFilter>;
  notIn?: InputMaybe<Array<MintModuleTargetItemType>>;
};

export type EnumNotificationTypeFilter = {
  equals?: InputMaybe<NotificationType>;
  in?: InputMaybe<Array<NotificationType>>;
  not?: InputMaybe<NestedEnumNotificationTypeFilter>;
  notIn?: InputMaybe<Array<NotificationType>>;
};

export type EventPointAvgAggregate = {
  __typename?: 'EventPointAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
};

export type EventPointCountAggregate = {
  __typename?: 'EventPointCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  eventName: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
};

export type EventPointMaxAggregate = {
  __typename?: 'EventPointMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  eventName?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type EventPointMinAggregate = {
  __typename?: 'EventPointMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  eventName?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type EventPointSumAggregate = {
  __typename?: 'EventPointSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
};

export type Feed = {
  __typename?: 'Feed';
  _count: FeedCount;
  blockNumber: Scalars['Int']['output'];
  character?: Maybe<Character>;
  characterId?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** if feedtype is Character related */
  historyCharacter?: Maybe<HistoryCharacter>;
  historyLink?: Maybe<HistoryLink>;
  historyLinkModule?: Maybe<HistoryLinkModule>;
  /** if feedtype is Link related */
  historyLinklist?: Maybe<HistoryLinklist>;
  historyMintModule?: Maybe<HistoryMintModule>;
  historyMintedNote?: Maybe<HistoryMintedNote>;
  /** if feedtype is Note related */
  historyNote?: Maybe<HistoryNote>;
  link?: Maybe<Link>;
  linkModule?: Maybe<LinkModule>;
  /** if feedtype is LinkModule */
  linkModuleTargetItemType?: Maybe<LinkModuleTargetItemType>;
  linkValue?: Maybe<Scalars['String']['output']>;
  linklist?: Maybe<Linklist>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex: Scalars['Int']['output'];
  mintModule?: Maybe<MintModule>;
  /** if feedtype is MintModule related */
  mintModuleTargetItemType?: Maybe<MintModuleTargetItemType>;
  mintedNote?: Maybe<MintedNote>;
  note?: Maybe<Note>;
  noteId?: Maybe<Scalars['Int']['output']>;
  /** @DtoEntityHidden */
  notifications?: Maybe<Array<Notification>>;
  /** basic properties */
  owner: Scalars['String']['output'];
  /** if feedtype is Tip related */
  tip?: Maybe<Tip>;
  tipConfig?: Maybe<TipConfig>;
  /** if feedtype is TipConfig related */
  tipConfigId?: Maybe<Scalars['Int']['output']>;
  tokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash: Scalars['String']['output'];
  type: FeedType;
  updatedAt: Scalars['DateTime']['output'];
};

export type FeedAvgAggregate = {
  __typename?: 'FeedAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  characterId?: Maybe<Scalars['Float']['output']>;
  linklistId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  noteId?: Maybe<Scalars['Float']['output']>;
  tipConfigId?: Maybe<Scalars['Float']['output']>;
  tokenId?: Maybe<Scalars['Float']['output']>;
};

export type FeedCount = {
  __typename?: 'FeedCount';
  notifications: Scalars['Int']['output'];
};

export type FeedCountAggregate = {
  __typename?: 'FeedCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  contractAddress: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  linkModuleTargetItemType: Scalars['Int']['output'];
  linkValue: Scalars['Int']['output'];
  linklistId: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  mintModuleTargetItemType: Scalars['Int']['output'];
  noteId: Scalars['Int']['output'];
  owner: Scalars['Int']['output'];
  tipConfigId: Scalars['Int']['output'];
  tokenId: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type FeedListRelationFilter = {
  every?: InputMaybe<FeedWhereInput>;
  none?: InputMaybe<FeedWhereInput>;
  some?: InputMaybe<FeedWhereInput>;
};

export type FeedMaxAggregate = {
  __typename?: 'FeedMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  linkModuleTargetItemType?: Maybe<LinkModuleTargetItemType>;
  linkValue?: Maybe<Scalars['String']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  mintModuleTargetItemType?: Maybe<MintModuleTargetItemType>;
  noteId?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  tipConfigId?: Maybe<Scalars['Int']['output']>;
  tokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FeedType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FeedMinAggregate = {
  __typename?: 'FeedMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  linkModuleTargetItemType?: Maybe<LinkModuleTargetItemType>;
  linkValue?: Maybe<Scalars['String']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  mintModuleTargetItemType?: Maybe<MintModuleTargetItemType>;
  noteId?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  tipConfigId?: Maybe<Scalars['Int']['output']>;
  tokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FeedType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FeedOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FeedSumAggregate = {
  __typename?: 'FeedSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  tipConfigId?: Maybe<Scalars['Int']['output']>;
  tokenId?: Maybe<Scalars['Int']['output']>;
};

export enum FeedType {
  AddOperator = 'ADD_OPERATOR',
  CreateCharacter = 'CREATE_CHARACTER',
  CreateLinklist = 'CREATE_LINKLIST',
  DeleteNote = 'DELETE_NOTE',
  Link = 'LINK',
  LockNote = 'LOCK_NOTE',
  MintNote = 'MINT_NOTE',
  PostNote = 'POST_NOTE',
  PostNoteForAddress = 'POST_NOTE_FOR_ADDRESS',
  PostNoteForAnyUri = 'POST_NOTE_FOR_ANY_URI',
  PostNoteForCharacter = 'POST_NOTE_FOR_CHARACTER',
  PostNoteForErc721 = 'POST_NOTE_FOR_ERC721',
  PostNoteForLinklist = 'POST_NOTE_FOR_LINKLIST',
  PostNoteForNote = 'POST_NOTE_FOR_NOTE',
  RemoveOperator = 'REMOVE_OPERATOR',
  SetLinkModule = 'SET_LINK_MODULE',
  SetMintModule = 'SET_MINT_MODULE',
  SetTipConfig = 'SET_TIP_CONFIG',
  TipCharacter = 'TIP_CHARACTER',
  TransferCharacter = 'TRANSFER_CHARACTER',
  TransferLinklist = 'TRANSFER_LINKLIST',
  TransferMintedNote = 'TRANSFER_MINTED_NOTE',
  Unlink = 'UNLINK',
  UpdateCharacterHandle = 'UPDATE_CHARACTER_HANDLE',
  UpdateCharacterMetadata = 'UPDATE_CHARACTER_METADATA',
  UpdateLinklist = 'UPDATE_LINKLIST',
  UpdateNote = 'UPDATE_NOTE',
  UpdatePrimaryCharacter = 'UPDATE_PRIMARY_CHARACTER'
}

export type FeedWhereInput = {
  AND?: InputMaybe<Array<FeedWhereInput>>;
  NOT?: InputMaybe<Array<FeedWhereInput>>;
  OR?: InputMaybe<Array<FeedWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  character?: InputMaybe<CharacterWhereInput>;
  characterId?: InputMaybe<IntNullableFilter>;
  contractAddress?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  historyCharacter?: InputMaybe<HistoryCharacterWhereInput>;
  historyLink?: InputMaybe<HistoryLinkWhereInput>;
  historyLinkModule?: InputMaybe<HistoryLinkModuleWhereInput>;
  historyLinklist?: InputMaybe<HistoryLinklistWhereInput>;
  historyMintModule?: InputMaybe<HistoryMintModuleWhereInput>;
  historyMintedNote?: InputMaybe<HistoryMintedNoteWhereInput>;
  historyNote?: InputMaybe<HistoryNoteWhereInput>;
  link?: InputMaybe<LinkWhereInput>;
  linkModule?: InputMaybe<LinkModuleWhereInput>;
  linkModuleTargetItemType?: InputMaybe<EnumLinkModuleTargetItemTypeNullableFilter>;
  linkValue?: InputMaybe<StringNullableFilter>;
  linklist?: InputMaybe<LinklistWhereInput>;
  linklistId?: InputMaybe<IntNullableFilter>;
  logIndex?: InputMaybe<IntFilter>;
  mintModule?: InputMaybe<MintModuleWhereInput>;
  mintModuleTargetItemType?: InputMaybe<EnumMintModuleTargetItemTypeNullableFilter>;
  mintedNote?: InputMaybe<MintedNoteWhereInput>;
  note?: InputMaybe<NoteWhereInput>;
  noteId?: InputMaybe<IntNullableFilter>;
  notifications?: InputMaybe<NotificationListRelationFilter>;
  owner?: InputMaybe<StringFilter>;
  tip?: InputMaybe<TipWhereInput>;
  tipConfig?: InputMaybe<TipConfigWhereInput>;
  tipConfigId?: InputMaybe<IntNullableFilter>;
  tokenId?: InputMaybe<IntNullableFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumFeedTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type HistoryCharacter = {
  __typename?: 'HistoryCharacter';
  _count: HistoryCharacterCount;
  blockNumber: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  fromAddress: Scalars['String']['output'];
  handle: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  metadata?: Maybe<Metadata>;
  operator: Scalars['String']['output'];
  operators?: Maybe<Array<Scalars['String']['output']>>;
  owner: Scalars['String']['output'];
  primary: Scalars['Boolean']['output'];
  /** social token address */
  socialToken?: Maybe<Scalars['String']['output']>;
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};

export type HistoryCharacterAvgAggregate = {
  __typename?: 'HistoryCharacterAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  characterId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type HistoryCharacterCount = {
  __typename?: 'HistoryCharacterCount';
  feeds: Scalars['Int']['output'];
};

export type HistoryCharacterCountAggregate = {
  __typename?: 'HistoryCharacterCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  fromAddress: Scalars['Int']['output'];
  handle: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  operators: Scalars['Int']['output'];
  owner: Scalars['Int']['output'];
  primary: Scalars['Int']['output'];
  socialToken: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
  uri: Scalars['Int']['output'];
};

export type HistoryCharacterListRelationFilter = {
  every?: InputMaybe<HistoryCharacterWhereInput>;
  none?: InputMaybe<HistoryCharacterWhereInput>;
  some?: InputMaybe<HistoryCharacterWhereInput>;
};

export type HistoryCharacterMaxAggregate = {
  __typename?: 'HistoryCharacterMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  handle?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Scalars['Boolean']['output']>;
  socialToken?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type HistoryCharacterMinAggregate = {
  __typename?: 'HistoryCharacterMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  handle?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  primary?: Maybe<Scalars['Boolean']['output']>;
  socialToken?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type HistoryCharacterOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type HistoryCharacterSumAggregate = {
  __typename?: 'HistoryCharacterSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type HistoryCharacterWhereInput = {
  AND?: InputMaybe<Array<HistoryCharacterWhereInput>>;
  NOT?: InputMaybe<Array<HistoryCharacterWhereInput>>;
  OR?: InputMaybe<Array<HistoryCharacterWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  characterId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  fromAddress?: InputMaybe<StringFilter>;
  handle?: InputMaybe<StringFilter>;
  logIndex?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<MetadataWhereInput>;
  operator?: InputMaybe<StringFilter>;
  operators?: InputMaybe<StringNullableListFilter>;
  owner?: InputMaybe<StringFilter>;
  primary?: InputMaybe<BoolFilter>;
  socialToken?: InputMaybe<StringNullableFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
  uri?: InputMaybe<StringNullableFilter>;
};

export type HistoryLink = {
  __typename?: 'HistoryLink';
  _count: HistoryLinkCount;
  blockNumber: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linkItemType: LinkItemType;
  linkType: Scalars['String']['output'];
  linkValue: Scalars['String']['output'];
  linklistId: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  /** if linkType is Address */
  toAddress?: Maybe<Scalars['String']['output']>;
  /** if linkType is Character or Note */
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  /** if linkType is ERC721 */
  toContractAddress?: Maybe<Scalars['String']['output']>;
  /** if linkType is Linklist */
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  /** if linkType is Note */
  toNoteId?: Maybe<Scalars['Int']['output']>;
  /** if linkType is ERC721 */
  toTokenId?: Maybe<Scalars['Int']['output']>;
  /** if linkType is AnyUri */
  toUri?: Maybe<Scalars['String']['output']>;
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
};

export type HistoryLinkAvgAggregate = {
  __typename?: 'HistoryLinkAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  fromCharacterId?: Maybe<Scalars['Float']['output']>;
  linklistId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  toCharacterId?: Maybe<Scalars['Float']['output']>;
  toLinklistId?: Maybe<Scalars['Float']['output']>;
  toNoteId?: Maybe<Scalars['Float']['output']>;
  toTokenId?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type HistoryLinkCount = {
  __typename?: 'HistoryLinkCount';
  feeds: Scalars['Int']['output'];
};

export type HistoryLinkCountAggregate = {
  __typename?: 'HistoryLinkCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  fromCharacterId: Scalars['Int']['output'];
  linkItemType: Scalars['Int']['output'];
  linkType: Scalars['Int']['output'];
  linkValue: Scalars['Int']['output'];
  linklistId: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  owner: Scalars['Int']['output'];
  toAddress: Scalars['Int']['output'];
  toCharacterId: Scalars['Int']['output'];
  toContractAddress: Scalars['Int']['output'];
  toLinklistId: Scalars['Int']['output'];
  toNoteId: Scalars['Int']['output'];
  toTokenId: Scalars['Int']['output'];
  toUri: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
};

export type HistoryLinkMaxAggregate = {
  __typename?: 'HistoryLinkMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linkItemType?: Maybe<LinkItemType>;
  linkType?: Maybe<Scalars['String']['output']>;
  linkValue?: Maybe<Scalars['String']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  toUri?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type HistoryLinkMinAggregate = {
  __typename?: 'HistoryLinkMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linkItemType?: Maybe<LinkItemType>;
  linkType?: Maybe<Scalars['String']['output']>;
  linkValue?: Maybe<Scalars['String']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  toUri?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type HistoryLinkModule = {
  __typename?: 'HistoryLinkModule';
  _count: HistoryLinkModuleCount;
  blockNumber: Scalars['Int']['output'];
  contractAddress: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  initData: Scalars['String']['output'];
  linkValue: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['String']['output'];
  returnData: Scalars['String']['output'];
  targetItemType: LinkModuleTargetItemType;
  /** if linkType is Address */
  toAddress?: Maybe<Scalars['String']['output']>;
  /** if linkType is Character or Note */
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  /** if linkType is ERC721 */
  toContractAddress?: Maybe<Scalars['String']['output']>;
  /** if linkType is Linklist */
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  /** if linkType is Note */
  toNoteId?: Maybe<Scalars['Int']['output']>;
  /** if linkType is ERC721 */
  toTokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
};

export type HistoryLinkModuleAvgAggregate = {
  __typename?: 'HistoryLinkModuleAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  toCharacterId?: Maybe<Scalars['Float']['output']>;
  toLinklistId?: Maybe<Scalars['Float']['output']>;
  toNoteId?: Maybe<Scalars['Float']['output']>;
  toTokenId?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type HistoryLinkModuleCount = {
  __typename?: 'HistoryLinkModuleCount';
  feeds: Scalars['Int']['output'];
};

export type HistoryLinkModuleCountAggregate = {
  __typename?: 'HistoryLinkModuleCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  contractAddress: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  initData: Scalars['Int']['output'];
  linkValue: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  returnData: Scalars['Int']['output'];
  targetItemType: Scalars['Int']['output'];
  toAddress: Scalars['Int']['output'];
  toCharacterId: Scalars['Int']['output'];
  toContractAddress: Scalars['Int']['output'];
  toLinklistId: Scalars['Int']['output'];
  toNoteId: Scalars['Int']['output'];
  toTokenId: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
};

export type HistoryLinkModuleMaxAggregate = {
  __typename?: 'HistoryLinkModuleMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  initData?: Maybe<Scalars['String']['output']>;
  linkValue?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  returnData?: Maybe<Scalars['String']['output']>;
  targetItemType?: Maybe<LinkModuleTargetItemType>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type HistoryLinkModuleMinAggregate = {
  __typename?: 'HistoryLinkModuleMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  initData?: Maybe<Scalars['String']['output']>;
  linkValue?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  returnData?: Maybe<Scalars['String']['output']>;
  targetItemType?: Maybe<LinkModuleTargetItemType>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type HistoryLinkModuleSumAggregate = {
  __typename?: 'HistoryLinkModuleSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type HistoryLinkModuleWhereInput = {
  AND?: InputMaybe<Array<HistoryLinkModuleWhereInput>>;
  NOT?: InputMaybe<Array<HistoryLinkModuleWhereInput>>;
  OR?: InputMaybe<Array<HistoryLinkModuleWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  contractAddress?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  initData?: InputMaybe<StringFilter>;
  linkValue?: InputMaybe<StringFilter>;
  logIndex?: InputMaybe<IntFilter>;
  operator?: InputMaybe<StringFilter>;
  returnData?: InputMaybe<StringFilter>;
  targetItemType?: InputMaybe<EnumLinkModuleTargetItemTypeFilter>;
  toAddress?: InputMaybe<StringNullableFilter>;
  toCharacterId?: InputMaybe<IntNullableFilter>;
  toContractAddress?: InputMaybe<StringNullableFilter>;
  toLinklistId?: InputMaybe<IntNullableFilter>;
  toNoteId?: InputMaybe<IntNullableFilter>;
  toTokenId?: InputMaybe<IntNullableFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
};

export type HistoryLinkSumAggregate = {
  __typename?: 'HistoryLinkSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type HistoryLinkWhereInput = {
  AND?: InputMaybe<Array<HistoryLinkWhereInput>>;
  NOT?: InputMaybe<Array<HistoryLinkWhereInput>>;
  OR?: InputMaybe<Array<HistoryLinkWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  fromCharacterId?: InputMaybe<IntNullableFilter>;
  linkItemType?: InputMaybe<EnumLinkItemTypeFilter>;
  linkType?: InputMaybe<StringFilter>;
  linkValue?: InputMaybe<StringFilter>;
  linklistId?: InputMaybe<IntFilter>;
  logIndex?: InputMaybe<IntFilter>;
  operator?: InputMaybe<StringFilter>;
  owner?: InputMaybe<StringFilter>;
  toAddress?: InputMaybe<StringNullableFilter>;
  toCharacterId?: InputMaybe<IntNullableFilter>;
  toContractAddress?: InputMaybe<StringNullableFilter>;
  toLinklistId?: InputMaybe<IntNullableFilter>;
  toNoteId?: InputMaybe<IntNullableFilter>;
  toTokenId?: InputMaybe<IntNullableFilter>;
  toUri?: InputMaybe<StringNullableFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
};

export type HistoryLinklist = {
  __typename?: 'HistoryLinklist';
  _count: HistoryLinklistCount;
  attached: Scalars['Boolean']['output'];
  blockNumber: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  fromAddress: Scalars['String']['output'];
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linkType: Scalars['String']['output'];
  linklistId: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  metadata?: Maybe<Metadata>;
  operator: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};

export type HistoryLinklistAvgAggregate = {
  __typename?: 'HistoryLinklistAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  fromCharacterId?: Maybe<Scalars['Float']['output']>;
  linklistId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type HistoryLinklistCount = {
  __typename?: 'HistoryLinklistCount';
  feeds: Scalars['Int']['output'];
};

export type HistoryLinklistCountAggregate = {
  __typename?: 'HistoryLinklistCountAggregate';
  _all: Scalars['Int']['output'];
  attached: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  fromAddress: Scalars['Int']['output'];
  fromCharacterId: Scalars['Int']['output'];
  linkType: Scalars['Int']['output'];
  linklistId: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  owner: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
  uri: Scalars['Int']['output'];
};

export type HistoryLinklistListRelationFilter = {
  every?: InputMaybe<HistoryLinklistWhereInput>;
  none?: InputMaybe<HistoryLinklistWhereInput>;
  some?: InputMaybe<HistoryLinklistWhereInput>;
};

export type HistoryLinklistMaxAggregate = {
  __typename?: 'HistoryLinklistMaxAggregate';
  attached?: Maybe<Scalars['Boolean']['output']>;
  blockNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type HistoryLinklistMinAggregate = {
  __typename?: 'HistoryLinklistMinAggregate';
  attached?: Maybe<Scalars['Boolean']['output']>;
  blockNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type HistoryLinklistOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type HistoryLinklistSumAggregate = {
  __typename?: 'HistoryLinklistSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type HistoryLinklistWhereInput = {
  AND?: InputMaybe<Array<HistoryLinklistWhereInput>>;
  NOT?: InputMaybe<Array<HistoryLinklistWhereInput>>;
  OR?: InputMaybe<Array<HistoryLinklistWhereInput>>;
  attached?: InputMaybe<BoolFilter>;
  blockNumber?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  fromAddress?: InputMaybe<StringFilter>;
  fromCharacterId?: InputMaybe<IntNullableFilter>;
  linkType?: InputMaybe<StringFilter>;
  linklistId?: InputMaybe<IntFilter>;
  logIndex?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<MetadataWhereInput>;
  operator?: InputMaybe<StringFilter>;
  owner?: InputMaybe<StringFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
  uri?: InputMaybe<StringNullableFilter>;
};

export type HistoryMintModule = {
  __typename?: 'HistoryMintModule';
  _count: HistoryMintModuleCount;
  blockNumber: Scalars['Int']['output'];
  contractAddress: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  initData: Scalars['String']['output'];
  linkValue: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['String']['output'];
  returnData: Scalars['String']['output'];
  targetItemType: MintModuleTargetItemType;
  /** if targetItemType is Note */
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
};

export type HistoryMintModuleAvgAggregate = {
  __typename?: 'HistoryMintModuleAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  toCharacterId?: Maybe<Scalars['Float']['output']>;
  toNoteId?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type HistoryMintModuleCount = {
  __typename?: 'HistoryMintModuleCount';
  feeds: Scalars['Int']['output'];
};

export type HistoryMintModuleCountAggregate = {
  __typename?: 'HistoryMintModuleCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  contractAddress: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  initData: Scalars['Int']['output'];
  linkValue: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  returnData: Scalars['Int']['output'];
  targetItemType: Scalars['Int']['output'];
  toCharacterId: Scalars['Int']['output'];
  toNoteId: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
};

export type HistoryMintModuleMaxAggregate = {
  __typename?: 'HistoryMintModuleMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  initData?: Maybe<Scalars['String']['output']>;
  linkValue?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  returnData?: Maybe<Scalars['String']['output']>;
  targetItemType?: Maybe<MintModuleTargetItemType>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type HistoryMintModuleMinAggregate = {
  __typename?: 'HistoryMintModuleMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  initData?: Maybe<Scalars['String']['output']>;
  linkValue?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  returnData?: Maybe<Scalars['String']['output']>;
  targetItemType?: Maybe<MintModuleTargetItemType>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type HistoryMintModuleSumAggregate = {
  __typename?: 'HistoryMintModuleSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type HistoryMintModuleWhereInput = {
  AND?: InputMaybe<Array<HistoryMintModuleWhereInput>>;
  NOT?: InputMaybe<Array<HistoryMintModuleWhereInput>>;
  OR?: InputMaybe<Array<HistoryMintModuleWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  contractAddress?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  initData?: InputMaybe<StringFilter>;
  linkValue?: InputMaybe<StringFilter>;
  logIndex?: InputMaybe<IntFilter>;
  operator?: InputMaybe<StringFilter>;
  returnData?: InputMaybe<StringFilter>;
  targetItemType?: InputMaybe<EnumMintModuleTargetItemTypeFilter>;
  toCharacterId?: InputMaybe<IntNullableFilter>;
  toNoteId?: InputMaybe<IntNullableFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
};

export type HistoryMintedNote = {
  __typename?: 'HistoryMintedNote';
  _count: HistoryMintedNoteCount;
  blockNumber: Scalars['Int']['output'];
  contractAddress: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  fromAddress: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  noteCharacterId: Scalars['Int']['output'];
  noteId: Scalars['Int']['output'];
  operator: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  tokenId: Scalars['Int']['output'];
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
};

export type HistoryMintedNoteAvgAggregate = {
  __typename?: 'HistoryMintedNoteAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  noteCharacterId?: Maybe<Scalars['Float']['output']>;
  noteId?: Maybe<Scalars['Float']['output']>;
  tokenId?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type HistoryMintedNoteCount = {
  __typename?: 'HistoryMintedNoteCount';
  feeds: Scalars['Int']['output'];
};

export type HistoryMintedNoteCountAggregate = {
  __typename?: 'HistoryMintedNoteCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  contractAddress: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  fromAddress: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  noteCharacterId: Scalars['Int']['output'];
  noteId: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  owner: Scalars['Int']['output'];
  tokenId: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
};

export type HistoryMintedNoteMaxAggregate = {
  __typename?: 'HistoryMintedNoteMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteCharacterId?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  tokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type HistoryMintedNoteMinAggregate = {
  __typename?: 'HistoryMintedNoteMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteCharacterId?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  tokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type HistoryMintedNoteSumAggregate = {
  __typename?: 'HistoryMintedNoteSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteCharacterId?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  tokenId?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type HistoryMintedNoteWhereInput = {
  AND?: InputMaybe<Array<HistoryMintedNoteWhereInput>>;
  NOT?: InputMaybe<Array<HistoryMintedNoteWhereInput>>;
  OR?: InputMaybe<Array<HistoryMintedNoteWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  contractAddress?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  fromAddress?: InputMaybe<StringFilter>;
  logIndex?: InputMaybe<IntFilter>;
  noteCharacterId?: InputMaybe<IntFilter>;
  noteId?: InputMaybe<IntFilter>;
  operator?: InputMaybe<StringFilter>;
  owner?: InputMaybe<StringFilter>;
  tokenId?: InputMaybe<IntFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
};

export type HistoryNote = {
  __typename?: 'HistoryNote';
  _count: HistoryNoteCount;
  blockNumber: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  /** NFT contract address if this note has been minted by someone */
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  /** e.g. AnyUri, Character, ERC721, ... */
  linkItemType?: Maybe<LinkItemType>;
  linkKey: Scalars['String']['output'];
  locked: Scalars['Boolean']['output'];
  logIndex: Scalars['Int']['output'];
  metadata?: Maybe<Metadata>;
  noteId: Scalars['Int']['output'];
  operator: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** if linkItemType is Address */
  toAddress?: Maybe<Scalars['String']['output']>;
  /** if linkItemType is Character or Note */
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  /** if linkItemType is ERC721 */
  toContractAddress?: Maybe<Scalars['String']['output']>;
  /** if linkItemType is Note and is nested */
  toHeadCharacterId?: Maybe<Scalars['Int']['output']>;
  /** if linkItemType is Note and is nested */
  toHeadNoteId?: Maybe<Scalars['Int']['output']>;
  /** if linkItemType is Linklist */
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  /** if linkItemType is Note */
  toNoteId?: Maybe<Scalars['Int']['output']>;
  /** if linkItemType is ERC721 */
  toTokenId?: Maybe<Scalars['Int']['output']>;
  /** if linkItemType is AnyUri */
  toUri?: Maybe<Scalars['String']['output']>;
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};

export type HistoryNoteAvgAggregate = {
  __typename?: 'HistoryNoteAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  characterId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  noteId?: Maybe<Scalars['Float']['output']>;
  toCharacterId?: Maybe<Scalars['Float']['output']>;
  toHeadCharacterId?: Maybe<Scalars['Float']['output']>;
  toHeadNoteId?: Maybe<Scalars['Float']['output']>;
  toLinklistId?: Maybe<Scalars['Float']['output']>;
  toNoteId?: Maybe<Scalars['Float']['output']>;
  toTokenId?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type HistoryNoteCount = {
  __typename?: 'HistoryNoteCount';
  feeds: Scalars['Int']['output'];
};

export type HistoryNoteCountAggregate = {
  __typename?: 'HistoryNoteCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  contractAddress: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deleted: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  linkItemType: Scalars['Int']['output'];
  linkKey: Scalars['Int']['output'];
  locked: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  noteId: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  owner: Scalars['Int']['output'];
  publishedAt: Scalars['Int']['output'];
  toAddress: Scalars['Int']['output'];
  toCharacterId: Scalars['Int']['output'];
  toContractAddress: Scalars['Int']['output'];
  toHeadCharacterId: Scalars['Int']['output'];
  toHeadNoteId: Scalars['Int']['output'];
  toLinklistId: Scalars['Int']['output'];
  toNoteId: Scalars['Int']['output'];
  toTokenId: Scalars['Int']['output'];
  toUri: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
  uri: Scalars['Int']['output'];
};

export type HistoryNoteListRelationFilter = {
  every?: InputMaybe<HistoryNoteWhereInput>;
  none?: InputMaybe<HistoryNoteWhereInput>;
  some?: InputMaybe<HistoryNoteWhereInput>;
};

export type HistoryNoteMaxAggregate = {
  __typename?: 'HistoryNoteMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  linkItemType?: Maybe<LinkItemType>;
  linkKey?: Maybe<Scalars['String']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toHeadCharacterId?: Maybe<Scalars['Int']['output']>;
  toHeadNoteId?: Maybe<Scalars['Int']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  toUri?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type HistoryNoteMinAggregate = {
  __typename?: 'HistoryNoteMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  linkItemType?: Maybe<LinkItemType>;
  linkKey?: Maybe<Scalars['String']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toHeadCharacterId?: Maybe<Scalars['Int']['output']>;
  toHeadNoteId?: Maybe<Scalars['Int']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  toUri?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type HistoryNoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type HistoryNoteSumAggregate = {
  __typename?: 'HistoryNoteSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toHeadCharacterId?: Maybe<Scalars['Int']['output']>;
  toHeadNoteId?: Maybe<Scalars['Int']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type HistoryNoteWhereInput = {
  AND?: InputMaybe<Array<HistoryNoteWhereInput>>;
  NOT?: InputMaybe<Array<HistoryNoteWhereInput>>;
  OR?: InputMaybe<Array<HistoryNoteWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  characterId?: InputMaybe<IntFilter>;
  contractAddress?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<BoolFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  linkItemType?: InputMaybe<EnumLinkItemTypeNullableFilter>;
  linkKey?: InputMaybe<StringFilter>;
  locked?: InputMaybe<BoolFilter>;
  logIndex?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<MetadataWhereInput>;
  noteId?: InputMaybe<IntFilter>;
  operator?: InputMaybe<StringFilter>;
  owner?: InputMaybe<StringFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  toAddress?: InputMaybe<StringNullableFilter>;
  toCharacterId?: InputMaybe<IntNullableFilter>;
  toContractAddress?: InputMaybe<StringNullableFilter>;
  toHeadCharacterId?: InputMaybe<IntNullableFilter>;
  toHeadNoteId?: InputMaybe<IntNullableFilter>;
  toLinklistId?: InputMaybe<IntNullableFilter>;
  toNoteId?: InputMaybe<IntNullableFilter>;
  toTokenId?: InputMaybe<IntNullableFilter>;
  toUri?: InputMaybe<StringNullableFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
  uri?: InputMaybe<StringNullableFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Link = {
  __typename?: 'Link';
  _count: LinkCount;
  blockNumber: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  fromCharacter?: Maybe<Character>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linkItemType: LinkItemType;
  linkType: Scalars['String']['output'];
  linkValue: Scalars['String']['output'];
  linklist: Linklist;
  linklistId: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  /** if linkType is Address */
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacter?: Maybe<Character>;
  /** if linkType is Character or Note */
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  /** if linkType is ERC721 */
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toLinklist?: Maybe<Linklist>;
  /** if linkType is Linklist */
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNote?: Maybe<Note>;
  /** if linkType is Note */
  toNoteId?: Maybe<Scalars['Int']['output']>;
  /** if linkType is ERC721 */
  toTokenId?: Maybe<Scalars['Int']['output']>;
  /** if linkType is AnyUri */
  toUri?: Maybe<Scalars['String']['output']>;
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
};

export type LinkAvgAggregate = {
  __typename?: 'LinkAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  fromCharacterId?: Maybe<Scalars['Float']['output']>;
  linklistId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  toCharacterId?: Maybe<Scalars['Float']['output']>;
  toLinklistId?: Maybe<Scalars['Float']['output']>;
  toNoteId?: Maybe<Scalars['Float']['output']>;
  toTokenId?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type LinkAvgAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  fromCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  linklistId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  toCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toLinklistId?: InputMaybe<Scalars['Boolean']['input']>;
  toNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toTokenId?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkAvgOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  fromCharacterId?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  toCharacterId?: InputMaybe<SortOrder>;
  toLinklistId?: InputMaybe<SortOrder>;
  toNoteId?: InputMaybe<SortOrder>;
  toTokenId?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
};

export type LinkCount = {
  __typename?: 'LinkCount';
  feeds: Scalars['Int']['output'];
};

export type LinkCountAggregate = {
  __typename?: 'LinkCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  fromCharacterId: Scalars['Int']['output'];
  linkItemType: Scalars['Int']['output'];
  linkType: Scalars['Int']['output'];
  linkValue: Scalars['Int']['output'];
  linklistId: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  owner: Scalars['Int']['output'];
  toAddress: Scalars['Int']['output'];
  toCharacterId: Scalars['Int']['output'];
  toContractAddress: Scalars['Int']['output'];
  toLinklistId: Scalars['Int']['output'];
  toNoteId: Scalars['Int']['output'];
  toTokenId: Scalars['Int']['output'];
  toUri: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
};

export type LinkCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Boolean']['input']>;
  fromCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  linkItemType?: InputMaybe<Scalars['Boolean']['input']>;
  linkType?: InputMaybe<Scalars['Boolean']['input']>;
  linkValue?: InputMaybe<Scalars['Boolean']['input']>;
  linklistId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  toAddress?: InputMaybe<Scalars['Boolean']['input']>;
  toCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toContractAddress?: InputMaybe<Scalars['Boolean']['input']>;
  toLinklistId?: InputMaybe<Scalars['Boolean']['input']>;
  toNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toTokenId?: InputMaybe<Scalars['Boolean']['input']>;
  toUri?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkCountOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  fromCharacterId?: InputMaybe<SortOrder>;
  linkItemType?: InputMaybe<SortOrder>;
  linkType?: InputMaybe<SortOrder>;
  linkValue?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  toAddress?: InputMaybe<SortOrder>;
  toCharacterId?: InputMaybe<SortOrder>;
  toContractAddress?: InputMaybe<SortOrder>;
  toLinklistId?: InputMaybe<SortOrder>;
  toNoteId?: InputMaybe<SortOrder>;
  toTokenId?: InputMaybe<SortOrder>;
  toUri?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
};

export enum LinkItemType {
  Address = 'Address',
  AnyUri = 'AnyUri',
  Character = 'Character',
  Erc721 = 'ERC721',
  Linklist = 'Linklist',
  Note = 'Note'
}

export type LinkLink_LinklistId_LinkValue_UniqueCompoundUniqueInput = {
  linkValue: Scalars['String']['input'];
  linklistId: Scalars['Int']['input'];
};

export type LinkLinklistIdLinkValueCompoundUniqueInput = {
  linkValue: Scalars['String']['input'];
  linklistId: Scalars['Int']['input'];
};

export type LinkListRelationFilter = {
  every?: InputMaybe<LinkWhereInput>;
  none?: InputMaybe<LinkWhereInput>;
  some?: InputMaybe<LinkWhereInput>;
};

export type LinkMaxAggregate = {
  __typename?: 'LinkMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linkItemType?: Maybe<LinkItemType>;
  linkType?: Maybe<Scalars['String']['output']>;
  linkValue?: Maybe<Scalars['String']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  toUri?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type LinkMaxAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Boolean']['input']>;
  fromCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  linkItemType?: InputMaybe<Scalars['Boolean']['input']>;
  linkType?: InputMaybe<Scalars['Boolean']['input']>;
  linkValue?: InputMaybe<Scalars['Boolean']['input']>;
  linklistId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  toAddress?: InputMaybe<Scalars['Boolean']['input']>;
  toCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toContractAddress?: InputMaybe<Scalars['Boolean']['input']>;
  toLinklistId?: InputMaybe<Scalars['Boolean']['input']>;
  toNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toTokenId?: InputMaybe<Scalars['Boolean']['input']>;
  toUri?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkMaxOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  fromCharacterId?: InputMaybe<SortOrder>;
  linkItemType?: InputMaybe<SortOrder>;
  linkType?: InputMaybe<SortOrder>;
  linkValue?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  toAddress?: InputMaybe<SortOrder>;
  toCharacterId?: InputMaybe<SortOrder>;
  toContractAddress?: InputMaybe<SortOrder>;
  toLinklistId?: InputMaybe<SortOrder>;
  toNoteId?: InputMaybe<SortOrder>;
  toTokenId?: InputMaybe<SortOrder>;
  toUri?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
};

export type LinkMinAggregate = {
  __typename?: 'LinkMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linkItemType?: Maybe<LinkItemType>;
  linkType?: Maybe<Scalars['String']['output']>;
  linkValue?: Maybe<Scalars['String']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  toUri?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type LinkMinAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Boolean']['input']>;
  fromCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  linkItemType?: InputMaybe<Scalars['Boolean']['input']>;
  linkType?: InputMaybe<Scalars['Boolean']['input']>;
  linkValue?: InputMaybe<Scalars['Boolean']['input']>;
  linklistId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  toAddress?: InputMaybe<Scalars['Boolean']['input']>;
  toCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toContractAddress?: InputMaybe<Scalars['Boolean']['input']>;
  toLinklistId?: InputMaybe<Scalars['Boolean']['input']>;
  toNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toTokenId?: InputMaybe<Scalars['Boolean']['input']>;
  toUri?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkMinOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  fromCharacterId?: InputMaybe<SortOrder>;
  linkItemType?: InputMaybe<SortOrder>;
  linkType?: InputMaybe<SortOrder>;
  linkValue?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  toAddress?: InputMaybe<SortOrder>;
  toCharacterId?: InputMaybe<SortOrder>;
  toContractAddress?: InputMaybe<SortOrder>;
  toLinklistId?: InputMaybe<SortOrder>;
  toNoteId?: InputMaybe<SortOrder>;
  toTokenId?: InputMaybe<SortOrder>;
  toUri?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
};

export type LinkModule = {
  __typename?: 'LinkModule';
  _count: LinkModuleCount;
  blockNumber: Scalars['Int']['output'];
  contractAddress: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  initData: Scalars['String']['output'];
  linkValue: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['String']['output'];
  returnData: Scalars['String']['output'];
  targetItemType: LinkModuleTargetItemType;
  /** if linkType is Address */
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacter?: Maybe<Character>;
  /** if linkType is Character or Note */
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  /** if linkType is ERC721 */
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toLinklist?: Maybe<Linklist>;
  /** if linkType is Linklist */
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNote?: Maybe<Note>;
  /** if linkType is Note */
  toNoteId?: Maybe<Scalars['Int']['output']>;
  /** if linkType is ERC721 */
  toTokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
};

export type LinkModuleAvgAggregate = {
  __typename?: 'LinkModuleAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  toCharacterId?: Maybe<Scalars['Float']['output']>;
  toLinklistId?: Maybe<Scalars['Float']['output']>;
  toNoteId?: Maybe<Scalars['Float']['output']>;
  toTokenId?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type LinkModuleCount = {
  __typename?: 'LinkModuleCount';
  feeds: Scalars['Int']['output'];
};

export type LinkModuleCountAggregate = {
  __typename?: 'LinkModuleCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  contractAddress: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  initData: Scalars['Int']['output'];
  linkValue: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  returnData: Scalars['Int']['output'];
  targetItemType: Scalars['Int']['output'];
  toAddress: Scalars['Int']['output'];
  toCharacterId: Scalars['Int']['output'];
  toContractAddress: Scalars['Int']['output'];
  toLinklistId: Scalars['Int']['output'];
  toNoteId: Scalars['Int']['output'];
  toTokenId: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
};

export type LinkModuleListRelationFilter = {
  every?: InputMaybe<LinkModuleWhereInput>;
  none?: InputMaybe<LinkModuleWhereInput>;
  some?: InputMaybe<LinkModuleWhereInput>;
};

export type LinkModuleMaxAggregate = {
  __typename?: 'LinkModuleMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  initData?: Maybe<Scalars['String']['output']>;
  linkValue?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  returnData?: Maybe<Scalars['String']['output']>;
  targetItemType?: Maybe<LinkModuleTargetItemType>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type LinkModuleMinAggregate = {
  __typename?: 'LinkModuleMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  initData?: Maybe<Scalars['String']['output']>;
  linkValue?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  returnData?: Maybe<Scalars['String']['output']>;
  targetItemType?: Maybe<LinkModuleTargetItemType>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type LinkModuleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LinkModuleSumAggregate = {
  __typename?: 'LinkModuleSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export enum LinkModuleTargetItemType {
  Address = 'Address',
  Character = 'Character',
  Erc721 = 'ERC721',
  Linklist = 'Linklist',
  Note = 'Note'
}

export type LinkModuleWhereInput = {
  AND?: InputMaybe<Array<LinkModuleWhereInput>>;
  NOT?: InputMaybe<Array<LinkModuleWhereInput>>;
  OR?: InputMaybe<Array<LinkModuleWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  contractAddress?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  initData?: InputMaybe<StringFilter>;
  linkValue?: InputMaybe<StringFilter>;
  logIndex?: InputMaybe<IntFilter>;
  operator?: InputMaybe<StringFilter>;
  returnData?: InputMaybe<StringFilter>;
  targetItemType?: InputMaybe<EnumLinkModuleTargetItemTypeFilter>;
  toAddress?: InputMaybe<StringNullableFilter>;
  toCharacter?: InputMaybe<CharacterWhereInput>;
  toCharacterId?: InputMaybe<IntNullableFilter>;
  toContractAddress?: InputMaybe<StringNullableFilter>;
  toLinklist?: InputMaybe<LinklistWhereInput>;
  toLinklistId?: InputMaybe<IntNullableFilter>;
  toNote?: InputMaybe<NoteWhereInput>;
  toNoteId?: InputMaybe<IntNullableFilter>;
  toTokenId?: InputMaybe<IntNullableFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
};

export type LinkOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum LinkOrderByRelevanceFieldEnum {
  LinkType = 'linkType',
  LinkValue = 'linkValue',
  Operator = 'operator',
  Owner = 'owner',
  ToAddress = 'toAddress',
  ToContractAddress = 'toContractAddress',
  ToUri = 'toUri',
  TransactionHash = 'transactionHash',
  UpdatedTransactionHash = 'updatedTransactionHash'
}

export type LinkOrderByRelevanceInput = {
  fields: Array<LinkOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type LinkOrderByWithAggregationInput = {
  _avg?: InputMaybe<LinkAvgOrderByAggregateInput>;
  _count?: InputMaybe<LinkCountOrderByAggregateInput>;
  _max?: InputMaybe<LinkMaxOrderByAggregateInput>;
  _min?: InputMaybe<LinkMinOrderByAggregateInput>;
  _sum?: InputMaybe<LinkSumOrderByAggregateInput>;
  blockNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  fromCharacterId?: InputMaybe<SortOrderInput>;
  linkItemType?: InputMaybe<SortOrder>;
  linkType?: InputMaybe<SortOrder>;
  linkValue?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  toAddress?: InputMaybe<SortOrderInput>;
  toCharacterId?: InputMaybe<SortOrderInput>;
  toContractAddress?: InputMaybe<SortOrderInput>;
  toLinklistId?: InputMaybe<SortOrderInput>;
  toNoteId?: InputMaybe<SortOrderInput>;
  toTokenId?: InputMaybe<SortOrderInput>;
  toUri?: InputMaybe<SortOrderInput>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
};

export type LinkOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<LinkOrderByRelevanceInput>;
  blockNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  feeds?: InputMaybe<FeedOrderByRelationAggregateInput>;
  fromCharacter?: InputMaybe<CharacterOrderByWithRelationAndSearchRelevanceInput>;
  fromCharacterId?: InputMaybe<SortOrderInput>;
  linkItemType?: InputMaybe<SortOrder>;
  linkType?: InputMaybe<SortOrder>;
  linkValue?: InputMaybe<SortOrder>;
  linklist?: InputMaybe<LinklistOrderByWithRelationAndSearchRelevanceInput>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  toAddress?: InputMaybe<SortOrderInput>;
  toCharacter?: InputMaybe<CharacterOrderByWithRelationAndSearchRelevanceInput>;
  toCharacterId?: InputMaybe<SortOrderInput>;
  toContractAddress?: InputMaybe<SortOrderInput>;
  toLinklist?: InputMaybe<LinklistOrderByWithRelationAndSearchRelevanceInput>;
  toLinklistId?: InputMaybe<SortOrderInput>;
  toNote?: InputMaybe<NoteOrderByWithRelationAndSearchRelevanceInput>;
  toNoteId?: InputMaybe<SortOrderInput>;
  toTokenId?: InputMaybe<SortOrderInput>;
  toUri?: InputMaybe<SortOrderInput>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
};

export enum LinkScalarFieldEnum {
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  FromCharacterId = 'fromCharacterId',
  LinkItemType = 'linkItemType',
  LinkType = 'linkType',
  LinkValue = 'linkValue',
  LinklistId = 'linklistId',
  LogIndex = 'logIndex',
  Operator = 'operator',
  Owner = 'owner',
  ToAddress = 'toAddress',
  ToCharacterId = 'toCharacterId',
  ToContractAddress = 'toContractAddress',
  ToLinklistId = 'toLinklistId',
  ToNoteId = 'toNoteId',
  ToTokenId = 'toTokenId',
  ToUri = 'toUri',
  TransactionHash = 'transactionHash',
  UpdatedAt = 'updatedAt',
  UpdatedBlockNumber = 'updatedBlockNumber',
  UpdatedLogIndex = 'updatedLogIndex',
  UpdatedTransactionHash = 'updatedTransactionHash'
}

export type LinkScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LinkScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LinkScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LinkScalarWhereWithAggregatesInput>>;
  blockNumber?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  fromCharacterId?: InputMaybe<IntNullableWithAggregatesFilter>;
  linkItemType?: InputMaybe<EnumLinkItemTypeWithAggregatesFilter>;
  linkType?: InputMaybe<StringWithAggregatesFilter>;
  linkValue?: InputMaybe<StringWithAggregatesFilter>;
  linklistId?: InputMaybe<IntWithAggregatesFilter>;
  logIndex?: InputMaybe<IntWithAggregatesFilter>;
  operator?: InputMaybe<StringWithAggregatesFilter>;
  owner?: InputMaybe<StringWithAggregatesFilter>;
  toAddress?: InputMaybe<StringNullableWithAggregatesFilter>;
  toCharacterId?: InputMaybe<IntNullableWithAggregatesFilter>;
  toContractAddress?: InputMaybe<StringNullableWithAggregatesFilter>;
  toLinklistId?: InputMaybe<IntNullableWithAggregatesFilter>;
  toNoteId?: InputMaybe<IntNullableWithAggregatesFilter>;
  toTokenId?: InputMaybe<IntNullableWithAggregatesFilter>;
  toUri?: InputMaybe<StringNullableWithAggregatesFilter>;
  transactionHash?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  updatedBlockNumber?: InputMaybe<IntWithAggregatesFilter>;
  updatedLogIndex?: InputMaybe<IntWithAggregatesFilter>;
  updatedTransactionHash?: InputMaybe<StringWithAggregatesFilter>;
};

export type LinkSumAggregate = {
  __typename?: 'LinkSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type LinkSumAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  fromCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  linklistId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  toCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toLinklistId?: InputMaybe<Scalars['Boolean']['input']>;
  toNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toTokenId?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkSumOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  fromCharacterId?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  toCharacterId?: InputMaybe<SortOrder>;
  toLinklistId?: InputMaybe<SortOrder>;
  toNoteId?: InputMaybe<SortOrder>;
  toTokenId?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
};

export type LinkWhereInput = {
  AND?: InputMaybe<Array<LinkWhereInput>>;
  NOT?: InputMaybe<Array<LinkWhereInput>>;
  OR?: InputMaybe<Array<LinkWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  fromCharacter?: InputMaybe<CharacterWhereInput>;
  fromCharacterId?: InputMaybe<IntNullableFilter>;
  linkItemType?: InputMaybe<EnumLinkItemTypeFilter>;
  linkType?: InputMaybe<StringFilter>;
  linkValue?: InputMaybe<StringFilter>;
  linklist?: InputMaybe<LinklistWhereInput>;
  linklistId?: InputMaybe<IntFilter>;
  logIndex?: InputMaybe<IntFilter>;
  operator?: InputMaybe<StringFilter>;
  owner?: InputMaybe<StringFilter>;
  toAddress?: InputMaybe<StringNullableFilter>;
  toCharacter?: InputMaybe<CharacterWhereInput>;
  toCharacterId?: InputMaybe<IntNullableFilter>;
  toContractAddress?: InputMaybe<StringNullableFilter>;
  toLinklist?: InputMaybe<LinklistWhereInput>;
  toLinklistId?: InputMaybe<IntNullableFilter>;
  toNote?: InputMaybe<NoteWhereInput>;
  toNoteId?: InputMaybe<IntNullableFilter>;
  toTokenId?: InputMaybe<IntNullableFilter>;
  toUri?: InputMaybe<StringNullableFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
};

export type LinkWhereUniqueInput = {
  link_linklistId_linkValue_unique?: InputMaybe<LinkLink_LinklistId_LinkValue_UniqueCompoundUniqueInput>;
  linklistId_linkValue?: InputMaybe<LinkLinklistIdLinkValueCompoundUniqueInput>;
};

export type Linklist = {
  __typename?: 'Linklist';
  _count: LinklistCount;
  attached: Scalars['Boolean']['output'];
  blockNumber: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  fromAddress: Scalars['String']['output'];
  /** @DtoEntityHidden */
  fromCharacter?: Maybe<Character>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  /** @DtoEntityHidden */
  fromLinks?: Maybe<Array<Link>>;
  /** @DtoEntityHidden */
  fromNotes?: Maybe<Array<Note>>;
  linkType: Scalars['String']['output'];
  linklistId: Scalars['ID']['output'];
  /** @DtoEntityHidden */
  links?: Maybe<Array<Link>>;
  logIndex: Scalars['Int']['output'];
  metadata?: Maybe<Metadata>;
  operator: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  /** @DtoEntityHidden */
  toLinkModules?: Maybe<Array<LinkModule>>;
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};

export type LinklistAvgAggregate = {
  __typename?: 'LinklistAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  fromCharacterId?: Maybe<Scalars['Float']['output']>;
  linklistId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type LinklistAvgAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  fromCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  linklistId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinklistAvgOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  fromCharacterId?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
};

export type LinklistCount = {
  __typename?: 'LinklistCount';
  feeds: Scalars['Int']['output'];
  fromLinks: Scalars['Int']['output'];
  fromNotes: Scalars['Int']['output'];
  links: Scalars['Int']['output'];
  toLinkModules: Scalars['Int']['output'];
};

export type LinklistCountAggregate = {
  __typename?: 'LinklistCountAggregate';
  _all: Scalars['Int']['output'];
  attached: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  fromAddress: Scalars['Int']['output'];
  fromCharacterId: Scalars['Int']['output'];
  linkType: Scalars['Int']['output'];
  linklistId: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  owner: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
  uri: Scalars['Int']['output'];
};

export type LinklistCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  attached?: InputMaybe<Scalars['Boolean']['input']>;
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Boolean']['input']>;
  fromAddress?: InputMaybe<Scalars['Boolean']['input']>;
  fromCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  linkType?: InputMaybe<Scalars['Boolean']['input']>;
  linklistId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinklistCountOrderByAggregateInput = {
  attached?: InputMaybe<SortOrder>;
  blockNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  fromAddress?: InputMaybe<SortOrder>;
  fromCharacterId?: InputMaybe<SortOrder>;
  linkType?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrder>;
};

export type LinklistListRelationFilter = {
  every?: InputMaybe<LinklistWhereInput>;
  none?: InputMaybe<LinklistWhereInput>;
  some?: InputMaybe<LinklistWhereInput>;
};

export type LinklistMaxAggregate = {
  __typename?: 'LinklistMaxAggregate';
  attached?: Maybe<Scalars['Boolean']['output']>;
  blockNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type LinklistMaxAggregateInput = {
  attached?: InputMaybe<Scalars['Boolean']['input']>;
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Boolean']['input']>;
  fromAddress?: InputMaybe<Scalars['Boolean']['input']>;
  fromCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  linkType?: InputMaybe<Scalars['Boolean']['input']>;
  linklistId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinklistMaxOrderByAggregateInput = {
  attached?: InputMaybe<SortOrder>;
  blockNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  fromAddress?: InputMaybe<SortOrder>;
  fromCharacterId?: InputMaybe<SortOrder>;
  linkType?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrder>;
};

export type LinklistMinAggregate = {
  __typename?: 'LinklistMinAggregate';
  attached?: Maybe<Scalars['Boolean']['output']>;
  blockNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linkType?: Maybe<Scalars['String']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type LinklistMinAggregateInput = {
  attached?: InputMaybe<Scalars['Boolean']['input']>;
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Boolean']['input']>;
  fromAddress?: InputMaybe<Scalars['Boolean']['input']>;
  fromCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  linkType?: InputMaybe<Scalars['Boolean']['input']>;
  linklistId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinklistMinOrderByAggregateInput = {
  attached?: InputMaybe<SortOrder>;
  blockNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  fromAddress?: InputMaybe<SortOrder>;
  fromCharacterId?: InputMaybe<SortOrder>;
  linkType?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrder>;
};

export type LinklistOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum LinklistOrderByRelevanceFieldEnum {
  FromAddress = 'fromAddress',
  LinkType = 'linkType',
  Operator = 'operator',
  Owner = 'owner',
  TransactionHash = 'transactionHash',
  UpdatedTransactionHash = 'updatedTransactionHash',
  Uri = 'uri'
}

export type LinklistOrderByRelevanceInput = {
  fields: Array<LinklistOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type LinklistOrderByWithAggregationInput = {
  _avg?: InputMaybe<LinklistAvgOrderByAggregateInput>;
  _count?: InputMaybe<LinklistCountOrderByAggregateInput>;
  _max?: InputMaybe<LinklistMaxOrderByAggregateInput>;
  _min?: InputMaybe<LinklistMinOrderByAggregateInput>;
  _sum?: InputMaybe<LinklistSumOrderByAggregateInput>;
  attached?: InputMaybe<SortOrder>;
  blockNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  fromAddress?: InputMaybe<SortOrder>;
  fromCharacterId?: InputMaybe<SortOrderInput>;
  linkType?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrderInput>;
};

export type LinklistOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<LinklistOrderByRelevanceInput>;
  attached?: InputMaybe<SortOrder>;
  blockNumber?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  feeds?: InputMaybe<FeedOrderByRelationAggregateInput>;
  fromAddress?: InputMaybe<SortOrder>;
  fromCharacter?: InputMaybe<CharacterOrderByWithRelationAndSearchRelevanceInput>;
  fromCharacterId?: InputMaybe<SortOrderInput>;
  fromLinks?: InputMaybe<LinkOrderByRelationAggregateInput>;
  fromNotes?: InputMaybe<NoteOrderByRelationAggregateInput>;
  linkType?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  links?: InputMaybe<LinkOrderByRelationAggregateInput>;
  logIndex?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<MetadataOrderByWithRelationAndSearchRelevanceInput>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  toLinkModules?: InputMaybe<LinkModuleOrderByRelationAggregateInput>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrderInput>;
};

export enum LinklistScalarFieldEnum {
  Attached = 'attached',
  BlockNumber = 'blockNumber',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  FromAddress = 'fromAddress',
  FromCharacterId = 'fromCharacterId',
  LinkType = 'linkType',
  LinklistId = 'linklistId',
  LogIndex = 'logIndex',
  Operator = 'operator',
  Owner = 'owner',
  TransactionHash = 'transactionHash',
  UpdatedAt = 'updatedAt',
  UpdatedBlockNumber = 'updatedBlockNumber',
  UpdatedLogIndex = 'updatedLogIndex',
  UpdatedTransactionHash = 'updatedTransactionHash',
  Uri = 'uri'
}

export type LinklistScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LinklistScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LinklistScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LinklistScalarWhereWithAggregatesInput>>;
  attached?: InputMaybe<BoolWithAggregatesFilter>;
  blockNumber?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  fromAddress?: InputMaybe<StringWithAggregatesFilter>;
  fromCharacterId?: InputMaybe<IntNullableWithAggregatesFilter>;
  linkType?: InputMaybe<StringWithAggregatesFilter>;
  linklistId?: InputMaybe<IntWithAggregatesFilter>;
  logIndex?: InputMaybe<IntWithAggregatesFilter>;
  operator?: InputMaybe<StringWithAggregatesFilter>;
  owner?: InputMaybe<StringWithAggregatesFilter>;
  transactionHash?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  updatedBlockNumber?: InputMaybe<IntWithAggregatesFilter>;
  updatedLogIndex?: InputMaybe<IntWithAggregatesFilter>;
  updatedTransactionHash?: InputMaybe<StringWithAggregatesFilter>;
  uri?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type LinklistSumAggregate = {
  __typename?: 'LinklistSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  fromCharacterId?: Maybe<Scalars['Int']['output']>;
  linklistId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type LinklistSumAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  fromCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  linklistId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinklistSumOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  fromCharacterId?: InputMaybe<SortOrder>;
  linklistId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
};

export type LinklistWhereInput = {
  AND?: InputMaybe<Array<LinklistWhereInput>>;
  NOT?: InputMaybe<Array<LinklistWhereInput>>;
  OR?: InputMaybe<Array<LinklistWhereInput>>;
  attached?: InputMaybe<BoolFilter>;
  blockNumber?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  fromAddress?: InputMaybe<StringFilter>;
  fromCharacter?: InputMaybe<CharacterWhereInput>;
  fromCharacterId?: InputMaybe<IntNullableFilter>;
  fromLinks?: InputMaybe<LinkListRelationFilter>;
  fromNotes?: InputMaybe<NoteListRelationFilter>;
  linkType?: InputMaybe<StringFilter>;
  linklistId?: InputMaybe<IntFilter>;
  links?: InputMaybe<LinkListRelationFilter>;
  logIndex?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<MetadataWhereInput>;
  operator?: InputMaybe<StringFilter>;
  owner?: InputMaybe<StringFilter>;
  toLinkModules?: InputMaybe<LinkModuleListRelationFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
  uri?: InputMaybe<StringNullableFilter>;
};

export type LinklistWhereUniqueInput = {
  linklistId?: InputMaybe<Scalars['Int']['input']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  _count: MetadataCount;
  content?: Maybe<Scalars['JSON']['output']>;
  /** @DtoEntityHidden */
  fromCharacters?: Maybe<Array<Character>>;
  /** @DtoEntityHidden */
  fromHistoryCharacters?: Maybe<Array<HistoryCharacter>>;
  /** @DtoEntityHidden */
  fromHistoryLinklists?: Maybe<Array<HistoryLinklist>>;
  /** @DtoEntityHidden */
  fromHistoryNotes?: Maybe<Array<HistoryNote>>;
  /** @DtoEntityHidden */
  fromLinklists?: Maybe<Array<Linklist>>;
  /** @DtoEntityHidden */
  fromNotes?: Maybe<Array<Note>>;
  status: MetadataStatus;
  type?: Maybe<MetadataType>;
  uri: Scalars['ID']['output'];
};

export type MetadataCount = {
  __typename?: 'MetadataCount';
  fromCharacters: Scalars['Int']['output'];
  fromHistoryCharacters: Scalars['Int']['output'];
  fromHistoryLinklists: Scalars['Int']['output'];
  fromHistoryNotes: Scalars['Int']['output'];
  fromLinklists: Scalars['Int']['output'];
  fromNotes: Scalars['Int']['output'];
};

export type MetadataCountAggregate = {
  __typename?: 'MetadataCountAggregate';
  _all: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  uri: Scalars['Int']['output'];
};

export type MetadataMaxAggregate = {
  __typename?: 'MetadataMaxAggregate';
  status?: Maybe<MetadataStatus>;
  type?: Maybe<MetadataType>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type MetadataMinAggregate = {
  __typename?: 'MetadataMinAggregate';
  status?: Maybe<MetadataStatus>;
  type?: Maybe<MetadataType>;
  uri?: Maybe<Scalars['String']['output']>;
};

export enum MetadataOrderByRelevanceFieldEnum {
  Uri = 'uri'
}

export type MetadataOrderByRelevanceInput = {
  fields: Array<MetadataOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MetadataOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MetadataOrderByRelevanceInput>;
  content?: InputMaybe<SortOrderInput>;
  fromCharacters?: InputMaybe<CharacterOrderByRelationAggregateInput>;
  fromHistoryCharacters?: InputMaybe<HistoryCharacterOrderByRelationAggregateInput>;
  fromHistoryLinklists?: InputMaybe<HistoryLinklistOrderByRelationAggregateInput>;
  fromHistoryNotes?: InputMaybe<HistoryNoteOrderByRelationAggregateInput>;
  fromLinklists?: InputMaybe<LinklistOrderByRelationAggregateInput>;
  fromNotes?: InputMaybe<NoteOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrderInput>;
  uri?: InputMaybe<SortOrder>;
};

export enum MetadataStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export enum MetadataType {
  Character = 'CHARACTER',
  Linklist = 'LINKLIST',
  Note = 'NOTE'
}

export type MetadataWhereInput = {
  AND?: InputMaybe<Array<MetadataWhereInput>>;
  NOT?: InputMaybe<Array<MetadataWhereInput>>;
  OR?: InputMaybe<Array<MetadataWhereInput>>;
  content?: InputMaybe<JsonNullableFilter>;
  fromCharacters?: InputMaybe<CharacterListRelationFilter>;
  fromHistoryCharacters?: InputMaybe<HistoryCharacterListRelationFilter>;
  fromHistoryLinklists?: InputMaybe<HistoryLinklistListRelationFilter>;
  fromHistoryNotes?: InputMaybe<HistoryNoteListRelationFilter>;
  fromLinklists?: InputMaybe<LinklistListRelationFilter>;
  fromNotes?: InputMaybe<NoteListRelationFilter>;
  status?: InputMaybe<EnumMetadataStatusFilter>;
  type?: InputMaybe<EnumMetadataTypeNullableFilter>;
  uri?: InputMaybe<StringFilter>;
};

export type MetricsStatAvgAggregate = {
  __typename?: 'MetricsStatAvgAggregate';
  sum?: Maybe<Scalars['Float']['output']>;
};

export type MetricsStatCountAggregate = {
  __typename?: 'MetricsStatCountAggregate';
  _all: Scalars['Int']['output'];
  period: Scalars['Int']['output'];
  source: Scalars['Int']['output'];
  sum: Scalars['Int']['output'];
};

export type MetricsStatMaxAggregate = {
  __typename?: 'MetricsStatMaxAggregate';
  period?: Maybe<Scalars['DateTime']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  sum?: Maybe<Scalars['Int']['output']>;
};

export type MetricsStatMinAggregate = {
  __typename?: 'MetricsStatMinAggregate';
  period?: Maybe<Scalars['DateTime']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  sum?: Maybe<Scalars['Int']['output']>;
};

export type MetricsStatSumAggregate = {
  __typename?: 'MetricsStatSumAggregate';
  sum?: Maybe<Scalars['Int']['output']>;
};

export type MintModule = {
  __typename?: 'MintModule';
  _count: MintModuleCount;
  blockNumber: Scalars['Int']['output'];
  contractAddress: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  initData: Scalars['String']['output'];
  linkValue: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['String']['output'];
  returnData: Scalars['String']['output'];
  targetItemType: MintModuleTargetItemType;
  toCharacter?: Maybe<Character>;
  /** if targetItemType is Note */
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toNote?: Maybe<Note>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
};

export type MintModuleAvgAggregate = {
  __typename?: 'MintModuleAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  toCharacterId?: Maybe<Scalars['Float']['output']>;
  toNoteId?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type MintModuleCount = {
  __typename?: 'MintModuleCount';
  feeds: Scalars['Int']['output'];
};

export type MintModuleCountAggregate = {
  __typename?: 'MintModuleCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  contractAddress: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  initData: Scalars['Int']['output'];
  linkValue: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  returnData: Scalars['Int']['output'];
  targetItemType: Scalars['Int']['output'];
  toCharacterId: Scalars['Int']['output'];
  toNoteId: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
};

export type MintModuleListRelationFilter = {
  every?: InputMaybe<MintModuleWhereInput>;
  none?: InputMaybe<MintModuleWhereInput>;
  some?: InputMaybe<MintModuleWhereInput>;
};

export type MintModuleMaxAggregate = {
  __typename?: 'MintModuleMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  initData?: Maybe<Scalars['String']['output']>;
  linkValue?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  returnData?: Maybe<Scalars['String']['output']>;
  targetItemType?: Maybe<MintModuleTargetItemType>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type MintModuleMinAggregate = {
  __typename?: 'MintModuleMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  initData?: Maybe<Scalars['String']['output']>;
  linkValue?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  returnData?: Maybe<Scalars['String']['output']>;
  targetItemType?: Maybe<MintModuleTargetItemType>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type MintModuleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MintModuleSumAggregate = {
  __typename?: 'MintModuleSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export enum MintModuleTargetItemType {
  Note = 'Note'
}

export type MintModuleWhereInput = {
  AND?: InputMaybe<Array<MintModuleWhereInput>>;
  NOT?: InputMaybe<Array<MintModuleWhereInput>>;
  OR?: InputMaybe<Array<MintModuleWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  contractAddress?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  initData?: InputMaybe<StringFilter>;
  linkValue?: InputMaybe<StringFilter>;
  logIndex?: InputMaybe<IntFilter>;
  operator?: InputMaybe<StringFilter>;
  returnData?: InputMaybe<StringFilter>;
  targetItemType?: InputMaybe<EnumMintModuleTargetItemTypeFilter>;
  toCharacter?: InputMaybe<CharacterWhereInput>;
  toCharacterId?: InputMaybe<IntNullableFilter>;
  toNote?: InputMaybe<NoteWhereInput>;
  toNoteId?: InputMaybe<IntNullableFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
};

export type MintedNote = {
  __typename?: 'MintedNote';
  _count: MintedNoteCount;
  blockNumber: Scalars['Int']['output'];
  contractAddress: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  fromAddress: Scalars['String']['output'];
  logIndex: Scalars['Int']['output'];
  note?: Maybe<Note>;
  noteCharacter: Character;
  noteCharacterId: Scalars['Int']['output'];
  noteId: Scalars['Int']['output'];
  operator: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  tokenId: Scalars['Int']['output'];
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
};

export type MintedNoteAvgAggregate = {
  __typename?: 'MintedNoteAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  noteCharacterId?: Maybe<Scalars['Float']['output']>;
  noteId?: Maybe<Scalars['Float']['output']>;
  tokenId?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type MintedNoteAvgAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noteCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  noteId?: InputMaybe<Scalars['Boolean']['input']>;
  tokenId?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MintedNoteAvgOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  noteCharacterId?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
};

export type MintedNoteContractAddressTokenIdCompoundUniqueInput = {
  contractAddress: Scalars['String']['input'];
  tokenId: Scalars['Int']['input'];
};

export type MintedNoteCount = {
  __typename?: 'MintedNoteCount';
  feeds: Scalars['Int']['output'];
};

export type MintedNoteCountAggregate = {
  __typename?: 'MintedNoteCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  contractAddress: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  fromAddress: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  noteCharacterId: Scalars['Int']['output'];
  noteId: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  owner: Scalars['Int']['output'];
  tokenId: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
};

export type MintedNoteCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  contractAddress?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  fromAddress?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noteCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  noteId?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  tokenId?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MintedNoteCountOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  contractAddress?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  fromAddress?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  noteCharacterId?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
};

export type MintedNoteListRelationFilter = {
  every?: InputMaybe<MintedNoteWhereInput>;
  none?: InputMaybe<MintedNoteWhereInput>;
  some?: InputMaybe<MintedNoteWhereInput>;
};

export type MintedNoteMaxAggregate = {
  __typename?: 'MintedNoteMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteCharacterId?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  tokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type MintedNoteMaxAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  contractAddress?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  fromAddress?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noteCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  noteId?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  tokenId?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MintedNoteMaxOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  contractAddress?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  fromAddress?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  noteCharacterId?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
};

export type MintedNoteMinAggregate = {
  __typename?: 'MintedNoteMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fromAddress?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteCharacterId?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  tokenId?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type MintedNoteMinAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  contractAddress?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  fromAddress?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noteCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  noteId?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  tokenId?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MintedNoteMinOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  contractAddress?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  fromAddress?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  noteCharacterId?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
};

export type MintedNoteMinted_Note_ContractAddress_TokenId_UniqueCompoundUniqueInput = {
  contractAddress: Scalars['String']['input'];
  tokenId: Scalars['Int']['input'];
};

export type MintedNoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum MintedNoteOrderByRelevanceFieldEnum {
  ContractAddress = 'contractAddress',
  FromAddress = 'fromAddress',
  Operator = 'operator',
  Owner = 'owner',
  TransactionHash = 'transactionHash',
  UpdatedTransactionHash = 'updatedTransactionHash'
}

export type MintedNoteOrderByRelevanceInput = {
  fields: Array<MintedNoteOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type MintedNoteOrderByWithAggregationInput = {
  _avg?: InputMaybe<MintedNoteAvgOrderByAggregateInput>;
  _count?: InputMaybe<MintedNoteCountOrderByAggregateInput>;
  _max?: InputMaybe<MintedNoteMaxOrderByAggregateInput>;
  _min?: InputMaybe<MintedNoteMinOrderByAggregateInput>;
  _sum?: InputMaybe<MintedNoteSumOrderByAggregateInput>;
  blockNumber?: InputMaybe<SortOrder>;
  contractAddress?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  fromAddress?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  noteCharacterId?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
};

export type MintedNoteOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<MintedNoteOrderByRelevanceInput>;
  blockNumber?: InputMaybe<SortOrder>;
  contractAddress?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  feeds?: InputMaybe<FeedOrderByRelationAggregateInput>;
  fromAddress?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  note?: InputMaybe<NoteOrderByWithRelationAndSearchRelevanceInput>;
  noteCharacter?: InputMaybe<CharacterOrderByWithRelationAndSearchRelevanceInput>;
  noteCharacterId?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
};

export enum MintedNoteScalarFieldEnum {
  BlockNumber = 'blockNumber',
  ContractAddress = 'contractAddress',
  CreatedAt = 'createdAt',
  FromAddress = 'fromAddress',
  LogIndex = 'logIndex',
  NoteCharacterId = 'noteCharacterId',
  NoteId = 'noteId',
  Operator = 'operator',
  Owner = 'owner',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash',
  UpdatedAt = 'updatedAt',
  UpdatedBlockNumber = 'updatedBlockNumber',
  UpdatedLogIndex = 'updatedLogIndex',
  UpdatedTransactionHash = 'updatedTransactionHash'
}

export type MintedNoteScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MintedNoteScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MintedNoteScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MintedNoteScalarWhereWithAggregatesInput>>;
  blockNumber?: InputMaybe<IntWithAggregatesFilter>;
  contractAddress?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  fromAddress?: InputMaybe<StringWithAggregatesFilter>;
  logIndex?: InputMaybe<IntWithAggregatesFilter>;
  noteCharacterId?: InputMaybe<IntWithAggregatesFilter>;
  noteId?: InputMaybe<IntWithAggregatesFilter>;
  operator?: InputMaybe<StringWithAggregatesFilter>;
  owner?: InputMaybe<StringWithAggregatesFilter>;
  tokenId?: InputMaybe<IntWithAggregatesFilter>;
  transactionHash?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  updatedBlockNumber?: InputMaybe<IntWithAggregatesFilter>;
  updatedLogIndex?: InputMaybe<IntWithAggregatesFilter>;
  updatedTransactionHash?: InputMaybe<StringWithAggregatesFilter>;
};

export type MintedNoteSumAggregate = {
  __typename?: 'MintedNoteSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteCharacterId?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  tokenId?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type MintedNoteSumAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noteCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  noteId?: InputMaybe<Scalars['Boolean']['input']>;
  tokenId?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MintedNoteSumOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  noteCharacterId?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  tokenId?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
};

export type MintedNoteWhereInput = {
  AND?: InputMaybe<Array<MintedNoteWhereInput>>;
  NOT?: InputMaybe<Array<MintedNoteWhereInput>>;
  OR?: InputMaybe<Array<MintedNoteWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  contractAddress?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  fromAddress?: InputMaybe<StringFilter>;
  logIndex?: InputMaybe<IntFilter>;
  note?: InputMaybe<NoteWhereInput>;
  noteCharacter?: InputMaybe<CharacterWhereInput>;
  noteCharacterId?: InputMaybe<IntFilter>;
  noteId?: InputMaybe<IntFilter>;
  operator?: InputMaybe<StringFilter>;
  owner?: InputMaybe<StringFilter>;
  tokenId?: InputMaybe<IntFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
};

export type MintedNoteWhereUniqueInput = {
  contractAddress_tokenId?: InputMaybe<MintedNoteContractAddressTokenIdCompoundUniqueInput>;
  minted_note_contractAddress_tokenId_unique?: InputMaybe<MintedNoteMinted_Note_ContractAddress_TokenId_UniqueCompoundUniqueInput>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumFeedTypeFilter = {
  equals?: InputMaybe<FeedType>;
  in?: InputMaybe<Array<FeedType>>;
  not?: InputMaybe<NestedEnumFeedTypeFilter>;
  notIn?: InputMaybe<Array<FeedType>>;
};

export type NestedEnumLinkItemTypeFilter = {
  equals?: InputMaybe<LinkItemType>;
  in?: InputMaybe<Array<LinkItemType>>;
  not?: InputMaybe<NestedEnumLinkItemTypeFilter>;
  notIn?: InputMaybe<Array<LinkItemType>>;
};

export type NestedEnumLinkItemTypeNullableFilter = {
  equals?: InputMaybe<LinkItemType>;
  in?: InputMaybe<Array<LinkItemType>>;
  not?: InputMaybe<NestedEnumLinkItemTypeNullableFilter>;
  notIn?: InputMaybe<Array<LinkItemType>>;
};

export type NestedEnumLinkItemTypeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumLinkItemTypeNullableFilter>;
  _min?: InputMaybe<NestedEnumLinkItemTypeNullableFilter>;
  equals?: InputMaybe<LinkItemType>;
  in?: InputMaybe<Array<LinkItemType>>;
  not?: InputMaybe<NestedEnumLinkItemTypeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<LinkItemType>>;
};

export type NestedEnumLinkItemTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumLinkItemTypeFilter>;
  _min?: InputMaybe<NestedEnumLinkItemTypeFilter>;
  equals?: InputMaybe<LinkItemType>;
  in?: InputMaybe<Array<LinkItemType>>;
  not?: InputMaybe<NestedEnumLinkItemTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<LinkItemType>>;
};

export type NestedEnumLinkModuleTargetItemTypeFilter = {
  equals?: InputMaybe<LinkModuleTargetItemType>;
  in?: InputMaybe<Array<LinkModuleTargetItemType>>;
  not?: InputMaybe<NestedEnumLinkModuleTargetItemTypeFilter>;
  notIn?: InputMaybe<Array<LinkModuleTargetItemType>>;
};

export type NestedEnumLinkModuleTargetItemTypeNullableFilter = {
  equals?: InputMaybe<LinkModuleTargetItemType>;
  in?: InputMaybe<Array<LinkModuleTargetItemType>>;
  not?: InputMaybe<NestedEnumLinkModuleTargetItemTypeNullableFilter>;
  notIn?: InputMaybe<Array<LinkModuleTargetItemType>>;
};

export type NestedEnumMetadataStatusFilter = {
  equals?: InputMaybe<MetadataStatus>;
  in?: InputMaybe<Array<MetadataStatus>>;
  not?: InputMaybe<NestedEnumMetadataStatusFilter>;
  notIn?: InputMaybe<Array<MetadataStatus>>;
};

export type NestedEnumMetadataTypeNullableFilter = {
  equals?: InputMaybe<MetadataType>;
  in?: InputMaybe<Array<MetadataType>>;
  not?: InputMaybe<NestedEnumMetadataTypeNullableFilter>;
  notIn?: InputMaybe<Array<MetadataType>>;
};

export type NestedEnumMintModuleTargetItemTypeFilter = {
  equals?: InputMaybe<MintModuleTargetItemType>;
  in?: InputMaybe<Array<MintModuleTargetItemType>>;
  not?: InputMaybe<NestedEnumMintModuleTargetItemTypeFilter>;
  notIn?: InputMaybe<Array<MintModuleTargetItemType>>;
};

export type NestedEnumMintModuleTargetItemTypeNullableFilter = {
  equals?: InputMaybe<MintModuleTargetItemType>;
  in?: InputMaybe<Array<MintModuleTargetItemType>>;
  not?: InputMaybe<NestedEnumMintModuleTargetItemTypeNullableFilter>;
  notIn?: InputMaybe<Array<MintModuleTargetItemType>>;
};

export type NestedEnumNotificationTypeFilter = {
  equals?: InputMaybe<NotificationType>;
  in?: InputMaybe<Array<NotificationType>>;
  not?: InputMaybe<NestedEnumNotificationTypeFilter>;
  notIn?: InputMaybe<Array<NotificationType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Note = {
  __typename?: 'Note';
  _count: NoteCount;
  blockNumber: Scalars['Int']['output'];
  /** @DtoEntityHidden */
  character?: Maybe<Character>;
  characterId: Scalars['Int']['output'];
  /** NFT contract address if this note has been minted by someone */
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deleted: Scalars['Boolean']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  /** @DtoEntityHidden */
  fromNotes?: Maybe<Array<Note>>;
  /** e.g. AnyUri, Character, ERC721, ... */
  linkItemType?: Maybe<LinkItemType>;
  linkKey: Scalars['String']['output'];
  /** @DtoEntityHidden */
  links?: Maybe<Array<Link>>;
  locked: Scalars['Boolean']['output'];
  logIndex: Scalars['Int']['output'];
  metadata?: Maybe<Metadata>;
  /** @DtoEntityHidden */
  mintedNotes?: Maybe<Array<MintedNote>>;
  noteId: Scalars['Int']['output'];
  /** @DtoEntityHidden */
  notes?: Maybe<Array<Note>>;
  operator: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  /** the `date_published` field of the metadata */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @DtoEntityHidden */
  receivedTips?: Maybe<Array<Tip>>;
  /** @DtoEntityHidden */
  stat?: Maybe<NoteStat>;
  /** if linkItemType is Address */
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacter?: Maybe<Character>;
  /** if linkItemType is Character or Note */
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  /** if linkItemType is ERC721 */
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toHeadCharacter?: Maybe<Character>;
  /** if linkItemType is Note and is nested */
  toHeadCharacterId?: Maybe<Scalars['Int']['output']>;
  toHeadNote?: Maybe<Note>;
  /** if linkItemType is Note and is nested */
  toHeadNoteId?: Maybe<Scalars['Int']['output']>;
  /** @DtoEntityHidden */
  toLinkModules?: Maybe<Array<LinkModule>>;
  toLinklist?: Maybe<Linklist>;
  /** if linkItemType is Linklist */
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  /** @DtoEntityHidden */
  toMintModules?: Maybe<Array<MintModule>>;
  toNote?: Maybe<Note>;
  /** if linkItemType is Note */
  toNoteId?: Maybe<Scalars['Int']['output']>;
  /** if linkItemType is ERC721 */
  toTokenId?: Maybe<Scalars['Int']['output']>;
  /** if linkItemType is AnyUri */
  toUri?: Maybe<Scalars['String']['output']>;
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};

export type NoteAvgAggregate = {
  __typename?: 'NoteAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  characterId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  noteId?: Maybe<Scalars['Float']['output']>;
  toCharacterId?: Maybe<Scalars['Float']['output']>;
  toHeadCharacterId?: Maybe<Scalars['Float']['output']>;
  toHeadNoteId?: Maybe<Scalars['Float']['output']>;
  toLinklistId?: Maybe<Scalars['Float']['output']>;
  toNoteId?: Maybe<Scalars['Float']['output']>;
  toTokenId?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type NoteAvgAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  characterId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noteId?: InputMaybe<Scalars['Boolean']['input']>;
  toCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toHeadCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toHeadNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toLinklistId?: InputMaybe<Scalars['Boolean']['input']>;
  toNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toTokenId?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NoteAvgOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  toCharacterId?: InputMaybe<SortOrder>;
  toHeadCharacterId?: InputMaybe<SortOrder>;
  toHeadNoteId?: InputMaybe<SortOrder>;
  toLinklistId?: InputMaybe<SortOrder>;
  toNoteId?: InputMaybe<SortOrder>;
  toTokenId?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
};

export type NoteCharacterIdNoteIdCompoundUniqueInput = {
  characterId: Scalars['Int']['input'];
  noteId: Scalars['Int']['input'];
};

export type NoteCount = {
  __typename?: 'NoteCount';
  feeds: Scalars['Int']['output'];
  fromNotes: Scalars['Int']['output'];
  links: Scalars['Int']['output'];
  mintedNotes: Scalars['Int']['output'];
  notes: Scalars['Int']['output'];
  receivedTips: Scalars['Int']['output'];
  toLinkModules: Scalars['Int']['output'];
  toMintModules: Scalars['Int']['output'];
};

export type NoteCountAggregate = {
  __typename?: 'NoteCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  contractAddress: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  deleted: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  linkItemType: Scalars['Int']['output'];
  linkKey: Scalars['Int']['output'];
  locked: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  noteId: Scalars['Int']['output'];
  operator: Scalars['Int']['output'];
  owner: Scalars['Int']['output'];
  publishedAt: Scalars['Int']['output'];
  toAddress: Scalars['Int']['output'];
  toCharacterId: Scalars['Int']['output'];
  toContractAddress: Scalars['Int']['output'];
  toHeadCharacterId: Scalars['Int']['output'];
  toHeadNoteId: Scalars['Int']['output'];
  toLinklistId: Scalars['Int']['output'];
  toNoteId: Scalars['Int']['output'];
  toTokenId: Scalars['Int']['output'];
  toUri: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
  uri: Scalars['Int']['output'];
};

export type NoteCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  characterId?: InputMaybe<Scalars['Boolean']['input']>;
  contractAddress?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Boolean']['input']>;
  linkItemType?: InputMaybe<Scalars['Boolean']['input']>;
  linkKey?: InputMaybe<Scalars['Boolean']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noteId?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['Boolean']['input']>;
  toAddress?: InputMaybe<Scalars['Boolean']['input']>;
  toCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toContractAddress?: InputMaybe<Scalars['Boolean']['input']>;
  toHeadCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toHeadNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toLinklistId?: InputMaybe<Scalars['Boolean']['input']>;
  toNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toTokenId?: InputMaybe<Scalars['Boolean']['input']>;
  toUri?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NoteCountOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  contractAddress?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  linkItemType?: InputMaybe<SortOrder>;
  linkKey?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  publishedAt?: InputMaybe<SortOrder>;
  toAddress?: InputMaybe<SortOrder>;
  toCharacterId?: InputMaybe<SortOrder>;
  toContractAddress?: InputMaybe<SortOrder>;
  toHeadCharacterId?: InputMaybe<SortOrder>;
  toHeadNoteId?: InputMaybe<SortOrder>;
  toLinklistId?: InputMaybe<SortOrder>;
  toNoteId?: InputMaybe<SortOrder>;
  toTokenId?: InputMaybe<SortOrder>;
  toUri?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrder>;
};

export type NoteListRelationFilter = {
  every?: InputMaybe<NoteWhereInput>;
  none?: InputMaybe<NoteWhereInput>;
  some?: InputMaybe<NoteWhereInput>;
};

export type NoteMaxAggregate = {
  __typename?: 'NoteMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  linkItemType?: Maybe<LinkItemType>;
  linkKey?: Maybe<Scalars['String']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toHeadCharacterId?: Maybe<Scalars['Int']['output']>;
  toHeadNoteId?: Maybe<Scalars['Int']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  toUri?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type NoteMaxAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  characterId?: InputMaybe<Scalars['Boolean']['input']>;
  contractAddress?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Boolean']['input']>;
  linkItemType?: InputMaybe<Scalars['Boolean']['input']>;
  linkKey?: InputMaybe<Scalars['Boolean']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noteId?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['Boolean']['input']>;
  toAddress?: InputMaybe<Scalars['Boolean']['input']>;
  toCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toContractAddress?: InputMaybe<Scalars['Boolean']['input']>;
  toHeadCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toHeadNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toLinklistId?: InputMaybe<Scalars['Boolean']['input']>;
  toNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toTokenId?: InputMaybe<Scalars['Boolean']['input']>;
  toUri?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NoteMaxOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  contractAddress?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  linkItemType?: InputMaybe<SortOrder>;
  linkKey?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  publishedAt?: InputMaybe<SortOrder>;
  toAddress?: InputMaybe<SortOrder>;
  toCharacterId?: InputMaybe<SortOrder>;
  toContractAddress?: InputMaybe<SortOrder>;
  toHeadCharacterId?: InputMaybe<SortOrder>;
  toHeadNoteId?: InputMaybe<SortOrder>;
  toLinklistId?: InputMaybe<SortOrder>;
  toNoteId?: InputMaybe<SortOrder>;
  toTokenId?: InputMaybe<SortOrder>;
  toUri?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrder>;
};

export type NoteMinAggregate = {
  __typename?: 'NoteMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  linkItemType?: Maybe<LinkItemType>;
  linkKey?: Maybe<Scalars['String']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  operator?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toContractAddress?: Maybe<Scalars['String']['output']>;
  toHeadCharacterId?: Maybe<Scalars['Int']['output']>;
  toHeadNoteId?: Maybe<Scalars['Int']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  toUri?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type NoteMinAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  characterId?: InputMaybe<Scalars['Boolean']['input']>;
  contractAddress?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  deletedAt?: InputMaybe<Scalars['Boolean']['input']>;
  linkItemType?: InputMaybe<Scalars['Boolean']['input']>;
  linkKey?: InputMaybe<Scalars['Boolean']['input']>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noteId?: InputMaybe<Scalars['Boolean']['input']>;
  operator?: InputMaybe<Scalars['Boolean']['input']>;
  owner?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['Boolean']['input']>;
  toAddress?: InputMaybe<Scalars['Boolean']['input']>;
  toCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toContractAddress?: InputMaybe<Scalars['Boolean']['input']>;
  toHeadCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toHeadNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toLinklistId?: InputMaybe<Scalars['Boolean']['input']>;
  toNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toTokenId?: InputMaybe<Scalars['Boolean']['input']>;
  toUri?: InputMaybe<Scalars['Boolean']['input']>;
  transactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
  updatedTransactionHash?: InputMaybe<Scalars['Boolean']['input']>;
  uri?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NoteMinOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  contractAddress?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  linkItemType?: InputMaybe<SortOrder>;
  linkKey?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  publishedAt?: InputMaybe<SortOrder>;
  toAddress?: InputMaybe<SortOrder>;
  toCharacterId?: InputMaybe<SortOrder>;
  toContractAddress?: InputMaybe<SortOrder>;
  toHeadCharacterId?: InputMaybe<SortOrder>;
  toHeadNoteId?: InputMaybe<SortOrder>;
  toLinklistId?: InputMaybe<SortOrder>;
  toNoteId?: InputMaybe<SortOrder>;
  toTokenId?: InputMaybe<SortOrder>;
  toUri?: InputMaybe<SortOrder>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrder>;
};

export type NoteNote_CharacterId_NoteId_UniqueCompoundUniqueInput = {
  characterId: Scalars['Int']['input'];
  noteId: Scalars['Int']['input'];
};

export type NoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum NoteOrderByRelevanceFieldEnum {
  ContractAddress = 'contractAddress',
  LinkKey = 'linkKey',
  Operator = 'operator',
  Owner = 'owner',
  ToAddress = 'toAddress',
  ToContractAddress = 'toContractAddress',
  ToUri = 'toUri',
  TransactionHash = 'transactionHash',
  UpdatedTransactionHash = 'updatedTransactionHash',
  Uri = 'uri'
}

export type NoteOrderByRelevanceInput = {
  fields: Array<NoteOrderByRelevanceFieldEnum>;
  search: Scalars['String']['input'];
  sort: SortOrder;
};

export type NoteOrderByWithAggregationInput = {
  _avg?: InputMaybe<NoteAvgOrderByAggregateInput>;
  _count?: InputMaybe<NoteCountOrderByAggregateInput>;
  _max?: InputMaybe<NoteMaxOrderByAggregateInput>;
  _min?: InputMaybe<NoteMinOrderByAggregateInput>;
  _sum?: InputMaybe<NoteSumOrderByAggregateInput>;
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  contractAddress?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  linkItemType?: InputMaybe<SortOrderInput>;
  linkKey?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  publishedAt?: InputMaybe<SortOrderInput>;
  toAddress?: InputMaybe<SortOrderInput>;
  toCharacterId?: InputMaybe<SortOrderInput>;
  toContractAddress?: InputMaybe<SortOrderInput>;
  toHeadCharacterId?: InputMaybe<SortOrderInput>;
  toHeadNoteId?: InputMaybe<SortOrderInput>;
  toLinklistId?: InputMaybe<SortOrderInput>;
  toNoteId?: InputMaybe<SortOrderInput>;
  toTokenId?: InputMaybe<SortOrderInput>;
  toUri?: InputMaybe<SortOrderInput>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrderInput>;
};

export type NoteOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<NoteOrderByRelevanceInput>;
  blockNumber?: InputMaybe<SortOrder>;
  character?: InputMaybe<CharacterOrderByWithRelationAndSearchRelevanceInput>;
  characterId?: InputMaybe<SortOrder>;
  contractAddress?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  deleted?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  feeds?: InputMaybe<FeedOrderByRelationAggregateInput>;
  fromNotes?: InputMaybe<NoteOrderByRelationAggregateInput>;
  linkItemType?: InputMaybe<SortOrderInput>;
  linkKey?: InputMaybe<SortOrder>;
  links?: InputMaybe<LinkOrderByRelationAggregateInput>;
  locked?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<MetadataOrderByWithRelationAndSearchRelevanceInput>;
  mintedNotes?: InputMaybe<MintedNoteOrderByRelationAggregateInput>;
  noteId?: InputMaybe<SortOrder>;
  notes?: InputMaybe<NoteOrderByRelationAggregateInput>;
  operator?: InputMaybe<SortOrder>;
  owner?: InputMaybe<SortOrder>;
  publishedAt?: InputMaybe<SortOrderInput>;
  receivedTips?: InputMaybe<TipOrderByRelationAggregateInput>;
  stat?: InputMaybe<NoteStatOrderByWithRelationAndSearchRelevanceInput>;
  toAddress?: InputMaybe<SortOrderInput>;
  toCharacter?: InputMaybe<CharacterOrderByWithRelationAndSearchRelevanceInput>;
  toCharacterId?: InputMaybe<SortOrderInput>;
  toContractAddress?: InputMaybe<SortOrderInput>;
  toHeadCharacter?: InputMaybe<CharacterOrderByWithRelationAndSearchRelevanceInput>;
  toHeadCharacterId?: InputMaybe<SortOrderInput>;
  toHeadNote?: InputMaybe<NoteOrderByWithRelationAndSearchRelevanceInput>;
  toHeadNoteId?: InputMaybe<SortOrderInput>;
  toLinkModules?: InputMaybe<LinkModuleOrderByRelationAggregateInput>;
  toLinklist?: InputMaybe<LinklistOrderByWithRelationAndSearchRelevanceInput>;
  toLinklistId?: InputMaybe<SortOrderInput>;
  toMintModules?: InputMaybe<MintModuleOrderByRelationAggregateInput>;
  toNote?: InputMaybe<NoteOrderByWithRelationAndSearchRelevanceInput>;
  toNoteId?: InputMaybe<SortOrderInput>;
  toTokenId?: InputMaybe<SortOrderInput>;
  toUri?: InputMaybe<SortOrderInput>;
  transactionHash?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
  updatedTransactionHash?: InputMaybe<SortOrder>;
  uri?: InputMaybe<SortOrderInput>;
};

export enum NoteScalarFieldEnum {
  BlockNumber = 'blockNumber',
  CharacterId = 'characterId',
  ContractAddress = 'contractAddress',
  CreatedAt = 'createdAt',
  Deleted = 'deleted',
  DeletedAt = 'deletedAt',
  LinkItemType = 'linkItemType',
  LinkKey = 'linkKey',
  Locked = 'locked',
  LogIndex = 'logIndex',
  NoteId = 'noteId',
  Operator = 'operator',
  Owner = 'owner',
  PublishedAt = 'publishedAt',
  ToAddress = 'toAddress',
  ToCharacterId = 'toCharacterId',
  ToContractAddress = 'toContractAddress',
  ToHeadCharacterId = 'toHeadCharacterId',
  ToHeadNoteId = 'toHeadNoteId',
  ToLinklistId = 'toLinklistId',
  ToNoteId = 'toNoteId',
  ToTokenId = 'toTokenId',
  ToUri = 'toUri',
  TransactionHash = 'transactionHash',
  UpdatedAt = 'updatedAt',
  UpdatedBlockNumber = 'updatedBlockNumber',
  UpdatedLogIndex = 'updatedLogIndex',
  UpdatedTransactionHash = 'updatedTransactionHash',
  Uri = 'uri'
}

export type NoteScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NoteScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NoteScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NoteScalarWhereWithAggregatesInput>>;
  blockNumber?: InputMaybe<IntWithAggregatesFilter>;
  characterId?: InputMaybe<IntWithAggregatesFilter>;
  contractAddress?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deleted?: InputMaybe<BoolWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  linkItemType?: InputMaybe<EnumLinkItemTypeNullableWithAggregatesFilter>;
  linkKey?: InputMaybe<StringWithAggregatesFilter>;
  locked?: InputMaybe<BoolWithAggregatesFilter>;
  logIndex?: InputMaybe<IntWithAggregatesFilter>;
  noteId?: InputMaybe<IntWithAggregatesFilter>;
  operator?: InputMaybe<StringWithAggregatesFilter>;
  owner?: InputMaybe<StringWithAggregatesFilter>;
  publishedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  toAddress?: InputMaybe<StringNullableWithAggregatesFilter>;
  toCharacterId?: InputMaybe<IntNullableWithAggregatesFilter>;
  toContractAddress?: InputMaybe<StringNullableWithAggregatesFilter>;
  toHeadCharacterId?: InputMaybe<IntNullableWithAggregatesFilter>;
  toHeadNoteId?: InputMaybe<IntNullableWithAggregatesFilter>;
  toLinklistId?: InputMaybe<IntNullableWithAggregatesFilter>;
  toNoteId?: InputMaybe<IntNullableWithAggregatesFilter>;
  toTokenId?: InputMaybe<IntNullableWithAggregatesFilter>;
  toUri?: InputMaybe<StringNullableWithAggregatesFilter>;
  transactionHash?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  updatedBlockNumber?: InputMaybe<IntWithAggregatesFilter>;
  updatedLogIndex?: InputMaybe<IntWithAggregatesFilter>;
  updatedTransactionHash?: InputMaybe<StringWithAggregatesFilter>;
  uri?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type NoteStat = {
  __typename?: 'NoteStat';
  characterId: Scalars['Int']['output'];
  /** @DtoEntityHidden */
  note: Note;
  noteId: Scalars['Int']['output'];
  viewCount: Scalars['Int']['output'];
  viewDetailCount: Scalars['Int']['output'];
  viewInListCount: Scalars['Int']['output'];
};

export type NoteStatAvgAggregate = {
  __typename?: 'NoteStatAvgAggregate';
  characterId?: Maybe<Scalars['Float']['output']>;
  noteId?: Maybe<Scalars['Float']['output']>;
  viewCount?: Maybe<Scalars['Float']['output']>;
  viewDetailCount?: Maybe<Scalars['Float']['output']>;
  viewInListCount?: Maybe<Scalars['Float']['output']>;
};

export type NoteStatCountAggregate = {
  __typename?: 'NoteStatCountAggregate';
  _all: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  noteId: Scalars['Int']['output'];
  viewCount: Scalars['Int']['output'];
  viewDetailCount: Scalars['Int']['output'];
  viewInListCount: Scalars['Int']['output'];
};

export type NoteStatMaxAggregate = {
  __typename?: 'NoteStatMaxAggregate';
  characterId?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
  viewDetailCount?: Maybe<Scalars['Int']['output']>;
  viewInListCount?: Maybe<Scalars['Int']['output']>;
};

export type NoteStatMinAggregate = {
  __typename?: 'NoteStatMinAggregate';
  characterId?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
  viewDetailCount?: Maybe<Scalars['Int']['output']>;
  viewInListCount?: Maybe<Scalars['Int']['output']>;
};

export type NoteStatOrderByWithRelationAndSearchRelevanceInput = {
  characterId?: InputMaybe<SortOrder>;
  note?: InputMaybe<NoteOrderByWithRelationAndSearchRelevanceInput>;
  noteId?: InputMaybe<SortOrder>;
  viewCount?: InputMaybe<SortOrder>;
  viewDetailCount?: InputMaybe<SortOrder>;
  viewInListCount?: InputMaybe<SortOrder>;
};

export type NoteStatSumAggregate = {
  __typename?: 'NoteStatSumAggregate';
  characterId?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
  viewDetailCount?: Maybe<Scalars['Int']['output']>;
  viewInListCount?: Maybe<Scalars['Int']['output']>;
};

export type NoteStatWhereInput = {
  AND?: InputMaybe<Array<NoteStatWhereInput>>;
  NOT?: InputMaybe<Array<NoteStatWhereInput>>;
  OR?: InputMaybe<Array<NoteStatWhereInput>>;
  characterId?: InputMaybe<IntFilter>;
  note?: InputMaybe<NoteWhereInput>;
  noteId?: InputMaybe<IntFilter>;
  viewCount?: InputMaybe<IntFilter>;
  viewDetailCount?: InputMaybe<IntFilter>;
  viewInListCount?: InputMaybe<IntFilter>;
};

export type NoteSumAggregate = {
  __typename?: 'NoteSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  noteId?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toHeadCharacterId?: Maybe<Scalars['Int']['output']>;
  toHeadNoteId?: Maybe<Scalars['Int']['output']>;
  toLinklistId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  toTokenId?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type NoteSumAggregateInput = {
  blockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  characterId?: InputMaybe<Scalars['Boolean']['input']>;
  logIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noteId?: InputMaybe<Scalars['Boolean']['input']>;
  toCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toHeadCharacterId?: InputMaybe<Scalars['Boolean']['input']>;
  toHeadNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toLinklistId?: InputMaybe<Scalars['Boolean']['input']>;
  toNoteId?: InputMaybe<Scalars['Boolean']['input']>;
  toTokenId?: InputMaybe<Scalars['Boolean']['input']>;
  updatedBlockNumber?: InputMaybe<Scalars['Boolean']['input']>;
  updatedLogIndex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NoteSumOrderByAggregateInput = {
  blockNumber?: InputMaybe<SortOrder>;
  characterId?: InputMaybe<SortOrder>;
  logIndex?: InputMaybe<SortOrder>;
  noteId?: InputMaybe<SortOrder>;
  toCharacterId?: InputMaybe<SortOrder>;
  toHeadCharacterId?: InputMaybe<SortOrder>;
  toHeadNoteId?: InputMaybe<SortOrder>;
  toLinklistId?: InputMaybe<SortOrder>;
  toNoteId?: InputMaybe<SortOrder>;
  toTokenId?: InputMaybe<SortOrder>;
  updatedBlockNumber?: InputMaybe<SortOrder>;
  updatedLogIndex?: InputMaybe<SortOrder>;
};

export type NoteWhereInput = {
  AND?: InputMaybe<Array<NoteWhereInput>>;
  NOT?: InputMaybe<Array<NoteWhereInput>>;
  OR?: InputMaybe<Array<NoteWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  character?: InputMaybe<CharacterWhereInput>;
  characterId?: InputMaybe<IntFilter>;
  contractAddress?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deleted?: InputMaybe<BoolFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  fromNotes?: InputMaybe<NoteListRelationFilter>;
  linkItemType?: InputMaybe<EnumLinkItemTypeNullableFilter>;
  linkKey?: InputMaybe<StringFilter>;
  links?: InputMaybe<LinkListRelationFilter>;
  locked?: InputMaybe<BoolFilter>;
  logIndex?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<MetadataWhereInput>;
  mintedNotes?: InputMaybe<MintedNoteListRelationFilter>;
  noteId?: InputMaybe<IntFilter>;
  notes?: InputMaybe<NoteListRelationFilter>;
  operator?: InputMaybe<StringFilter>;
  owner?: InputMaybe<StringFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  receivedTips?: InputMaybe<TipListRelationFilter>;
  stat?: InputMaybe<NoteStatWhereInput>;
  toAddress?: InputMaybe<StringNullableFilter>;
  toCharacter?: InputMaybe<CharacterWhereInput>;
  toCharacterId?: InputMaybe<IntNullableFilter>;
  toContractAddress?: InputMaybe<StringNullableFilter>;
  toHeadCharacter?: InputMaybe<CharacterWhereInput>;
  toHeadCharacterId?: InputMaybe<IntNullableFilter>;
  toHeadNote?: InputMaybe<NoteWhereInput>;
  toHeadNoteId?: InputMaybe<IntNullableFilter>;
  toLinkModules?: InputMaybe<LinkModuleListRelationFilter>;
  toLinklist?: InputMaybe<LinklistWhereInput>;
  toLinklistId?: InputMaybe<IntNullableFilter>;
  toMintModules?: InputMaybe<MintModuleListRelationFilter>;
  toNote?: InputMaybe<NoteWhereInput>;
  toNoteId?: InputMaybe<IntNullableFilter>;
  toTokenId?: InputMaybe<IntNullableFilter>;
  toUri?: InputMaybe<StringNullableFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
  uri?: InputMaybe<StringNullableFilter>;
};

export type NoteWhereUniqueInput = {
  characterId_noteId?: InputMaybe<NoteCharacterIdNoteIdCompoundUniqueInput>;
  note_characterId_noteId_unique?: InputMaybe<NoteNote_CharacterId_NoteId_UniqueCompoundUniqueInput>;
};

export type Notification = {
  __typename?: 'Notification';
  blockNumber: Scalars['Int']['output'];
  character?: Maybe<Character>;
  characterId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  feed: Feed;
  logIndex: Scalars['Int']['output'];
  transactionHash: Scalars['String']['output'];
  type: NotificationType;
};

export type NotificationAvgAggregate = {
  __typename?: 'NotificationAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  characterId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
};

export type NotificationCountAggregate = {
  __typename?: 'NotificationCountAggregate';
  _all: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type NotificationListRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationMaxAggregate = {
  __typename?: 'NotificationMaxAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  type?: Maybe<NotificationType>;
};

export type NotificationMinAggregate = {
  __typename?: 'NotificationMinAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  type?: Maybe<NotificationType>;
};

export type NotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NotificationReadAvgAggregate = {
  __typename?: 'NotificationReadAvgAggregate';
  characterId?: Maybe<Scalars['Float']['output']>;
};

export type NotificationReadCountAggregate = {
  __typename?: 'NotificationReadCountAggregate';
  _all: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  lastReadCreatedAt: Scalars['Int']['output'];
};

export type NotificationReadMaxAggregate = {
  __typename?: 'NotificationReadMaxAggregate';
  characterId?: Maybe<Scalars['Int']['output']>;
  lastReadCreatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NotificationReadMinAggregate = {
  __typename?: 'NotificationReadMinAggregate';
  characterId?: Maybe<Scalars['Int']['output']>;
  lastReadCreatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NotificationReadSumAggregate = {
  __typename?: 'NotificationReadSumAggregate';
  characterId?: Maybe<Scalars['Int']['output']>;
};

export type NotificationSumAggregate = {
  __typename?: 'NotificationSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
};

export enum NotificationType {
  Linked = 'LINKED',
  Mentioned = 'MENTIONED',
  NoteMinted = 'NOTE_MINTED',
  NotePosted = 'NOTE_POSTED',
  OperatorAdded = 'OPERATOR_ADDED',
  OperatorRemoved = 'OPERATOR_REMOVED',
  Tipped = 'TIPPED',
  TipConfigSet = 'TIP_CONFIG_SET',
  Unlinked = 'UNLINKED'
}

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  blockNumber?: InputMaybe<IntFilter>;
  character?: InputMaybe<CharacterWhereInput>;
  characterId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  feed?: InputMaybe<FeedWhereInput>;
  logIndex?: InputMaybe<IntFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumNotificationTypeFilter>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  character: Character;
  characterAggregate: AggregateCharacter;
  characterCount: Scalars['Int']['output'];
  characterGroupBy: Array<Character>;
  characters: Array<Character>;
  link: Link;
  linkAggregate: AggregateLink;
  linkCount: Scalars['Int']['output'];
  linkGroupBy: Array<Link>;
  linklist: Linklist;
  linklistAggregate: AggregateLinklist;
  linklistCount: Scalars['Int']['output'];
  linklistGroupBy: Array<Linklist>;
  linklists: Array<Linklist>;
  links: Array<Link>;
  mintedNote: MintedNote;
  mintedNoteAggregate: AggregateMintedNote;
  mintedNoteCount: Scalars['Int']['output'];
  mintedNoteGroupBy: Array<MintedNote>;
  mintedNotes: Array<MintedNote>;
  nonTestCharacters: Array<Character>;
  note: Note;
  noteAggregate: AggregateNote;
  noteCount: Scalars['Int']['output'];
  noteGroupBy: Array<Note>;
  notes: Array<Note>;
};


export type QueryCharacterArgs = {
  where: CharacterWhereUniqueInput;
};


export type QueryCharacterAggregateArgs = {
  _avg?: InputMaybe<CharacterAvgAggregateInput>;
  _count?: InputMaybe<CharacterCountAggregateInput>;
  _max?: InputMaybe<CharacterMaxAggregateInput>;
  _min?: InputMaybe<CharacterMinAggregateInput>;
  _sum?: InputMaybe<CharacterSumAggregateInput>;
  cursor?: InputMaybe<CharacterWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CharacterOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CharacterWhereInput>;
};


export type QueryCharacterCountArgs = {
  cursor?: InputMaybe<CharacterWhereUniqueInput>;
  distinct?: InputMaybe<Array<CharacterScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CharacterOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CharacterWhereInput>;
};


export type QueryCharacterGroupByArgs = {
  _avg?: InputMaybe<CharacterAvgAggregateInput>;
  _count?: InputMaybe<CharacterCountAggregateInput>;
  _max?: InputMaybe<CharacterMaxAggregateInput>;
  _min?: InputMaybe<CharacterMinAggregateInput>;
  _sum?: InputMaybe<CharacterSumAggregateInput>;
  by: Array<CharacterScalarFieldEnum>;
  having?: InputMaybe<CharacterScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CharacterOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CharacterWhereInput>;
};


export type QueryCharactersArgs = {
  cursor?: InputMaybe<CharacterWhereUniqueInput>;
  distinct?: InputMaybe<Array<CharacterScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CharacterOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CharacterWhereInput>;
};


export type QueryLinkArgs = {
  where: LinkWhereUniqueInput;
};


export type QueryLinkAggregateArgs = {
  _avg?: InputMaybe<LinkAvgAggregateInput>;
  _count?: InputMaybe<LinkCountAggregateInput>;
  _max?: InputMaybe<LinkMaxAggregateInput>;
  _min?: InputMaybe<LinkMinAggregateInput>;
  _sum?: InputMaybe<LinkSumAggregateInput>;
  cursor?: InputMaybe<LinkWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LinkOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinkWhereInput>;
};


export type QueryLinkCountArgs = {
  cursor?: InputMaybe<LinkWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinkScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinkOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinkWhereInput>;
};


export type QueryLinkGroupByArgs = {
  _avg?: InputMaybe<LinkAvgAggregateInput>;
  _count?: InputMaybe<LinkCountAggregateInput>;
  _max?: InputMaybe<LinkMaxAggregateInput>;
  _min?: InputMaybe<LinkMinAggregateInput>;
  _sum?: InputMaybe<LinkSumAggregateInput>;
  by: Array<LinkScalarFieldEnum>;
  having?: InputMaybe<LinkScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LinkOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinkWhereInput>;
};


export type QueryLinklistArgs = {
  where: LinklistWhereUniqueInput;
};


export type QueryLinklistAggregateArgs = {
  _avg?: InputMaybe<LinklistAvgAggregateInput>;
  _count?: InputMaybe<LinklistCountAggregateInput>;
  _max?: InputMaybe<LinklistMaxAggregateInput>;
  _min?: InputMaybe<LinklistMinAggregateInput>;
  _sum?: InputMaybe<LinklistSumAggregateInput>;
  cursor?: InputMaybe<LinklistWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LinklistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinklistWhereInput>;
};


export type QueryLinklistCountArgs = {
  cursor?: InputMaybe<LinklistWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinklistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinklistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinklistWhereInput>;
};


export type QueryLinklistGroupByArgs = {
  _avg?: InputMaybe<LinklistAvgAggregateInput>;
  _count?: InputMaybe<LinklistCountAggregateInput>;
  _max?: InputMaybe<LinklistMaxAggregateInput>;
  _min?: InputMaybe<LinklistMinAggregateInput>;
  _sum?: InputMaybe<LinklistSumAggregateInput>;
  by: Array<LinklistScalarFieldEnum>;
  having?: InputMaybe<LinklistScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LinklistOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinklistWhereInput>;
};


export type QueryLinklistsArgs = {
  cursor?: InputMaybe<LinklistWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinklistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinklistOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinklistWhereInput>;
};


export type QueryLinksArgs = {
  cursor?: InputMaybe<LinkWhereUniqueInput>;
  distinct?: InputMaybe<Array<LinkScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LinkOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinkWhereInput>;
};


export type QueryMintedNoteArgs = {
  where: MintedNoteWhereUniqueInput;
};


export type QueryMintedNoteAggregateArgs = {
  _avg?: InputMaybe<MintedNoteAvgAggregateInput>;
  _count?: InputMaybe<MintedNoteCountAggregateInput>;
  _max?: InputMaybe<MintedNoteMaxAggregateInput>;
  _min?: InputMaybe<MintedNoteMinAggregateInput>;
  _sum?: InputMaybe<MintedNoteSumAggregateInput>;
  cursor?: InputMaybe<MintedNoteWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MintedNoteOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MintedNoteWhereInput>;
};


export type QueryMintedNoteCountArgs = {
  cursor?: InputMaybe<MintedNoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<MintedNoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MintedNoteOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MintedNoteWhereInput>;
};


export type QueryMintedNoteGroupByArgs = {
  _avg?: InputMaybe<MintedNoteAvgAggregateInput>;
  _count?: InputMaybe<MintedNoteCountAggregateInput>;
  _max?: InputMaybe<MintedNoteMaxAggregateInput>;
  _min?: InputMaybe<MintedNoteMinAggregateInput>;
  _sum?: InputMaybe<MintedNoteSumAggregateInput>;
  by: Array<MintedNoteScalarFieldEnum>;
  having?: InputMaybe<MintedNoteScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MintedNoteOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MintedNoteWhereInput>;
};


export type QueryMintedNotesArgs = {
  cursor?: InputMaybe<MintedNoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<MintedNoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MintedNoteOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MintedNoteWhereInput>;
};


export type QueryNonTestCharactersArgs = {
  cursor?: InputMaybe<CharacterWhereUniqueInput>;
  distinct?: InputMaybe<Array<CharacterScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CharacterOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CharacterWhereInput>;
};


export type QueryNoteArgs = {
  where: NoteWhereUniqueInput;
};


export type QueryNoteAggregateArgs = {
  _avg?: InputMaybe<NoteAvgAggregateInput>;
  _count?: InputMaybe<NoteCountAggregateInput>;
  _max?: InputMaybe<NoteMaxAggregateInput>;
  _min?: InputMaybe<NoteMinAggregateInput>;
  _sum?: InputMaybe<NoteSumAggregateInput>;
  cursor?: InputMaybe<NoteWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NoteOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NoteWhereInput>;
};


export type QueryNoteCountArgs = {
  cursor?: InputMaybe<NoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<NoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NoteOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NoteWhereInput>;
};


export type QueryNoteGroupByArgs = {
  _avg?: InputMaybe<NoteAvgAggregateInput>;
  _count?: InputMaybe<NoteCountAggregateInput>;
  _max?: InputMaybe<NoteMaxAggregateInput>;
  _min?: InputMaybe<NoteMinAggregateInput>;
  _sum?: InputMaybe<NoteSumAggregateInput>;
  by: Array<NoteScalarFieldEnum>;
  having?: InputMaybe<NoteScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NoteOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NoteWhereInput>;
};


export type QueryNotesArgs = {
  cursor?: InputMaybe<NoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<NoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NoteOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NoteWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tip = {
  __typename?: 'Tip';
  _count: TipCount;
  amount: Scalars['String']['output'];
  blockNumber: Scalars['Int']['output'];
  character: Character;
  characterId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  fee?: Maybe<Scalars['String']['output']>;
  feeReceiverAddress?: Maybe<Scalars['String']['output']>;
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  logIndex: Scalars['Int']['output'];
  tipConfig?: Maybe<TipConfig>;
  tipConfigId?: Maybe<Scalars['Int']['output']>;
  toCharacter: Character;
  toCharacterId: Scalars['Int']['output'];
  toNote?: Maybe<Note>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  tokenAddress: Scalars['String']['output'];
  transactionHash: Scalars['String']['output'];
};

export type TipAvgAggregate = {
  __typename?: 'TipAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  characterId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  tipConfigId?: Maybe<Scalars['Float']['output']>;
  toCharacterId?: Maybe<Scalars['Float']['output']>;
  toNoteId?: Maybe<Scalars['Float']['output']>;
};

export type TipConfig = {
  __typename?: 'TipConfig';
  _count: TipConfigCount;
  amount: Scalars['String']['output'];
  blockNumber: Scalars['Int']['output'];
  character: Character;
  characterId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  currentRound: Scalars['Int']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  endTime: Scalars['DateTime']['output'];
  feeReceiverAddress: Scalars['String']['output'];
  /** @DtoEntityHidden */
  feeds?: Maybe<Array<Feed>>;
  interval: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  startTime: Scalars['DateTime']['output'];
  tipConfigId: Scalars['ID']['output'];
  tips?: Maybe<Array<Tip>>;
  toCharacter: Character;
  toCharacterId: Scalars['Int']['output'];
  tokenAddress: Scalars['String']['output'];
  totalRound: Scalars['Int']['output'];
  transactionHash: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['String']['output'];
};

export type TipConfigAvgAggregate = {
  __typename?: 'TipConfigAvgAggregate';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  characterId?: Maybe<Scalars['Float']['output']>;
  currentRound?: Maybe<Scalars['Float']['output']>;
  interval?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
  tipConfigId?: Maybe<Scalars['Float']['output']>;
  toCharacterId?: Maybe<Scalars['Float']['output']>;
  totalRound?: Maybe<Scalars['Float']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Float']['output']>;
  updatedLogIndex?: Maybe<Scalars['Float']['output']>;
};

export type TipConfigCount = {
  __typename?: 'TipConfigCount';
  feeds: Scalars['Int']['output'];
  tips: Scalars['Int']['output'];
};

export type TipConfigCountAggregate = {
  __typename?: 'TipConfigCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  currentRound: Scalars['Int']['output'];
  deletedAt: Scalars['Int']['output'];
  endTime: Scalars['Int']['output'];
  feeReceiverAddress: Scalars['Int']['output'];
  interval: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  startTime: Scalars['Int']['output'];
  tipConfigId: Scalars['Int']['output'];
  toCharacterId: Scalars['Int']['output'];
  tokenAddress: Scalars['Int']['output'];
  totalRound: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  updatedBlockNumber: Scalars['Int']['output'];
  updatedLogIndex: Scalars['Int']['output'];
  updatedTransactionHash: Scalars['Int']['output'];
};

export type TipConfigListRelationFilter = {
  every?: InputMaybe<TipConfigWhereInput>;
  none?: InputMaybe<TipConfigWhereInput>;
  some?: InputMaybe<TipConfigWhereInput>;
};

export type TipConfigMaxAggregate = {
  __typename?: 'TipConfigMaxAggregate';
  amount?: Maybe<Scalars['String']['output']>;
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentRound?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  feeReceiverAddress?: Maybe<Scalars['String']['output']>;
  interval?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  tipConfigId?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
  totalRound?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type TipConfigMinAggregate = {
  __typename?: 'TipConfigMinAggregate';
  amount?: Maybe<Scalars['String']['output']>;
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentRound?: Maybe<Scalars['Int']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  feeReceiverAddress?: Maybe<Scalars['String']['output']>;
  interval?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  tipConfigId?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
  totalRound?: Maybe<Scalars['Int']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
  updatedTransactionHash?: Maybe<Scalars['String']['output']>;
};

export type TipConfigOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TipConfigSumAggregate = {
  __typename?: 'TipConfigSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  currentRound?: Maybe<Scalars['Int']['output']>;
  interval?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  tipConfigId?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  totalRound?: Maybe<Scalars['Int']['output']>;
  updatedBlockNumber?: Maybe<Scalars['Int']['output']>;
  updatedLogIndex?: Maybe<Scalars['Int']['output']>;
};

export type TipConfigWhereInput = {
  AND?: InputMaybe<Array<TipConfigWhereInput>>;
  NOT?: InputMaybe<Array<TipConfigWhereInput>>;
  OR?: InputMaybe<Array<TipConfigWhereInput>>;
  amount?: InputMaybe<StringFilter>;
  blockNumber?: InputMaybe<IntFilter>;
  character?: InputMaybe<CharacterWhereInput>;
  characterId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currentRound?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  endTime?: InputMaybe<DateTimeFilter>;
  feeReceiverAddress?: InputMaybe<StringFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  interval?: InputMaybe<IntFilter>;
  logIndex?: InputMaybe<IntFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  tipConfigId?: InputMaybe<IntFilter>;
  tips?: InputMaybe<TipListRelationFilter>;
  toCharacter?: InputMaybe<CharacterWhereInput>;
  toCharacterId?: InputMaybe<IntFilter>;
  tokenAddress?: InputMaybe<StringFilter>;
  totalRound?: InputMaybe<IntFilter>;
  transactionHash?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedBlockNumber?: InputMaybe<IntFilter>;
  updatedLogIndex?: InputMaybe<IntFilter>;
  updatedTransactionHash?: InputMaybe<StringFilter>;
};

export type TipCount = {
  __typename?: 'TipCount';
  feeds: Scalars['Int']['output'];
};

export type TipCountAggregate = {
  __typename?: 'TipCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  blockNumber: Scalars['Int']['output'];
  characterId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  fee: Scalars['Int']['output'];
  feeReceiverAddress: Scalars['Int']['output'];
  logIndex: Scalars['Int']['output'];
  tipConfigId: Scalars['Int']['output'];
  toCharacterId: Scalars['Int']['output'];
  toNoteId: Scalars['Int']['output'];
  tokenAddress: Scalars['Int']['output'];
  transactionHash: Scalars['Int']['output'];
};

export type TipListRelationFilter = {
  every?: InputMaybe<TipWhereInput>;
  none?: InputMaybe<TipWhereInput>;
  some?: InputMaybe<TipWhereInput>;
};

export type TipMaxAggregate = {
  __typename?: 'TipMaxAggregate';
  amount?: Maybe<Scalars['String']['output']>;
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fee?: Maybe<Scalars['String']['output']>;
  feeReceiverAddress?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  tipConfigId?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type TipMinAggregate = {
  __typename?: 'TipMinAggregate';
  amount?: Maybe<Scalars['String']['output']>;
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  fee?: Maybe<Scalars['String']['output']>;
  feeReceiverAddress?: Maybe<Scalars['String']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  tipConfigId?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

export type TipOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TipSumAggregate = {
  __typename?: 'TipSumAggregate';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  characterId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
  tipConfigId?: Maybe<Scalars['Int']['output']>;
  toCharacterId?: Maybe<Scalars['Int']['output']>;
  toNoteId?: Maybe<Scalars['Int']['output']>;
};

export type TipWhereInput = {
  AND?: InputMaybe<Array<TipWhereInput>>;
  NOT?: InputMaybe<Array<TipWhereInput>>;
  OR?: InputMaybe<Array<TipWhereInput>>;
  amount?: InputMaybe<StringFilter>;
  blockNumber?: InputMaybe<IntFilter>;
  character?: InputMaybe<CharacterWhereInput>;
  characterId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fee?: InputMaybe<StringNullableFilter>;
  feeReceiverAddress?: InputMaybe<StringNullableFilter>;
  feeds?: InputMaybe<FeedListRelationFilter>;
  logIndex?: InputMaybe<IntFilter>;
  tipConfig?: InputMaybe<TipConfigWhereInput>;
  tipConfigId?: InputMaybe<IntNullableFilter>;
  toCharacter?: InputMaybe<CharacterWhereInput>;
  toCharacterId?: InputMaybe<IntFilter>;
  toNote?: InputMaybe<NoteWhereInput>;
  toNoteId?: InputMaybe<IntNullableFilter>;
  tokenAddress?: InputMaybe<StringFilter>;
  transactionHash?: InputMaybe<StringFilter>;
};

export type GetNotesQueryVariables = Exact<{
  characterId: Scalars['Int']['input'];
  slug: Scalars['JSON']['input'];
}>;


export type GetNotesQuery = { __typename?: 'Query', notes: Array<{ __typename?: 'Note', characterId: number, noteId: number, owner: string, createdAt: any, updatedAt: any, publishedAt?: any | null, transactionHash: string, blockNumber: number, updatedTransactionHash: string, updatedBlockNumber: number, metadata?: { __typename?: 'Metadata', uri: string, content?: any | null } | null, stat?: { __typename?: 'NoteStat', viewDetailCount: number } | null }> };


export const GetNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"characterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"characterId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"characterId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"deleted"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"BooleanValue","value":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"path"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"sources","block":false}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"array_contains"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"xlog","block":false}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"OR"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"path"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"attributes","block":false}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"array_contains"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trait_type"},"value":{"kind":"StringValue","value":"xlog_slug","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"path"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"title","block":false}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"desc"}}]}]}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"characterId"}},{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"updatedTransactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"updatedBlockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"stat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewDetailCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetNotesQuery, GetNotesQueryVariables>;