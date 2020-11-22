import { createForm } from 'test-helpers'

export const select = function (elementType, elementName, options) {
  it('should `select` single option', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: options.items,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.select(options.value[0])

    expect(el.value).toStrictEqual([options.value[0]])
  })

  it('should `select` multiple options', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: options.items,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.select(options.value)

    expect(el.value).toStrictEqual(options.value)
  })

  it('should trigger updated on `select`', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: options.items,
          onChange: onChangeMock,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.select(options.value)

    expect(el.dirty).toBe(true)
    expect(onChangeMock).toHaveBeenCalledWith(options.value, [])
  })

  it('should `select` not add existing values', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: options.items,
          onChange: onChangeMock,
          default: options.value
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual(options.value)
    
    el.select(options.value)

    expect(el.value).toStrictEqual(options.value)
  })
}

export const deselect = function (elementType, elementName, options) {
  it('should `deselect` single option', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            'value',
            'value2',
            'value3',
          ],
          default: [1,2]
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.deselect(1)

    expect(el.value).toStrictEqual([2])
  })

  it('should `deselect` multiple options', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            'value',
            'value2',
            'value3',
            'value4',
            'value5',
            'value6',
          ],
          default: [0,1,2,3,4,5]
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.deselect([2,4,1,2,8])

    expect(el.value).toStrictEqual([0,3,5])
  })

  it('should trigger updated on `select`', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            'value',
            'value2',
            'value3',
            'value4',
            'value5',
            'value6',
          ],
          default: [0,1,2,3,4,5],
          onChange: onChangeMock,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.deselect([2,4,1,2,8])

    expect(el.dirty).toBe(true)
    expect(onChangeMock).toHaveBeenCalledWith([0,3,5], [0,1,2,3,4,5])
  })
}