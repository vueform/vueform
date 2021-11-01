import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change, setInstances, tryInputValues } from 'test-helpers'

describe('Between Rule', () => {
  it('should check if numeric value is between min and max', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'numeric|between:2,5',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    
    let values = {
      '1': true,
      '2': false,
      '3': false,
      '5': false,
      '6': true,
      '1.2': true,
      '1,2': true,
      '2.5': false,
      '2,5': true,
      '4.9999999': false,
      '5.5': true,
      'asdf': true,
      '%/?+': true,
      '3 ': true,
      '-3': true,
    }
    
    await tryInputValues(values, a)
  })

  it('should check if integer value is between min and max', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'integer|between:2,5',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    
    let values = {
      '1': true,
      '2': false,
      '3': false,
      '5': false,
      '6': true,
      '1.2': true,
      '1,2': true,
      '2.5': true,
      '2,5': true,
      '4.9999999': true,
      '5.5': true,
      'asdf': true,
      '%/?+': true,
      '3 ': false,
      '-3': true,
    }
    
    await tryInputValues(values, a)
  })

  it('should check if string length is between min and max', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'between:2,5',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    
    change(a, 'a')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'as')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asd')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asdfj')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asdfű')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asdf吧')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'Русск')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asdfjk')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'asd   ')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'asdfj ')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, '1')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, '2')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, '4')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, '6')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, '123')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
    
    change(a, '123456')
    await flushPromises()
    expect(a.vm.invalid).toBe(true)
    
    change(a, '%%!+')
    await flushPromises()
    expect(a.vm.invalid).toBe(false)
  })

  it('should check if array length is between min and max (v<min)', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|between:2,5',
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)
    
    setInstances(a, 1)

    await a.vm.validate()

    expect(a.vm.invalid).toBe(true)
  })

  it('should check if array length is between min and max (v=min)', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|between:2,5',
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)
    
    setInstances(a, 2)

    await a.vm.validate()
    expect(a.vm.invalid).toBe(false)
  })

  it('should check if array length is between min and max (v>min,v<max)', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|between:2,5',
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)
    
    setInstances(a, 3)

    await a.vm.validate()
    expect(a.vm.invalid).toBe(false)
  })

  it('should check if array length is between min and max (v=max)', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|between:2,5',
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)
    
    setInstances(a, 5)

    await a.vm.validate()
    expect(a.vm.invalid).toBe(false)
  })

  it('should check if array length is between min and max (v>max)', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|between:2,5',
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)
    
    setInstances(a, 6)

    await a.vm.validate()
    expect(a.vm.invalid).toBe(true)
  })

  it('should check for file', async () => {
    let form = createForm({
      schema: {
        el: {
          type: 'file',
          rules: 'between:2,5',
          auto: false,
        }
      }
    })

    let el = form.vm.el$('el')

    await el.validate()
    expect(el.invalid).toBe(false)

    let file = new File([''], 'file.jpg')
    Object.defineProperty(file, 'size', { value: 1000 })
    el.update(file)
    await el.validate()
    expect(el.invalid).toBe(true)

    file = new File([''], 'file.jpg')
    Object.defineProperty(file, 'size', { value: 2000 })
    el.update(file)
    await el.validate()
    expect(el.invalid).toBe(false)

    file = new File([''], 'file.jpg')
    Object.defineProperty(file, 'size', { value: 3000 })
    el.update(file)
    await el.validate()
    expect(el.invalid).toBe(false)

    file = new File([''], 'file.jpg')
    Object.defineProperty(file, 'size', { value: 5000 })
    el.update(file)
    await el.validate()
    expect(el.invalid).toBe(false)

    file = new File([''], 'file.jpg')
    Object.defineProperty(file, 'size', { value: 6000 })
    el.update(file)
    await el.validate()
    expect(el.invalid).toBe(true)
  })
})