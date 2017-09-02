'use strict';

module.exports = {
    parserOptions: { ecmaVersion: 2017 },
    extends: 'eslint:recommended',
    plugins: ['prettier', 'import'],
    rules: {
        'max-len': [
            'error',
            150,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
            },
        ],
        'arrow-body-style': 'off',
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        camelcase: 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': ['error', 'last'],
        'consistent-return': 'error',
        curly: ['error', 'multi-line'],
        'dot-notation': ['error', { allowKeywords: true }],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'guard-for-in': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': ['error', 'always', { js: 'never' }],
        'import/named': 'error',
        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/__tests__/**/*.js', '**/test/**/*.js'],
                optionalDependencies: false,
            },
        ],
        'import/no-unresolved': 'error',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'linebreak-style': ['error', 'unix'],
        'new-cap': [
            'error',
            {
                capIsNewExceptions: ['List', 'Map', 'Set', 'OrderedMap', 'OrderedSet'],
            },
        ],
        'no-alert': 'off',
        'no-caller': 'error',
        'no-dupe-keys': 'error',
        'no-else-return': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-floating-decimal': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-label-var': 'off',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
        'no-native-reassign': 'error',
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-restricted-imports': [
            'error',
            {
                patterns: ['node_modules'],
            },
        ],
        'no-restricted-modules': [
            'error',
            {
                patterns: ['node_modules'],
            },
        ],
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-sequences': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'no-use-before-define': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-var': 'error',
        'no-with': 'error',
        'object-curly-spacing': ['error', 'always'],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prettier/prettier': [
            'error',
            {
                bracketSpacing: true,
                jsxBracketSameLine: false,
                parser: 'babylon',
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
                useTabs: false,
            },
        ],
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        'semi-spacing': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!'],
                },
                block: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!'],
                    balanced: true,
                },
            },
        ],
        'space-infix-ops': 'error',
        'space-in-parens': ['error', 'never'],
        'space-unary-ops': 'error',
        strict: ['error', 'never'], // node
        'template-curly-spacing': ['error', 'never'],
        'wrap-iife': 'error',
        yoda: 'error',
    },
    env: {
        es6: true,
    },
};
