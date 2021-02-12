import { testPropDefault, createForm } from 'test-helpers'
import { nextTick } from 'composition-api'

export const defaultValue = function (elementType, elementName, options) {
  it('should have "[]" as `default` by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual([])
  })

  it('should convert string date to date object according to valueFormat in `default`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'DD-MM-YYYY',
          default: ['30-12-2020'],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual([moment('2020-12-30').toDate()])
  })

  it('should return date object in `default`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [moment('2020-12-30').toDate()],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.defaultValue).toStrictEqual([moment('2020-12-30').toDate()])
  })

  it('should throw an error if `default` is not provided according to valueFormat', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.$set(form.vm.schema.el, 'default', ['30-12-2020'])

    await nextTick()

    expect(() => {
      el.defaultValue
    }).toThrowError()

    el.$set(form.vm.schema.el, 'default', ['2020-12-30'])

    await nextTick()

    expect(() => {
      el.defaultValue
    }).not.toThrowError()
  })
}