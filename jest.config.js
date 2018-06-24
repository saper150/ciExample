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
      "branches": 80,
      "functions": 70,
      "lines": 80,
      "statements": -10
    }
  }
}
