'use strict';

module.exports = {
    extends: '@researchgate/eslint-config-rg-node',
    rules: {
        'node/no-unsupported-features': 'off',
        strict: ['error', 'never'],
    },
};
