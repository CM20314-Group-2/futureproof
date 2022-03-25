/* eslint-disable @typescript-eslint/no-var-requires */
// Need to disable eslint here because this file is not a module
const path = require('path')
const { getDefaultConfig } = require('metro-config')
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues()

const workspaceRoot = path.resolve(__dirname, '../..')
const projectRoot = __dirname

exports.watchFolders = [
  workspaceRoot,
]

exports.resolver = {
  ...defaultResolver,
  sourceExts: [
    ...defaultResolver.sourceExts,
    'cjs',
  ],
  nodeModulesPath: [
    path.resolve(workspaceRoot, 'node_modules'),
    path.resolve(projectRoot, 'node_modules'),
  ]
}
