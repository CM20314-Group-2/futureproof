const path = require('path');
const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

exports.watchFolders = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(__dirname, "../typings"), // This cannot be achieved dynamically with the current iteration of lerna
]

exports.resolver = {
  ...defaultResolver,
  sourceExts: [
    ...defaultResolver.sourceExts,
    "cjs",
  ],
  
};