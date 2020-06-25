import { createForm } from './../../src/utils/testHelpers'
import { createLocalVue } from '@vue/test-utils'

describe('HTML If directive', () => {
  it('include original children if condition becomes false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
 
    const form = createForm({
      schema: {
        a: {
          type: 'text',
          label: 'aaa'
        }
      }
    })

    expect(form.findComponent({ name: 'ElementLabel' }).html()).toContain('aaa')

    form.setData({
      schema: {
        a: {
          label: LocalVue.extend({
            props: ['el$'],
            render(h) {
              return h('div', 'hello')
            }
          })
        }
      }
    })

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(form.findComponent({ name: 'ElementLabel' }).html()).toContain('hello')
      done()
    })
    })
  })
})