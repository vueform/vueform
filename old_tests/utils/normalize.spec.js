import normalize from './../../src/utils/normalize'

describe('Normalize Util', () => {
  it('should normalize float', () => {
    expect(normalize('1.21')).toBe(1.21)
  })

  it('should normalize negative', () => {
    expect(normalize('-1')).toBe(-1)
  })
})