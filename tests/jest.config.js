module.exports = {
  "clearMocks": true,
  "rootDir": "./../",
  "moduleFileExtensions": [
      "js",
      "json",
      "vue"
  ],
  "testTimeout": 20000,
  "testEnvironment": "jsdom",
  "transform": {
      ".*\\.(vue)$": "vue-jest",
      "^.+\\.js$": "babel-jest"
  },
  "testEnvironmentOptions": {
      "resources": "usable"
  },
  "moduleNameMapper": {
      "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^@vueform/vueform/(.*)": "<rootDir>/$1",
      "^vue$": "<rootDir>/node_modules/vue",
      "^test-helpers$": "<rootDir>/tests/helpers/index.js"
  },
  "transformIgnorePatterns": [
      "/node_modules/(?!@vueform|axios|lodash-es)"
  ],
  "setupFilesAfterEnv": [
      "<rootDir>/tests/jest.setup.js"
  ],
  "collectCoverage": false,
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
      "!**/jest.setup.js"
  ],
  "coverageReporters": [
      "html",
      "text-summary"
  ]
}