import { testPropDefault, createForm } from 'test-helpers'
import { nextTick } from 'composition-api'

export const defaultValue = function (elementType, elementName, options) {
  it('should have "null" as `default` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toBe(null)
  })

  it('should convert string date to date object according to valueFormat in `default`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat2,
          default: options.value2,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual(moment(options.value, options.valueFormat).toDate())
  })

  it('should return date object in `default`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: moment(options.value, options.valueFormat).toDate(),
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual(moment(options.value, options.valueFormat).toDate())
  })

  it('should throw an error if `default` is not provided according to valueFormat', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: options.valueFormat2,
        }
      }
    })

    let el = form.vm.el$('el')

    let errors = 0

    try {
      el.$set(form.vm.schema.el, 'default', options.value)
      await nextTick()
      el.defaultValue
    } catch (e) {
      errors++
    }

    expect(errors).toBe(1)

    try {
      el.$set(form.vm.schema.el, 'default', options.value2)
      await nextTick()
      el.defaultValue
    } catch (e) {
      errors++
    }

    expect(errors).toBe(1)
  })
}