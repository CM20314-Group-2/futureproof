module.exports = function(api) {
  api.cache(true)
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset'
    ],
    plugins: [
      ['module-resolver', {
        // root property does not seem to work
        alias: {
          '@components': './src/components',
          '@typings': './src/typings/src/ts'
        },
        extensions: [
          '.ts',
          '.tsx'
        ]
      }]
    ]
  }
}
