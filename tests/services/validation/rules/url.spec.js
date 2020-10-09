import { createLocalVue } from '@vue/test-utils'
import { createForm, change } from './.test-helpers'

describe('URL Rule', () => {
  it('should validate url', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'url',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    change(a, 'http://www.laraform.io')
    expect(a.vm.invalid).toBe(false)

    change(a, 'http://laraform.io')
    expect(a.vm.invalid).toBe(false)

    change(a, 'https://www.laraform.io')
    expect(a.vm.invalid).toBe(false)

    change(a, 'https://laraform.io')
    expect(a.vm.invalid).toBe(false)

    change(a, 'https://www.laraform.ioasdf')
    expect(a.vm.invalid).toBe(false)

    change(a, 'laraform.io')
    expect(a.vm.invalid).toBe(true)

    change(a, 'www.laraform.io')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})