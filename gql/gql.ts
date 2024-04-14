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
    "\n\tquery getNotes($characterId: Int!, $slug: JSON!, $tag: JSON!) {\n\t\tnotes(\n\t\t\twhere: {\n\t\t\t\tcharacterId: { equals: $characterId }\n\t\t\t\tdeleted: { equals: false }\n\t\t\t\tmetadata: {\n\t\t\t\t\tcontent: { path: [\"sources\"], array_contains: [\"xlog\"] }\n\t\t\t\t\tAND: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tcontent: {\n\t\t\t\t\t\t\t\tpath: [\"attributes\"]\n\t\t\t\t\t\t\t\tarray_contains: [{ trait_type: \"xlog_slug\", value: $slug }]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t{ content: { path: [\"tags\"], array_contains: $tag } }\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t}\n\t\t\torderBy: [{ createdAt: desc }]\n\t\t\ttake: 1\n\t\t) {\n\t\t\tcharacterId\n\t\t\tnoteId\n\t\t\turi\n\t\t\tmetadata {\n\t\t\t\turi\n\t\t\t\tcontent\n\t\t\t}\n\t\t\towner\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tpublishedAt\n\t\t\ttransactionHash\n\t\t\tblockNumber\n\t\t\tupdatedTransactionHash\n\t\t\tupdatedBlockNumber\n\t\t}\n\t}\n": types.GetNotesDocument,
    "\n\tquery getLinklistCount($characterId: Int!) {\n\t\tlinkCount(\n\t\t\twhere: {\n\t\t\t\tlinkType: { equals: \"like\" }\n\t\t\t\ttoCharacterId: { equals: $characterId }\n\t\t\t}\n\t\t)\n\t}\n": types.GetLinklistCountDocument,
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
export function graphql(source: "\n\tquery getNotes($characterId: Int!, $slug: JSON!, $tag: JSON!) {\n\t\tnotes(\n\t\t\twhere: {\n\t\t\t\tcharacterId: { equals: $characterId }\n\t\t\t\tdeleted: { equals: false }\n\t\t\t\tmetadata: {\n\t\t\t\t\tcontent: { path: [\"sources\"], array_contains: [\"xlog\"] }\n\t\t\t\t\tAND: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tcontent: {\n\t\t\t\t\t\t\t\tpath: [\"attributes\"]\n\t\t\t\t\t\t\t\tarray_contains: [{ trait_type: \"xlog_slug\", value: $slug }]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t{ content: { path: [\"tags\"], array_contains: $tag } }\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t}\n\t\t\torderBy: [{ createdAt: desc }]\n\t\t\ttake: 1\n\t\t) {\n\t\t\tcharacterId\n\t\t\tnoteId\n\t\t\turi\n\t\t\tmetadata {\n\t\t\t\turi\n\t\t\t\tcontent\n\t\t\t}\n\t\t\towner\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tpublishedAt\n\t\t\ttransactionHash\n\t\t\tblockNumber\n\t\t\tupdatedTransactionHash\n\t\t\tupdatedBlockNumber\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getNotes($characterId: Int!, $slug: JSON!, $tag: JSON!) {\n\t\tnotes(\n\t\t\twhere: {\n\t\t\t\tcharacterId: { equals: $characterId }\n\t\t\t\tdeleted: { equals: false }\n\t\t\t\tmetadata: {\n\t\t\t\t\tcontent: { path: [\"sources\"], array_contains: [\"xlog\"] }\n\t\t\t\t\tAND: [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tcontent: {\n\t\t\t\t\t\t\t\tpath: [\"attributes\"]\n\t\t\t\t\t\t\t\tarray_contains: [{ trait_type: \"xlog_slug\", value: $slug }]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\t{ content: { path: [\"tags\"], array_contains: $tag } }\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t}\n\t\t\torderBy: [{ createdAt: desc }]\n\t\t\ttake: 1\n\t\t) {\n\t\t\tcharacterId\n\t\t\tnoteId\n\t\t\turi\n\t\t\tmetadata {\n\t\t\t\turi\n\t\t\t\tcontent\n\t\t\t}\n\t\t\towner\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t\tpublishedAt\n\t\t\ttransactionHash\n\t\t\tblockNumber\n\t\t\tupdatedTransactionHash\n\t\t\tupdatedBlockNumber\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getLinklistCount($characterId: Int!) {\n\t\tlinkCount(\n\t\t\twhere: {\n\t\t\t\tlinkType: { equals: \"like\" }\n\t\t\t\ttoCharacterId: { equals: $characterId }\n\t\t\t}\n\t\t)\n\t}\n"): (typeof documents)["\n\tquery getLinklistCount($characterId: Int!) {\n\t\tlinkCount(\n\t\t\twhere: {\n\t\t\t\tlinkType: { equals: \"like\" }\n\t\t\t\ttoCharacterId: { equals: $characterId }\n\t\t\t}\n\t\t)\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;