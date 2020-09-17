import { createLocalVue } from '@vue/test-utils'
import { createForm, confirmSelectOptions } from './../../../src/utils/testHelpers'

describe('Select Element Rendering', () => {
  it('should render select element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: {
            a: 1
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    done()
  })
})

describe('Select Element Props', () => {
  it('should have empty object as default for `items`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.items).toStrictEqual({})

    done()
  })

  it('should set `items` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: {
            a: 1,
            b: 2,
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.items).toStrictEqual({
      a: 1,
      b: 2,
    })

    done()
  })

  it('should set `items` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    a.vm.items = {
      a: 1,
      b: 2,
    }

    expect(a.vm.items).toStrictEqual({
      a: 1,
      b: 2,
    })

    done()
  })

  it('should have true as default for `native`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.native).toStrictEqual(true)

    done()
  })

  it('should set `native` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.native).toStrictEqual(false)

    done()
  })

  it('should set `native` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    a.vm.native = false

    expect(a.vm.native).toStrictEqual(false)

    done()
  })

  it('should have "label" as default for `trackBy`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.trackBy).toStrictEqual('label')

    done()
  })

  it('should set `trackBy` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          trackBy: 'name'
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.trackBy).toStrictEqual('name')

    done()
  })

  it('should set `trackBy` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    a.vm.trackBy = 'name'

    expect(a.vm.trackBy).toStrictEqual('name')

    done()
  })

  it('should have false as default for `search`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.search).toStrictEqual(false)

    done()
  })

  it('should set `search` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          search: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.search).toStrictEqual(true)

    done()
  })

  it('should set `search` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    a.vm.search = true

    expect(a.vm.search).toStrictEqual(true)

    done()
  })

  it('should have 1000 as default for `limit`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.limit).toStrictEqual(1000)

    done()
  })

  it('should set `limit` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          limit: 500
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.limit).toStrictEqual(500)

    done()
  })

  it('should set `limit` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    a.vm.limit = 500

    expect(a.vm.limit).toStrictEqual(500)

    done()
  })

  it('should have null as default for `placeholder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.placeholder).toStrictEqual(null)

    done()
  })

  it('should set `placeholder` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          placeholder: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.placeholder).toStrictEqual('aaa')

    done()
  })

  it('should set `placeholder` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    a.vm.placeholder = 'aaa'

    expect(a.vm.placeholder).toStrictEqual('aaa')

    done()
  })

  it('should have null as default for `floating`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.floating).toStrictEqual(null)

    done()
  })

  it('should set `floating` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          floating: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.floating).toStrictEqual('aaa')

    done()
  })

  it('should set `floating` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    a.vm.floating = 'aaa'

    expect(a.vm.floating).toStrictEqual('aaa')

    done()
  })

  it('should have `defaultOptions` as default for `options`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.options).toStrictEqual(a.vm.defaultOptions)

    done()
  })

  it('should set `options` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          options: {
            a: 'aaa'
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.options).toStrictEqual(Object.assign({}, a.vm.defaultOptions, {
      a: 'aaa'
    }))

    done()
  })

  it('should set `options` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    a.vm.options = {
      a: 'aaa'
    }

    expect(a.vm.options).toStrictEqual(Object.assign({}, a.vm.defaultOptions, {
      a: 'aaa'
    }))

    done()
  })

  it('should return true for `isNative` if native is true & search is false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.isNative).toBe(true)

    a.vm.native = false

    expect(a.vm.isNative).toBe(false)
    
    a.vm.native = true

    expect(a.vm.isNative).toBe(true)

    a.vm.search = true

    expect(a.vm.isNative).toBe(false)

    done()
  })

  it('should return current value\'s label for `textValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    a.vm.update(1)

    expect(a.vm.textValue).toBe('bbb')
    
    done()
  })

  it('should return empty for `textValue` if value is not been selected yet', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.textValue).toBe('')
    
    done()
  })

  it('should return current item for `textValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    a.vm.update(1)

    expect(a.vm.selectedOption).toStrictEqual({
      value: 1,
      label: 'bbb'
    })
    
    done()
  })

  it('should return false for `multiple`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
          multiple: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.multiple).toStrictEqual(false)
    
    done()
  })
})

describe('Select Element Items', () => {
  it('should convert an array of strings to `selectOptions`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: [
            'aaa',
            'bbb',
            'ccc'
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    confirmSelectOptions(a, done, LocalVue, {
      0: 'aaa',
      1: 'bbb',
      2: 'ccc'
    })
  })

  it('should convert an array of objects with label only to `selectOptions`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: [
            { label: 'aaa' },
            { label: 'bbb' },
            { label: 'ccc' },
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.selectOptions).toStrictEqual([
      { value: 0, label: 'aaa' },
      { value: 1, label: 'bbb' },
      { value: 2, label: 'ccc' },
    ])

    confirmSelectOptions(a, done, LocalVue, {
      0: 'aaa',
      1: 'bbb',
      2: 'ccc'
    })
  })

  it('should convert an array of objects with trackBy key only to `selectOptions`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          trackBy: 'name',
          items: [
            { name: 'aaa' },
            { name: 'bbb' },
            { name: 'ccc' },
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.selectOptions).toStrictEqual([
      { value: 0, name: 'aaa', label: 'aaa' },
      { value: 1, name: 'bbb', label: 'bbb' },
      { value: 2, name: 'ccc', label: 'ccc' },
    ])

    confirmSelectOptions(a, done, LocalVue, {
      0: 'aaa',
      1: 'bbb',
      2: 'ccc'
    })
  })

  it('should throw an error if an array of objects is provided as items without including the trackBy key', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      let form = createForm({
        schema: {
          a: {
            type: 'select',
            items: [
              { name: 'aaa' },
              { name: 'bbb' },
              { name: 'ccc' },
            ],
          }
        }
      })
    }).toThrowError()
    
    console.error = originalConsoleError

    done()
  })

  it('should convert an array of objects which contains value & label to `selectOptions`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: [
            { value: 'a', label: 'aaa' },
            { value: 'b', label: 'bbb' },
            { value: 'c', label: 'ccc' },
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.selectOptions).toStrictEqual([
      { value: 'a', label: 'aaa' },
      { value: 'b', label: 'bbb' },
      { value: 'c', label: 'ccc' },
    ])

    confirmSelectOptions(a, done, LocalVue, {
      'a': 'aaa',
      'b': 'bbb',
      'c': 'ccc'
    })
  })

  it('should convert an an object with string values to `selectOptions`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.selectOptions).toStrictEqual([
      { value: 'a', label: 'aaa' },
      { value: 'b', label: 'bbb' },
      { value: 'c', label: 'ccc' },
    ])

    confirmSelectOptions(a, done, LocalVue, {
      a: 'aaa',
      b: 'bbb',
      c: 'ccc'
    })
  })

  it('should convert an object with object values including label only to `selectOptions`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: {
            a: { label: 'aaa' },
            b: { label: 'bbb' },
            c: { label: 'ccc' },
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.selectOptions).toStrictEqual([
      { value: 'a', label: 'aaa' },
      { value: 'b', label: 'bbb' },
      { value: 'c', label: 'ccc' },
    ])

    confirmSelectOptions(a, done, LocalVue, {
      a: 'aaa',
      b: 'bbb',
      c: 'ccc'
    })
  })

  it('should convert an object of objects values with trackBy key only to `selectOptions`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          trackBy: 'name',
          items: {
            a: { name: 'aaa' },
            b: { name: 'bbb' },
            c: { name: 'ccc' },
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.selectOptions).toStrictEqual([
      { value: 'a', name: 'aaa', label: 'aaa' },
      { value: 'b', name: 'bbb', label: 'bbb' },
      { value: 'c', name: 'ccc', label: 'ccc' },
    ])

    confirmSelectOptions(a, done, LocalVue, {
      a: 'aaa',
      b: 'bbb',
      c: 'ccc'
    })
  })

  it('should throw an error if an object of objects is provided as items without including the trackBy key', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      let form = createForm({
        schema: {
          a: {
            type: 'select',
            items: {
              a: { name: 'aaa' },
              b: { name: 'bbb' },
              c: { name: 'ccc' },
            },
          }
        }
      })
    }).toThrowError()
    
    console.error = originalConsoleError

    done()
  })

  it('should convert an object with object values which includes value + label to `selectOptions`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: {
            a: { value: 'aa', label: 'aaa' },
            b: { value: 'bb', label: 'bbb' },
            c: { value: 'cc', label: 'ccc' },
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'SelectElement' }).at(0)

    expect(a.vm.selectOptions).toStrictEqual([
      { value: 'aa', label: 'aaa' },
      { value: 'bb', label: 'bbb' },
      { value: 'cc', label: 'ccc' },
    ])

    confirmSelectOptions(a, done, LocalVue, {
      aa: 'aaa',
      bb: 'bbb',
      cc: 'ccc'
    })
  })
})

describe('Select Element Events', () => {
  
})