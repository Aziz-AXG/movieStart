module.exports = function (api) {
  api.cache(true);

  const plugins = [];

  // 💡 مكوّن Tamagui
  plugins.push([
    '@tamagui/babel-plugin',
    {
      components: ['tamagui'],
      config: './tamagui.config.ts',
    },
  ]);

  

  // ✅ مكوّن Reanimated — لازم يكون آخر plugin دائمًا
  plugins.push('react-native-reanimated/plugin');

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};


// module.exports = function (api) {
//   api.cache(true);

//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       'nativewind/babel',
//       [
//         '@tamagui/babel-plugin',
//         {
//           components: ['tamagui'],
//           config: './tamagui.config.ts',
//         },
//       ],
//     ],
//   };
// };
