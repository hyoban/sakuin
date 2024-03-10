/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery getNotes($characterId: Int!, $slug: JSON!) {\n  notes(\n    where: {\n      characterId: { equals: $characterId }\n      deleted: { equals: false }\n      metadata: {\n        content: { path: [\"sources\"], array_contains: [\"xlog\"] }\n        OR: [\n          {\n            content: {\n              path: [\"attributes\"]\n              array_contains: [{ trait_type: \"xlog_slug\", value: $slug }]\n            }\n          }\n          { content: { path: [\"title\"], equals: $slug } }\n        ]\n      }\n    }\n    orderBy: [{ createdAt: desc }]\n    take: 1\n  ) {\n    characterId\n    noteId\n    metadata {\n      uri\n      content\n    }\n    owner\n    createdAt\n    updatedAt\n    publishedAt\n    transactionHash\n    blockNumber\n    updatedTransactionHash\n    updatedBlockNumber\n    stat {\n      viewDetailCount\n    }\n  }\n}\n": types.GetNotesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getNotes($characterId: Int!, $slug: JSON!) {\n  notes(\n    where: {\n      characterId: { equals: $characterId }\n      deleted: { equals: false }\n      metadata: {\n        content: { path: [\"sources\"], array_contains: [\"xlog\"] }\n        OR: [\n          {\n            content: {\n              path: [\"attributes\"]\n              array_contains: [{ trait_type: \"xlog_slug\", value: $slug }]\n            }\n          }\n          { content: { path: [\"title\"], equals: $slug } }\n        ]\n      }\n    }\n    orderBy: [{ createdAt: desc }]\n    take: 1\n  ) {\n    characterId\n    noteId\n    metadata {\n      uri\n      content\n    }\n    owner\n    createdAt\n    updatedAt\n    publishedAt\n    transactionHash\n    blockNumber\n    updatedTransactionHash\n    updatedBlockNumber\n    stat {\n      viewDetailCount\n    }\n  }\n}\n"): (typeof documents)["\nquery getNotes($characterId: Int!, $slug: JSON!) {\n  notes(\n    where: {\n      characterId: { equals: $characterId }\n      deleted: { equals: false }\n      metadata: {\n        content: { path: [\"sources\"], array_contains: [\"xlog\"] }\n        OR: [\n          {\n            content: {\n              path: [\"attributes\"]\n              array_contains: [{ trait_type: \"xlog_slug\", value: $slug }]\n            }\n          }\n          { content: { path: [\"title\"], equals: $slug } }\n        ]\n      }\n    }\n    orderBy: [{ createdAt: desc }]\n    take: 1\n  ) {\n    characterId\n    noteId\n    metadata {\n      uri\n      content\n    }\n    owner\n    createdAt\n    updatedAt\n    publishedAt\n    transactionHash\n    blockNumber\n    updatedTransactionHash\n    updatedBlockNumber\n    stat {\n      viewDetailCount\n    }\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;