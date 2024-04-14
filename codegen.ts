import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "https://indexer.crossbell.io/v1/graphql",
	documents: ["./src/**/*.ts"],
	generates: {
		"./src/gql/": {
			preset: "client",
			plugins: [],
		},
	},
	ignoreNoDocuments: true,
};

export default config;
