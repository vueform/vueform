import compare from './../../src/utils/compare'

describe('Compare Util', () => {
  it('should throw error for unknown operator', () => {

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      compare('a', 'aa', 'x')
    }).toThrowError()
    
    console.error = originalConsoleError
  })
})