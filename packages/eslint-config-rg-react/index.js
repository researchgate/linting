'use strict';

module.exports = {
    extends: '@researchgate/eslint-config-rg-base',
    plugins: ['react'],
    rules: {
        'import/no-nodejs-modules': ['error', { allow: 'events' }],
        'react/jsx-boolean-value': 'error',
        'react/jsx-curly-spacing': ['error', 'never'],
        'react/jsx-equals-spacing': 'error',
        'react/jsx-handler-names': 'error',
        'react/jsx-key': 'error',
        'react/jsx-no-bind': [
            'error',
            {
                ignoreRefs: false,
                allowArrowFunctions: true,
                allowBind: false,
            },
        ],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-children-prop': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-multi-comp': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/prefer-es6-class': 'error',
        'react/prop-types': ['warn', { ignore: ['dispatch'] }],
        'react/react-in-jsx-scope': 'error',
        'react/self-closing-comp': 'error',
    },
    env: {
        browser: true,
    },
};
