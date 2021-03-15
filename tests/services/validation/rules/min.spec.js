import flushPromises from 'flush-promises'
import { createForm, findAllComponents, change, setInstances, tryInputValues } from 'test-helpers'

describe('Min Rule', () => {
  it('should check if numeric value is higher or equal than minimum', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'numeric|min:2',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    let values = {
      '2': false,
      '3': false,
      '1.2': true,
      '1,2': true,
      '2.5': false,
      '2,5': true,
      'asdf': true,
      '%/?+': true,
      '3 ': true,
      '-3': true,
    }
    
    tryInputValues(values, a, done)
  })

  it('should check if integer value is higher or equal than minimum', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'integer|min:2',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    let values = {
      '1': true,
      '2': false,
      '3': false,
      '1.2': true,
      '1,2': true,
      '2.5': true,
      '2,5': true,
      'asdf': true,
      '%/?+': true,
      '3 ': false,
      '-3': true,
    }
    
    tryInputValues(values, a, done)
  })

  it('should check if string length is higher or equal than minimum', async () => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'min:2',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)
    
    change(a, 'a')
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'as')
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asd')
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'a吧')
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'Ру')
    expect(a.vm.invalid).toBe(false)
    
    change(a, ' ')
    expect(a.vm.invalid).toBe(true)
    
    change(a, '  ')
    expect(a.vm.invalid).toBe(false)
    
    change(a, '1')
    expect(a.vm.invalid).toBe(true)
    
    change(a, '2')
    expect(a.vm.invalid).toBe(true)
    
    change(a, '4')
    expect(a.vm.invalid).toBe(true)
    
    change(a, '6')
    expect(a.vm.invalid).toBe(true)
    
    change(a, '123')
    expect(a.vm.invalid).toBe(false)
    
    change(a, '%!+')
    expect(a.vm.invalid).toBe(false)
  })

  it('should check if array length is higher or equal than min (v<min)', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|min:2',
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)
    
    setInstances(a, 1)

    LocalVue.nextTick(() => {
      a.vm.validate()
      expect(a.vm.invalid).toBe(true)

      done()
    })
  })

  it('should check if array length is higher or equal than min (v=min)', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|min:2',
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)
    
    setInstances(a, 2)

    LocalVue.nextTick(() => {
      a.vm.validate()
      expect(a.vm.invalid).toBe(false)

      done()
    })
  })

  it('should check if array length is higher or equal than min (v>min)', async () => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'array|min:2',
          element: {
            type: 'text'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ListElement' }).at(0)
    
    setInstances(a, 3)

    LocalVue.nextTick(() => {
      a.vm.validate()
      expect(a.vm.invalid).toBe(false)

      done()
    })
  })
})