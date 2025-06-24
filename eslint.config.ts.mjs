/*
 * MIT License
 *
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* This configuration is designed to parse all TypeScript files in the `src` directory */

import eslint from '@eslint/js';

import es_x from 'eslint-plugin-es-x';
import node from 'eslint-plugin-n';
import security from 'eslint-plugin-security';

import stylistic from '@stylistic/eslint-plugin';

import tsEslint from 'typescript-eslint';

export default tsEslint.config(
    eslint.configs.recommended,
    es_x.configs['flat/restrict-to-es2022'],
    node.configs['flat/recommended'],
    security.configs.recommended,
    stylistic.configs['recommended-flat'],
    ...tsEslint.configs.recommendedTypeChecked,
    ...tsEslint.configs.strictTypeChecked,
    ...tsEslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
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
                    allowTemplateLiterals: true
                }
            ],

            '@stylistic/semi': ['error', 'always'],

            /* eslint-plugin-security */

            'security/detect-object-injection': 'off',

            /* eslint-plugin-n */

            'n/no-missing-import': 'off',

            /* typescript-eslint */

            'dot-notation': 'off',
            '@typescript-eslint/dot-notation': ['error', {
                allowKeywords: false
            }],

            'no-array-constructor': 'off',
            '@typescript-eslint/no-array-constructor': 'error',

            'no-empty-function': 'off',
            '@typescript-eslint/no-empty-function': ['error', {
                allow: []
            }],

            'no-loop-func': 'off',
            '@typescript-eslint/no-loop-func': 'error',

            'no-loss-of-precision': 'off',
            '@typescript-eslint/no-loss-of-precision': 'error',

            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',

            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-expressions': ['error', {
                allowShortCircuit: false
            }],

            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'error',

            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': 'error',

            'no-useless-constructor': 'off',
            '@typescript-eslint/no-useless-constructor': 'error',

            '@typescript-eslint/class-literal-property-style': ['error', 'getters'],

            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

            '@typescript-eslint/no-explicit-any': 'error',

            '@typescript-eslint/no-extraneous-class': ['error', {
                allowStaticOnly: true
            }],

            '@typescript-eslint/no-inferrable-types': 'off',

            '@typescript-eslint/prefer-for-of': 'error',

            '@typescript-eslint/restrict-template-expressions': ['error', {
                allowNumber: true,
                allowBoolean: true
            }]
        }
    }
);
