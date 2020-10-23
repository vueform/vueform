module.exports = {
  "rootDir": "../",
  "moduleFileExtensions": [
      "js",
      "json",
      "vue"
  ],
  "transform": {
      ".*\\.(vue)$": "vue-prev-jest",
      "^.+\\.js$": "babel-jest"
  },
  "transformIgnorePatterns": [
      "/node_modules/(?!vue-js-toggle-button|vue-multiselect)"
  ],
  "moduleNameMapper": {
      "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^composition-api$": "vue-prev-composition-api",
      "^@vue/test-utils$": "vue-prev-test-utils",
      "^vue$": "vue-prev",
      '^test-helpers$': "<rootDir>/src/utils/testHelpers.vue2.js",
      '^vue-jest$': "vue-prev-jest"
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