module.exports = {
  "clearMocks": true,
  "rootDir": "../",
  "moduleFileExtensions": [
      "js",
      "json",
      "vue"
  ],
  "testTimeout": 20000,
  "testEnvironment": "jsdom",
  "transform": {
      ".*\\.(vue)$": "vue-prev-jest",
      "^.+\\.js$": "babel-jest"
  },
  "testEnvironmentOptions": { "resources": "usable" },
  "moduleNameMapper": {
      "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^@vue/test-utils$": "<rootDir>/node_modules/vue-prev-test-utils",
      "^vue$": "<rootDir>/node_modules/vue-prev",
      "^@vueform/vueform/(.*)": "<rootDir>/$1",
      '^test-helpers$': "<rootDir>/tests/helpers/vue2/index.js",
      '^vue-jest$': "<rootDir>/node_modules/vue-prev-jest"
  },
  "transformIgnorePatterns": [
      "/node_modules/(?!@vueform)"
  ],
  "setupFilesAfterEnv": ["<rootDir>/jest/jest.setup.js"],
  "collectCoverage": false,
  "collectCoverageFrom": [
      "**/*.{js,vue}",
      "!**/node_modules/**",
      "!**/build/**",
      "!**/coverage/**",
      "!**/config/**",
      "!**/dist/**",
      "!**/tests/**",
      "!**/jest/**",
      "!**/api/**",
      "!**/src/themes/default/components/**",
      "!**/src/themes/tailwind/components/**",
      "!**/src/themes/blank/components/**",
  ],
  // "reporters": [
  //   'jest-progress-bar-reporter',
  //   ["jest-silent-reporter", { "showWarnings": true }]
  // ],
  "coverageReporters": [
      "html",
      "text-summary"
  ]
}