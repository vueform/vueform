import { testPropDefault, createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const defaultValue = function (elementType, elementName, options) {
  it('should be equal to defaultValue if default is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: {
            child: 'value',
            child2: 'value2',
          },
          schema: {
            child: { type: 'text' },
            child2: { type: 'text', default: 'not-value2' },
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual({
      child: 'value',
      child2: 'value2',
    })
    
    // destroy(form) // teardown
  })

  it('should be equal to form default if form default is defined', async () => {
    let form = createForm({
      default: {
        child2: 'not-value2'
      },
      schema: {
        el: {
          type: elementType,
          default: {
            child: 'value',
            child2: 'value2',
          },
          schema: {
            child: { type: 'text' },
            child2: { type: 'text' },
          }
        },
      },
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual({child:'value',child2:'not-value2'})
    
    // destroy(form) // teardown
  })

  it('should be equal to nullValue if default is not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: { type: 'text' },
            child2: { type: 'text' },
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual(el.nullValue)

    // destroy() // teardown
  })
}