const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

module.exports = createJestConfig({
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		// '^@components/(.*)$': '<rootDir>/src/components/$1',
		// '^@pages/(.*)$': '<rootDir>/src/pages/$1',
		// '^@styles/(.*)$': '<rootDir>/src/styles/$1',
		// '^@public/(.*)$': '<rootDir>/public/$1',
	},
	testEnvironment: 'jest-environment-jsdom',
});
