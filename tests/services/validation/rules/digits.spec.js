import { createForm, change } from './../../../../src/utils/testHelpers'

describe('Digits Rule', () => {
  it('should match exact length of digits', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'digits:2'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    
    change(a, '0')
    expect(a.vm.invalid).toBe(true)

    change(a, '5')
    expect(a.vm.invalid).toBe(true)

    change(a, '00')
    expect(a.vm.invalid).toBe(false)

    change(a, '01')
    expect(a.vm.invalid).toBe(false)

    change(a, '11')
    expect(a.vm.invalid).toBe(false)

    change(a, '111')
    expect(a.vm.invalid).toBe(true)

    change(a, 'aa')
    expect(a.vm.invalid).toBe(true)

    change(a, '  ')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})