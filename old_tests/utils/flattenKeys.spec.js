import flattenKeys from '../../src/utils/flattenKeys'

describe('Flatten Keys Util', () => {
  it('should flatten keys one level', () => {
    expect(flattenKeys({a: 1})).toStrictEqual({a:1})
  })
  
  it('should flatten keys two levels', () => {
    expect(flattenKeys({a: {b: 1}})).toStrictEqual({'a.b':1})
  })
  
  it('should flatten keys three levels', () => {
    expect(flattenKeys({a: {b: {c: 1}}})).toStrictEqual({'a.b.c':1})
  })
})