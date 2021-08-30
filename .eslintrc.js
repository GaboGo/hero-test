module.exports = {
    env: {
        browser: true,
        es6: true,
        'jest/globals': true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    parser: 'babel-eslint',
    plugins: ['jest', 'react'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    ignorePatterns: ['src/scss/*', 'src/assets/*'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // jsx-a11y
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
            },
        ],
        'jsx-a11y/no-onchange': [1],
        'jsx-a11y/label-has-for': [0],
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                assert: 'htmlFor',
                depth: 3,
            },
        ],
    },
};
