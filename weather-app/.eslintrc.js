const config = {
    root: true,
    env: {
        browser: true,
    },
    extends: ['airbnb-base'],
    // add your custom rules here
    rules: {
        'no-unused-vars': 'off',
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'comma-dangle': 'off',
        indent: ['error', 4],
        'space-before-blocks': 'off',
        'space-before-function-paren': 'off',
        'prefer-destructuring': 'on',
        'no-mixed-operators': ['error', {
            allowSamePrecedence: true
        }],
        'no-plusplus': ['error', {
            allowForLoopAfterthoughts: true
        }],
        'no-underscore-dangle': 'off',
        // writing tests is a lot easier with console logs
        'no-console': 'off',
        'func-names': 'off',
        'no-debugger': 'off',
        'linebreak-style': 0,
    },
}

module.exports = config
