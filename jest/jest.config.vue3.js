module.exports = {
  "moduleFileExtensions": [
      "js",
      "json",
      "vue"
  ],
  "transform": {
      ".*\\.(vue)$": "vue-jest-next",
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  "transformIgnorePatterns": [
      "/node_modules/(?!vue-js-toggle-button|vue-multiselect)"
  ],
  "moduleNameMapper": {
      "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^composition-api$": "vue-next",
      "^@vue/test-utils$": "vue-test-utils-next",
      "^vue$": "vue-next",
      '^test-helpers$': "<rootDir>/src/utils/testHelpers.vue3.js",
      '^vue-jest$': "vue-jest-next"
  },
  "collectCoverage": false,
  "collectCoverageFrom": [
      "**/*.{js,vue}",
      "!**/node_modules/**",
      "!**/build/**",
      "!**/coverage/**",
      "!**/config/**",
      "!**/dist/**",
      "!**/ignore/**"
  ],
  "coverageReporters": [
      "html",
      "text-summary"
  ]
}