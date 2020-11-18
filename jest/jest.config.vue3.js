var base = require('./jest.config.vue2.js')

module.exports = Object.assign({}, base, {
  "transform": {
      ".*\\.(vue)$":  "vue-next-jest",
      "^.+\\.js$": "babel-jest",
  },
  "moduleNameMapper": {
      "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^composition-api$": "vue-next",
      "^@vue/test-utils$": "vue-next-test-utils",
      "^vue$": "vue-next",
      '^test-helpers$': "<rootDir>/tests/helpers/index.js",
      '^vue-jest$': "vue-next-jest"
  },
})