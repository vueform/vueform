import _ from 'lodash'
import { testThemeComponents, testThemeElements } from 'test-helpers'

describe('Default Theme', () => {
  it('should have all the components', () => {
    testThemeComponents('default', expect)
  })

  it('should have all the elements', () => {
    testThemeElements('default', expect)
  })
})