// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
config = {
  verbose: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/pages(.*)$': '<rootDir>/pages$1',
    '^@/hooks(.*)$': '<rootDir>/hooks$1',
    '^@/lib(.*)$': '<rootDir>/lib',
  },
}
module.exports = config
