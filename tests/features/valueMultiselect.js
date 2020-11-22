import { createForm, findAllComponents, findAll } from 'test-helpers'
import { nextTick } from 'composition-api'

export { previousValue, currentValue, selectOptions, getOption } from './valueSelect'

export const value = function (elementType, elementName, options) {
  it('should return currentValue for `value`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = options.value

    expect(el.value).toBe(el.currentValue)
  })

  it('should set currentValue as previousValue and passed over value as current value when setting `value`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.currentValue = options.value

    el.value = options.value2

    expect(el.previousValue).toStrictEqual(options.value)
    expect(el.currentValue).toStrictEqual(options.value2)
    expect(el.value).toStrictEqual(options.value2)
  })
}

export const model = function (elementType, elementName, options) {
  it('should return plain value for `model` when native', async () => {
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

  it('should return object value for `model` when not native', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
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

  it('should set plain value for value when setting `model` when not native', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
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

  it('should set the select\'s value when setting `model` using native', async () => {
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

    expect(el.input.value).toBe('1')
    expect(el.value).toStrictEqual([1])
  })

  it('should set `model` value when changing select using native', async () => {
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
    let select = findAll(elWrapper, `select`).at(0)

    select.setValue(1)

    expect(el.model).toStrictEqual([1])
    expect(el.value).toStrictEqual([1])
  })

  it('should set the select\'s value when setting `model` using non native', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
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

  it('should set `model` value when changing select using non-native', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
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