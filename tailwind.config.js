/*
	eslint-disable
	@typescript-eslint/no-var-requires,
	@typescript-eslint/no-unsafe-assignment,
	@typescript-eslint/no-unsafe-member-access,
	@typescript-eslint/naming-convention,
	unicorn/prefer-module
*/
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	content: [
		'./node_modules/next/**/*.js',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./pages/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				lg: '4rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
		extend: {
			colors: {
				'true-gray': colors.neutral,
			},
			fontFamily: {
				sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
			},
			lineHeight: {
				11: '3.5rem',
				12: '5rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
	experimental: {
		applyComplexClasses: true,
	},
};
