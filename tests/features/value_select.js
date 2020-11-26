import { createForm, findAllComponents, findAll } from 'test-helpers'
import { nextTick } from 'composition-api'

export { currentValue, previousValue, value, rendering } from './value'

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
          default: 2
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.model).toBe(2)
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
          default: 2
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.model).toStrictEqual({ value: 2, label: 'item3' })
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

    el.model = 1
    
    expect(el.value).toBe(1)
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

    el.model = { value: 1, label: 'item2' }
    
    expect(el.value).toBe(1)
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

    el.model = 1

    await nextTick()

    expect(el.input.value).toBe('1')
    expect(el.value).toBe(1)
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

    expect(el.model).toBe(1)
    expect(el.value).toBe(1)
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

    el.model = { value: 1, label: 'item2' }

    await nextTick()

    expect(el.input.value).toStrictEqual({ value: 1, label: 'item2' })
    expect(el.value).toBe(1)
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

    expect(el.model).toStrictEqual({ value: 1, label: 'item2' })
    expect(el.value).toBe(1)
  })
}

export const selectOptions = function (elementType, elementName, options) {
  it('should convert an array of strings into `selectOptions`', async () => {
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

    expect(el.selectOptions).toStrictEqual([
      { value: 0, label: 'item' },
      { value: 1, label: 'item2' },
      { value: 2, label: 'item3' },
    ])
  })

  it('should convert an array of objects into `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            { label: 'item' },
            { label: 'item2' },
            { label: 'item3' },
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.selectOptions).toStrictEqual([
      { value: 0, label: 'item' },
      { value: 1, label: 'item2' },
      { value: 2, label: 'item3' },
    ])
  })

  it('should convert an array of objects with value defined into `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            { value: 'a', label: 'item' },
            { value: 'b', label: 'item2' },
            { value: 'c', label: 'item3' },
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.selectOptions).toStrictEqual([
      { value: 'a', label: 'item', },
      { value: 'b', label: 'item2' },
      { value: 'c', label: 'item3' },
    ])
  })

  it('should convert an array of objects with trackBy defined into `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trackBy: 'name',
          items: [
            { name: 'item' },
            { name: 'item2' },
            { name: 'item3' },
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.selectOptions).toStrictEqual([
      { value: 0, label: 'item', name: 'item', },
      { value: 1, label: 'item2', name: 'item2', },
      { value: 2, label: 'item3', name: 'item3', },
    ])
  })

  it('should convert an object with string values into `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            0: 'item',
            1: 'item2',
            2: 'item3',
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.selectOptions).toStrictEqual([
      { value: 0, label: 'item', },
      { value: 1, label: 'item2' },
      { value: 2, label: 'item3' },
    ])
  })

  it('should convert an object with object values into `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            0: { label: 'item' },
            1: { label: 'item2' },
            2: { label: 'item3' },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.selectOptions).toStrictEqual([
      { value: 0, label: 'item', },
      { value: 1, label: 'item2' },
      { value: 2, label: 'item3' },
    ])
  })

  it('should convert an object with object values where value is defined into `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            0: { value: 'a', label: 'item' },
            1: { value: 'b', label: 'item2' },
            2: { value: 'c', label: 'item3' },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.selectOptions).toStrictEqual([
      { value: 'a', label: 'item', },
      { value: 'b', label: 'item2' },
      { value: 'c', label: 'item3' },
    ])
  })

  it('should convert an object with object values where trackBy is defined instead of label into `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trackBy: 'name',
          items: {
            0: { value: 'a', name: 'item' },
            1: { value: 'b', name: 'item2' },
            2: { value: 'c', name: 'item3' },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.selectOptions).toStrictEqual([
      { value: 'a', label: 'item', name: 'item', },
      { value: 'b', label: 'item2', name: 'item2' },
      { value: 'c', label: 'item3', name: 'item3' },
    ])
  })
}

export const selectedOption = function (elementType, elementName, options) {
  it('should `selectedOption` return the selected item\'s object', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            'item',
            'item2',
            'item3'
          ],
          default: 1,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.selectedOption).toStrictEqual({ value: 1, label: 'item2' })
  })

  it('should `selectedOption` return an empty object when value cannot be found', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            'item',
            'item2',
            'item3'
          ],
          default: 4,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.selectedOption).toStrictEqual({})
  })
}

export const textValue = function (elementType, elementName, options) {
  it('should `textValue` return the trackBy value (or label by default) of the selected option', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            { label: 'label', name: 'name' },
            { label: 'label2', name: 'name2' },
          ],
          default: 1,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.textValue).toBe('label2')

    el.trackBy = 'name'

    expect(el.textValue).toBe('name2')
  })

  it('should `textValue` return empty string when the selected option cannot be found', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            { label: 'label', name: 'name' },
            { label: 'label2', name: 'name2' },
          ],
          default: 4,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.textValue).toBe('')
  })
}

export const getOption = function (elementType, elementName, options) {
  it('should `getOption` return an select option object', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            { label: 'label' },
            { label: 'label2' },
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.getOption(0)).toStrictEqual({ value: 0, label: 'label' })
    expect(el.getOption(1)).toStrictEqual({ value: 1, label: 'label2' })
  })
}