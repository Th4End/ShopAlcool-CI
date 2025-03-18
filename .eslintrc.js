export const env = {
    browser: true,
    es2021: true,
};
export const extendsConfig = [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
];
export const parserOptions = {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true,
    },
};
export const settings = {
    react: {
        version: 'detect',
    },
};
export const rules = {
    'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/no-unused-modules': [1, { unusedExports: true }],
};
  