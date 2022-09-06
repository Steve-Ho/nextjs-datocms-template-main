/*
	eslint-disable
	unicorn/prefer-module,
	@typescript-eslint/naming-convention
*/
const config = {
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.jest.json',
		},
	},
	preset: 'ts-jest',
	verbose: true,
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^@app(.*)$': '<rootDir>/$1',
	},
	modulePathIgnorePatterns: [
		'<rootDir>/.next/',
	],
};

module.exports = config;
