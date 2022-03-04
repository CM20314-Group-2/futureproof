/* eslint-disable @typescript-eslint/no-var-requires */
// Need to disable eslint here because this file is not a module
const path = require('path')
const { getDefaultConfig } = require('metro-config')
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues()

exports.watchFolders = [
  path.resolve(__dirname, './src'),
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '../typings'), // This cannot be achieved dynamically with the current iteration of lerna
]

exports.resolver = {
  ...defaultResolver,
  sourceExts: [
    ...defaultResolver.sourceExts,
    'cjs',
  ],
  
}
