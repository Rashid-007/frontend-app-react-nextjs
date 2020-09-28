const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx$";

module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testRegex: TEST_REGEX,
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  collectCoverage: false,
  snapshotSerializers: ["jest-emotion"],
};
