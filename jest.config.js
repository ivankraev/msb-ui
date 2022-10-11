module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(scss|sass|css)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: [
        "<rootDir>/src/jest/setupTests.ts"
    ]
}