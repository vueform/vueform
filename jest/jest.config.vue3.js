var base = require('./jest.config.vue2.js')

module.exports = Object.assign({}, base, {
  "transform": {
      ".*\\.(vue)$":  "vue-next-jest",
      "^.+\\.js$": "babel-jest",
  },
  "moduleNameMapper": {
      "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^composition-api$": "<rootDir>/node_modules/vue-next",
      "^@vue/test-utils$": "<rootDir>/node_modules/vue-next-test-utils",
      "^@vueform/vueform/(.*)": "<rootDir>/$1",
      "^vue$": "<rootDir>/node_modules/vue-next",
      '^test-helpers$': "<rootDir>/tests/helpers/index.js",
      '^vue-jest$': "<rootDir>/node_modules/vue-next-jest"
  },
})