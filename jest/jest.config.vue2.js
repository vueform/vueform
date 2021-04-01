module.exports = {
  "rootDir": "../",
  "moduleFileExtensions": [
      "js",
      "json",
      "vue"
  ],
  "testTimeout": 20000,
  "transform": {
      ".*\\.(vue)$": "vue-prev-jest",
      "^.+\\.js$": "babel-jest"
  },
  "testEnvironmentOptions": { "resources": "usable" },
  "transformIgnorePatterns": [
      "/node_modules/(?!vue-js-toggle-button|vueform-multiselect)"
  ],
  "modulePathIgnorePatterns": ["<rootDir>/old_tests/"],
  "moduleNameMapper": {
      "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^composition-api$": "<rootDir>/node_modules/vue-prev-composition-api",
      "^@vue/test-utils$": "<rootDir>/node_modules/vue-prev-test-utils",
      "^vue$": "<rootDir>/node_modules/vue-prev",
      '^test-helpers$': "<rootDir>/tests/helpers/vue2/index.js",
      '^vue-jest$': "<rootDir>/node_modules/vue-prev-jest"
  },
  "setupFilesAfterEnv": ["<rootDir>/jest/jest.setup.js"],
  "collectCoverage": true,
  "collectCoverageFrom": [
      "**/*.{js,vue}",
      "!**/node_modules/**",
      "!**/build/**",
      "!**/coverage/**",
      "!**/config/**",
      "!**/dist/**",
      "!**/ignore/**",
      "!**/old_tests/**",
      "!**/tests/**",
      "!**/jest/**",
      "!**/api/**",
  ],
  "reporters": [
    'jest-progress-bar-reporter',
    ["jest-silent-reporter", { "showWarnings": true }]
  ],
  "coverageReporters": [
      "html",
      "text-summary"
  ]
}