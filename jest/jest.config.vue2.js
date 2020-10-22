module.exports = {
  "moduleFileExtensions": [
      "js",
      "json",
      "vue"
  ],
  "transform": {
      ".*\\.(vue)$": "vue-jest-prev",
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  "transformIgnorePatterns": [
      "/node_modules/(?!vue-js-toggle-button|vue-multiselect)"
  ],
  "moduleNameMapper": {
      "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^composition-api$": "@vue/composition-api",
      "^@vue/test-utils$": "vue-test-utils-prev",
      "^vue$": "vue-prev",
      '^test-helpers$': "<rootDir>/src/utils/testHelpers.vue2.js",
      '^vue-jest$': "vue-jest-prev"
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