module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      "nativewind/babel",
    ],
    plugins: [
      ["babel-plugin-transform-import-meta", { module: "ES6", polyfill: true }],
      "react-native-reanimated/plugin",
    ],
  }
}


