const presets = [
    [
        '@babel/env'
    ],
    [
        '@babel/preset-react'
    ]
];

const plugins = [
    '@babel/plugin-proposal-class-properties',
    [
        '@babel/plugin-transform-runtime',
        {
            regenerator: true
        }
    ]
];

module.exports = {
    env: {
        test: {
            plugins: ['@babel/plugin-transform-runtime']
        }
    },
    presets,
    plugins
};
