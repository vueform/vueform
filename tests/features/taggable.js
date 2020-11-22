import { createForm } from 'test-helpers'
import { nextTick } from 'composition-api'

export const addItem = function (elementType, elementName, options) {
  it('should `addItem` to object of items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            0: 'value',
          },
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.addItem('value2', 1)

    expect(el.items).toStrictEqual({
      0: 'value',
      1: { value: 1, label: 'value2' }
    })
    
    el.addItem('value3')

    expect(el.items).toStrictEqual({
      0: 'value',
      1: { value: 1, label: 'value2' },
      value3: { value: 'value3', label: 'value3' },
    })
  })

  it('should `addItem` to array of items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            'value'
          ]
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.addItem('value2', 1)

    expect(el.items).toStrictEqual([
      'value',
      { value: 1, label: 'value2' }
    ])
    
    el.addItem('value3')

    expect(el.items).toStrictEqual([
      'value',
      { value: 1, label: 'value2' },
      'value3'
    ])
  })
}

export const removeItem = function (elementType, elementName, options) {
  it('should `removeItem` from object of string items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            0: 'value',
            1: 'value2',
            2: 'value3',
          },
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.removeItem(1)

    expect(el.items).toStrictEqual({
      0: 'value',
      2: 'value3',
    })
  })

  it('should `removeItem` from object of object items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            0: { value: 'a', label: 'value' },
            1: { value: 'b', label: 'value2' },
            2: { value: 'c', label: 'value3' },
          },
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.removeItem('b')

    expect(el.items).toStrictEqual({
      0: { value: 'a', label: 'value' },
      2: { value: 'c', label: 'value3' },
    })
  })

  it('should `removeItem` from array of string items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            'value',
            'value2',
            'value3',
          ]
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.removeItem(1)

    expect(el.items).toStrictEqual([
      'value',
      'value3',
    ])
  })
  it('should `removeItem` from array of object items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            { value: 'a', label: 'value' },
            { value: 'b', label: 'value2' },
            { value: 'c', label: 'value3' },
          ]
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.removeItem('b')

    expect(el.items).toStrictEqual([
      { value: 'a', label: 'value' },
      { value: 'c', label: 'value3' },
    ])
  })
}

export const onMounted = function (elementType, elementName, options) {
  it('should subscribe to `tag` event and add tags when create "true" on mounted', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          create: true,
          items: [
            'value',
            'value2',
          ],
        }
      }
    })

    let el = form.vm.el$('el')
    
    await nextTick()

    el.input.$emit('tag', 'query')

    expect(el.items).toStrictEqual([
      'value',
      'value2',
      { value: 'query', label: 'query' },
    ])
  })

  it('should not subscribe to `tag` event and add tags when create "false" on mounted', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          create: false,
          items: [
            'value',
            'value2',
          ],
        }
      }
    })

    let el = form.vm.el$('el')
    
    await nextTick()

    el.input.$emit('tag', 'query')

    expect(el.items).toStrictEqual([
      'value',
      'value2',
    ])
  })

  it('should not add existing item on `tag` event with whitespaced', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          create: true,
          items: [
            'value',
            'value2',
          ],
        }
      }
    })

    let el = form.vm.el$('el')
    
    await nextTick()

    el.input.$emit('value ')

    expect(el.items).toStrictEqual([
      'value',
      'value2',
    ])
  })
}