import { createForm, change } from './../../../../src/utils/testHelpers'

describe('Digits Between Rule', () => {
  it('should validate if digits length is between min & max', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'digits_between:2,7'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    
    change(a, '1')
    expect(a.vm.invalid).toBe(true)

    change(a, '12')
    expect(a.vm.invalid).toBe(false)

    change(a, '123')
    expect(a.vm.invalid).toBe(false)

    change(a, '1234567')
    expect(a.vm.invalid).toBe(false)

    change(a, '12345678')
    expect(a.vm.invalid).toBe(true)

    change(a, 'aa')
    expect(a.vm.invalid).toBe(true)

    change(a, '  ')
    expect(a.vm.invalid).toBe(true)

    change(a, '0x1D306')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})