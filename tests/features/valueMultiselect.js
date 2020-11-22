import { createForm } from 'test-helpers'
import { nextTick } from 'composition-api'

export { previousValue, currentValue, selectOptions, getOption } from './valueSelect'

export const model = function (elementType, elementName, options) {
  it('should return object value for `model`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            'item',
            'item2',
            'item3'
          ],
          default: [2]
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.model).toStrictEqual([{ value: 2, label: 'item3' }])
  })

  it('should set plain value for value when setting `model`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            'item',
            'item2',
            'item3'
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    el.model = [{ value: 1, label: 'item2' }]
    
    expect(el.value).toStrictEqual([1])
  })

  it('should set the select\'s value when setting `model`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            'item',
            'item2',
            'item3'
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    el.model = [{ value: 1, label: 'item2' }]

    await nextTick()

    expect(el.input.value).toStrictEqual([{ value: 1, label: 'item2' }])
    expect(el.value).toStrictEqual([1])
  })

  it('should set `model` value when changing select', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            'item',
            'item2',
            'item3'
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.select({ value: 1, label: 'item2' })

    expect(el.model).toStrictEqual([{ value: 1, label: 'item2' }])
    expect(el.value).toStrictEqual([1])
  })
}