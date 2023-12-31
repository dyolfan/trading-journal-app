module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "react-hooks", "prettier"],
	ignorePatterns: ["src/types/model/**/*.ts"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"react/react-in-jsx-scope": "off",
		camelcase: "error",
		"spaced-comment": "error",
		"no-duplicate-imports": "error",
	},
	settings: {
		"import/resolver": {
			typescript: {},
		},
	},
};
