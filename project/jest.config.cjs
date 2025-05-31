/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    moduleNameMapper: {

        "\\.(css|less|scss|sass)$": "identity-obj-proxy",


        "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
   // setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
