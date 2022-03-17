module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@common': './src/common',
          '@components': './src/components',
          '@config': './src/config',
          '@data': './src/data',
          '@dataUtils': './src/dataUtils',
          '@modals': './src/modals',
          '@navigator': './src/navigator',
          '@containers': './src/containers',
          '@theme': './src/theme',
          '@translations': './src/translations',
          '@utils': './src/utils',
          '@il8n': './src/utils/i18n',
          '@Constants': './src/config/Constants',
          '@navigatorConfig': './src/navigator/config',
        },
      },
    ],
  ],
};
