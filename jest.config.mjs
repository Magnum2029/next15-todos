import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './'
});

const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'cjs', 'json', 'node']
};

export default createJestConfig(config);
