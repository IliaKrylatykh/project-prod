module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:i18next/recommended',
		'plugin:storybook/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
	rules: {
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		indent: [
			0,
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
			},
		],
		semi: [2, 'never'],
		'jsx-quotes': [2, 'prefer-single'],
		'react/prop-types': 0,
		'no-tabs': 0,
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.js', '.jsx', '.tsx'],
			},
		],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'off',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'i18next/no-literal-string': [
			'off',
			{
				markupOnly: true,
				ignoreAttribute: ['data-testid', 'to'],
			},
		],
		'arrow-parens': ['error', 'as-needed'],
		'linebreak-style': 0,
		'comma-dangle': 0,
		'max-len': [
			'warn',
			{
				ignoreComments: true,
				code: 100,
			},
		],
		'arrow-body-style': [0, 'as-needed'],
		'react/jsx-wrap-multilines': 'off',
		'no-console': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'no-param-reassign': [2, { props: false }],
		'no-unused-expressions': 'off',
	},
	globals: {
		__IS_DEV__: true,
	},
	overrides: [
		{
			files: ['**/src/**/*.test.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
		{
			files: ['src/**/*.test.{ts,tsx}', 'config/**/*{ts,tsx}'],
			rules: {
				'import/no-extraneous-dependencies': 'off',
			},
		},
	],
}
