import { printSchemaWithDirectives } from '@graphql-tools/utils'
import { GraphQLSchema } from 'graphql'

const print = (schema: string) => `
  export const typeDefs = \`${schema}\`;
`

export const plugin = (schema: GraphQLSchema) =>
  print(printSchemaWithDirectives(schema))
