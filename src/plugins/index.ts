import { printSchemaWithDirectives } from "@graphql-tools/utils"
import { GraphQLSchema } from "graphql"

const print = (schema: string) => `
  import { gql } from "@apollo/client/core"
  export const typeDefs = gql\`${schema}\`;
`;

export const plugin = (schema: GraphQLSchema) =>
  print(printSchemaWithDirectives(schema));
