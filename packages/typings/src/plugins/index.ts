import { printSchemaWithDirectives } from '@graphql-tools/utils'
import { GraphQLSchema } from 'graphql'

const print = (schema: string) => `export default \`${schema}\`;`

export const plugin = (schema: GraphQLSchema) =>
  print(printSchemaWithDirectives(schema))
