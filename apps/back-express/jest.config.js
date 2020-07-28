module.exports = {
  name: 'back-express',
  preset: '../../jest.config.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  coverageDirectory: '../../coverage/apps/back-express',
};
