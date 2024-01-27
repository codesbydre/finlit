module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["node_modules/(?!axios)/"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
};
