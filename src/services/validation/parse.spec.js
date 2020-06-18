import parse from './parse'

describe('Validation Parse', () => {
  it('should parse rule name', () => {
    let { rule, attributes } = parse('required')

    expect(rule).toBe('required')
    expect(attributes).toBe(null)
  })

  it('should parse rule with attribute list', () => {
    let { rule, attributes } = parse('required:a,b')

    expect(rule).toBe('required')
    expect(attributes).toStrictEqual({
      0: 'a',
      1: 'b'
    })
  })

  it('should parse rule with named attribute list', () => {
    let { rule, attributes } = parse('required:a=c,b=d')

    expect(rule).toBe('required')
    expect(attributes).toStrictEqual({
      a: 'c',
      b: 'd'
    })
  })

  it('should parse rule with named attribute list normalizing values', () => {
    let { rule, attributes } = parse('required:a=1,b=2')

    expect(rule).toBe('required')
    expect(attributes).toStrictEqual({
      a: 1,
      b: 2
    })
  })
})