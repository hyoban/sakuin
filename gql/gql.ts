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
    "\n  query getNotes($characterId: Int!, $slug: JSON!, $tag: JSON!) {\n    notes(\n      where: {\n        characterId: { equals: $characterId }\n        deleted: { equals: false }\n        metadata: {\n          content: { path: [\"sources\"], array_contains: [\"xlog\"] }\n          AND: [\n            {\n              content: {\n                path: [\"attributes\"]\n                array_contains: [{ trait_type: \"xlog_slug\", value: $slug }]\n              }\n            }\n            { content: { path: [\"tags\"], array_contains: $tag } }\n          ]\n        }\n      }\n      orderBy: [{ createdAt: desc }]\n      take: 1\n    ) {\n      characterId\n      noteId\n      uri\n      metadata {\n        uri\n        content\n      }\n      owner\n      createdAt\n      updatedAt\n      publishedAt\n      transactionHash\n      blockNumber\n      updatedTransactionHash\n      updatedBlockNumber\n    }\n  }\n": types.GetNotesDocument,
    "\n  query getLinklistCount($characterId: Int!) {\n    linkCount(\n      where: {\n        linkType: { equals: \"like\" }\n        toCharacterId: { equals: $characterId }\n      }\n    )\n  }\n": types.GetLinklistCountDocument,
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
export function graphql(source: "\n  query getNotes($characterId: Int!, $slug: JSON!, $tag: JSON!) {\n    notes(\n      where: {\n        characterId: { equals: $characterId }\n        deleted: { equals: false }\n        metadata: {\n          content: { path: [\"sources\"], array_contains: [\"xlog\"] }\n          AND: [\n            {\n              content: {\n                path: [\"attributes\"]\n                array_contains: [{ trait_type: \"xlog_slug\", value: $slug }]\n              }\n            }\n            { content: { path: [\"tags\"], array_contains: $tag } }\n          ]\n        }\n      }\n      orderBy: [{ createdAt: desc }]\n      take: 1\n    ) {\n      characterId\n      noteId\n      uri\n      metadata {\n        uri\n        content\n      }\n      owner\n      createdAt\n      updatedAt\n      publishedAt\n      transactionHash\n      blockNumber\n      updatedTransactionHash\n      updatedBlockNumber\n    }\n  }\n"): (typeof documents)["\n  query getNotes($characterId: Int!, $slug: JSON!, $tag: JSON!) {\n    notes(\n      where: {\n        characterId: { equals: $characterId }\n        deleted: { equals: false }\n        metadata: {\n          content: { path: [\"sources\"], array_contains: [\"xlog\"] }\n          AND: [\n            {\n              content: {\n                path: [\"attributes\"]\n                array_contains: [{ trait_type: \"xlog_slug\", value: $slug }]\n              }\n            }\n            { content: { path: [\"tags\"], array_contains: $tag } }\n          ]\n        }\n      }\n      orderBy: [{ createdAt: desc }]\n      take: 1\n    ) {\n      characterId\n      noteId\n      uri\n      metadata {\n        uri\n        content\n      }\n      owner\n      createdAt\n      updatedAt\n      publishedAt\n      transactionHash\n      blockNumber\n      updatedTransactionHash\n      updatedBlockNumber\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getLinklistCount($characterId: Int!) {\n    linkCount(\n      where: {\n        linkType: { equals: \"like\" }\n        toCharacterId: { equals: $characterId }\n      }\n    )\n  }\n"): (typeof documents)["\n  query getLinklistCount($characterId: Int!) {\n    linkCount(\n      where: {\n        linkType: { equals: \"like\" }\n        toCharacterId: { equals: $characterId }\n      }\n    )\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;