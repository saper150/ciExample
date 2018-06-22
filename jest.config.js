module.exports = {
  "modulePaths": [
    "<rootDir>"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  collectCoverage: true,
  coverageDirectory: 'testCoverage',
  "coverageThreshold": {
    "global": {
      "branches": 10,
      "functions": 10,
      "lines": 10,
      "statements": -100
    }
  }
}
