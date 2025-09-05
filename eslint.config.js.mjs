/* This configuration is designed to lint all JavaScript configuration files */

import eslint from '@eslint/js';

import es_x from 'eslint-plugin-es-x';
import node from 'eslint-plugin-n';
import security from 'eslint-plugin-security';

import stylistic from '@stylistic/eslint-plugin';

export default [
    eslint.configs.recommended,
    es_x.configs['flat/restrict-to-es2023'],
    node.configs['flat/recommended'],
    security.configs.recommended,
    stylistic.configs['recommended'],
    {
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module'
        },
        rules: {
            /* @eslint/js */
            'array-callback-return': ['error', {
                checkForEach: true
            }],

            'no-await-in-loop': 'error',

            'no-cond-assign': ['error', 'always'],

            'no-constant-condition': ['error', {
                checkLoops: 'all'
            }],

            'no-constructor-return': 'error',

            'no-duplicate-imports': ['error', {
                includeExports: true
            }],

            'no-inner-declarations': ['error', 'both'],

            'no-promise-executor-return': 'error',

            'no-self-compare': 'error',

            'no-template-curly-in-string': 'error',

            'no-unmodified-loop-condition': 'error',

            'no-unreachable-loop': 'error',

            'no-unsafe-negation': ['error', {
                enforceForOrderingRelations: true
            }],

            'no-unsafe-optional-chaining': ['error', {
                disallowArithmeticOperators: true
            }],

            'no-useless-assignment': 'error',

            'require-atomic-updates': 'error',

            'use-isnan': ['error', {
                enforceForSwitchCase: true,
                enforceForIndexOf: true
            }],

            'valid-typeof': ['error', {
                requireStringLiterals: true
            }],

            'one-var': ['error', 'never'],

            /* @stylistic/eslint-plugin */

            '@stylistic/brace-style': ['error', '1tbs'],

            '@stylistic/no-extra-semi': 'error',

            '@stylistic/function-call-argument-newline': ['error', 'consistent'],

            '@stylistic/function-call-spacing': ['error', 'never'],

            '@stylistic/comma-dangle': ['error', 'never'],

            '@stylistic/indent': ['error',
                4,
                {
                    SwitchCase: 1,
                    FunctionDeclaration: {
                        parameters: 'first'
                    },
                    FunctionExpression: {
                        parameters: 'first'
                    }
                }
            ],

            '@stylistic/indent-binary-ops': 'off',

            '@stylistic/member-delimiter-style': ['error', {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: true
                }
            }],

            '@stylistic/operator-linebreak': ['error', 'after'],

            '@stylistic/quotes': ['error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: 'always'
                }
            ],

            '@stylistic/semi': ['error', 'always']
        }
    }
];
