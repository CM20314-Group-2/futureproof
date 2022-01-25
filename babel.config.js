module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
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
  };
};
