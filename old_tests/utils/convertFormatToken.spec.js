import convertFormatToken from '../../src/utils/convertFormatToken'

describe('Convert Format Token Util', () => {
  it('should convert from flatpicrk to moment', () => {
    expect(convertFormatToken('Y-m-d', 'flatpickr', 'moment')).toBe('YYYY-MM-DD')
    // expect(convertFormatToken('\Date: Y-m-d', 'flatpickr', 'moment')).toBe('Date: YYYY-MM-DD')
    // expect(convertFormatToken('Y-m-dTH:i:S', 'flatpickr', 'moment')).toBe('YYYY-MM-DD\THH:mm:ss')
  })

  it('should convert from moment to flatpickr', () => {
    // expect(convertFormatToken('YYYY-MM-DD', 'flatpickr', 'moment')).toBe('Y-m-d')
  })
})