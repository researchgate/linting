'use strict';

module.exports = {
    extends: '@researchgate/eslint-config-rg-base',
    parserOptions: { sourceType: 'script' },
    plugins: ['node'],
    rules: {
        'node/no-deprecated-api': 'error',
        'node/no-unsupported-features': 'error',
        'node/process-exit-as-throw': 'error',
        'node/shebang': 'error',
        strict: ['error', 'global'],
    },
    env: {
        node: true,
    },
};
