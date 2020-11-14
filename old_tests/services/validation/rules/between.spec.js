import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents, change, setInstances, tryInputValues } from './.test-helpers'

describe('Between Rule', () => {
  it('should check if numeric value is between min and max', (done) => {
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
    
    tryInputValues(values, a, done)
  })

  it('should check if integer value is between min and max', (done) => {
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
    
    tryInputValues(values, a, done)
  })

  it('should check if string length is between min and max', (done) => {
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
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'as')
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asd')
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asdfj')
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asdfű')
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asdf吧')
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'Русск')
    expect(a.vm.invalid).toBe(false)
    
    change(a, 'asdfjk')
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'asd   ')
    expect(a.vm.invalid).toBe(true)
    
    change(a, 'asdfj ')
    expect(a.vm.invalid).toBe(true)
    
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
    
    change(a, '123456')
    expect(a.vm.invalid).toBe(true)
    
    change(a, '%%!+')
    expect(a.vm.invalid).toBe(false)

    done()
  })

  it('should check if array length is between min and max (v<min)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    LocalVue.nextTick(() => {
      a.vm.validate()
      expect(a.vm.invalid).toBe(true)

      done()
    })
  })

  it('should check if array length is between min and max (v=min)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    LocalVue.nextTick(() => {
      a.vm.validate()
      expect(a.vm.invalid).toBe(false)

      done()
    })
  })

  it('should check if array length is between min and max (v>min,v<max)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    LocalVue.nextTick(() => {
      a.vm.validate()
      expect(a.vm.invalid).toBe(false)

      done()
    })
  })

  it('should check if array length is between min and max (v=max)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    LocalVue.nextTick(() => {
      a.vm.validate()
      expect(a.vm.invalid).toBe(false)

      done()
    })
  })

  it('should check if array length is between min and max (v>max)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

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

    LocalVue.nextTick(() => {
      a.vm.validate()
      expect(a.vm.invalid).toBe(true)

      done()
    })
  })
})