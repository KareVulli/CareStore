module.exports = {
    moduleNameMapper: {
        '\\.(css)$': '<rootDir>/__mocks__/styleMock.js'
    },
    testEnvironment: 'node',
    setupFiles: ['dotenv/config']
};
