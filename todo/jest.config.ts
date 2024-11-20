/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',

  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
      useESM: true,
    },
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!@fullcalendar/*).+\\.[t|j]sx?$'],
  moduleNameMapper: {
    '^preact(/(.*)|$)': 'preact$1',
  },
};
export default createJestConfig(config);
