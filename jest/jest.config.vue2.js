module.exports = {
  "rootDir": "../",
  "moduleFileExtensions": [
      "js",
      "json",
      "vue"
  ],
  "testTimeout": 1000,
  "transform": {
      ".*\\.(vue)$": "vue-prev-jest",
      "^.+\\.js$": "babel-jest"
  },
  "transformIgnorePatterns": [
      "/node_modules/(?!vue-js-toggle-button|vue-multiselect)"
  ],
  "modulePathIgnorePatterns": ["<rootDir>/old_tests/"],
  "moduleNameMapper": {
      "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^composition-api$": "vue-prev-composition-api",
      "^@vue/test-utils$": "vue-prev-test-utils",
      "^vue$": "vue-prev",
      '^test-helpers$': "<rootDir>/tests/helpers/vue2/index.js",
      '^vue-jest$': "vue-prev-jest"
  },
  "setupFilesAfterEnv": ["<rootDir>/jest/jest.setup.js"],
  "collectCoverage": false,
  "collectCoverageFrom": [
      "**/*.{js,vue}",
      "!**/node_modules/**",
      "!**/build/**",
      "!**/coverage/**",
      "!**/config/**",
      "!**/dist/**",
      "!**/ignore/**",
      "!**/old_tests/**"
  ],
  "coverageReporters": [
      "html",
      "text-summary"
  ]
}