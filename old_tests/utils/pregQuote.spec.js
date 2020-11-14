import pregQuote from '../../src/utils/pregQuote'

describe('Preg Quote Util', () => {
  it('should preg quote', () => {
    expect(pregQuote("\\.+*?[^]$(){}=!<>|:")).toBe('\\\\\\.\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:')
  })
})