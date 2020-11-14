import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'

describe('Buttons Element', () => {
  it('should render `component` if defined', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'buttons',
          buttons: [
            {
              component: LocalVue.extend({
                name: 'FormButtonCustom',
                render(h) {
                  return h('div', 'Hello')
                }
              })
            }
          ]
        }
      }
    })

    expect(form.findComponent({ name: 'FormButtonCustom' }).html()).toContain('Hello')
    
    done()
  })

  it('should throw error if not existing button type is set', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      createForm({
        schema: {
          a: {
            type: 'buttons',
            buttons: [
              {
                type: 'custom'
              }
            ]
          }
        }
      })
    }).toThrow(TypeError)
    
    console.error = originalConsoleError
    
    done()
  })
})