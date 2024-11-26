// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Si estás usando TypeScript y quieres transformar los archivos .ts/.tsx, 
// mantén la siguiente línea. Si no, puedes eliminarla.
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-typescript-transformer'),
};

module.exports = config;
