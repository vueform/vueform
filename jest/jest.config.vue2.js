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
      "/node_modules/(?!@vueform|axios)"
  ],
  "setupFilesAfterEnv": ["<rootDir>/jest/jest.setup.js"],
  "collectCoverage": true,
  "collectCoverageFrom": [
      "**/*.{js,vue}",
      "!**/node_modules/**",
      "!**/build/**",
      "!**/bundles/**",
      "!**/coverage/**",
      "!**/locales/**",
      "!**/packages/**",
      "!**/public/**",
      "!**/scripts/**",
      "!**/themes/**",
      "!**/config/**",
      "!**/dist/**",
      "!**/tests/**",
      "!**/jest/**",
      "!**/api/**",
      "!**/src/element.js",
      "!**/src/installer.js",
      "!**/src/index.js",
      "!**/src/plugin.js",
      "!**/tailwind.js",
      "!**/tailwind.config.js",
      "!**/postcss.config.js",
      "!**/webpack.config.js",
      "!**/babel.config.js",
      "!**/jest.setup.js",
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