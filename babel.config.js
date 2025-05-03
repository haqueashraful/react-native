module.exports = {
    presets: ['babel-preset-expo'], // or 'module:metro-react-native-babel-preset' for non-Expo
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env.local',           // <-- use your actual file name here
        allowUndefined: false
      }]
    ]
  };
  