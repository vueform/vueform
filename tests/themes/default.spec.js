import _ from 'lodash'
import { testThemeComponents, testThemeElements } from './../../src/utils/testHelpers'

describe('Default Theme', () => {
  it('should have all the components', () => {
    testThemeComponents('default', expect)
  })

  it('should have all the elements', () => {
    testThemeElements('default', expect)
  })
})