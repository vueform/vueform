import isJson from './../../src/utils/isJson'

describe('Is Json Util', () => {
  it('should return `true` for json', () => {
    expect(isJson('{"a":"aaa"}')).toBe(true)
  })

  it('should return `false` for not json', () => {
    expect(isJson('{a:"aaa"}')).toBe(false)
  })
})