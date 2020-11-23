import { createForm, setMultiselectValue, findAllComponents, findAll } from 'test-helpers'
import { nextTick } from 'composition-api'
import { model as baseModel } from './value_tags'

export { previousValue, currentValue, selectOptions, getOption } from './value_select'

export const model = function (elementType, elementName, options) {
  baseModel(elementType, elementName, options)

  it('should return object value for `model` when native', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
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
    
    expect(el.model).toStrictEqual([2])
  })

  it('should set plain value for value when setting `model` when native', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: [
            'item',
            'item2',
            'item3'
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    el.model = [1]
    
    expect(el.value).toStrictEqual([1])
  })

  it('should set the select\'s value when setting `model` when native', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: [
            'item',
            'item2',
            'item3'
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    el.model = [1]

    await nextTick()

    expect(el.input.value).toStrictEqual('1')
    expect(el.value).toStrictEqual([1])
  })

  it('should set `model` value when changing select when native', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
          items: [
            'item',
            'item2',
            'item3'
          ],
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, 'select').at(0)

    setMultiselectValue(select, [1])

    expect(el.model).toStrictEqual([1])
    expect(el.value).toStrictEqual([1])
  })
}