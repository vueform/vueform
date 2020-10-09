import { createLocalVue, mount } from '@vue/test-utils'
import {
    createForm, confirmSelectOptions, installLaraform,
    testNativeSelectModel, testNonNativeSelectModel
} from 'test-helpers'
import { Laraform } from './../../../src/index'
import en from './../../../src/locales/en'

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

    done()
  })

  it('should render component attributes when native', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          id: 'aaa',
          placeholder: 'Placeholder',
          disabled: true,
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

    expect(a.get('select').attributes().id).toBe('aaa')
    expect(a.get('select').attributes().disabled).toBe('disabled')
    expect(a.get('select').attributes().name).toBe('a')

    expect(a.find('.' + a.vm.classes.selectNativePlaceholder).html()).toContain('Placeholder')

    done()
  })

  it('should render component attributes when non-native', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          search: true,
          trackBy: 'name',
          limit: 300,
          id: 'aaa',
          placeholder: 'Placeholder',
          disabled: true,
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    let vms$ = findAllComponents(form, { name: 'VueMultiselect' }).at(0)

    expect(vms$.vm.$props.name).toBe('a')
    expect(vms$.vm.$props.id).toBe('aaa')
    expect(vms$.vm.$props.placeholder).toBe('Placeholder')
    expect(vms$.vm.$props.disabled).toBe(true)
    expect(vms$.vm.$props.searchable).toBe(true)
    expect(vms$.vm.$props.trackBy).toBe('name')
    expect(vms$.vm.$props.optionsLimit).toBe(300)

    done()
  })

  it('should render floating label', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          floating: 'Select',
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    let elf = findAllComponents(form, { name: 'ElementLabelFloating' }).at(0)

    expect(elf.exists()).toBe(true)
    expect(elf.html()).toContain('Select')

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

    a.vm.update(1)

    expect(a.vm.selectedOption).toStrictEqual({
      value: 1,
      label: 'bbb'
    })
    
    done()
  })
})

describe('Select Element Model (native)', () => {
  it('should set default, change value, update & load with "array of string" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: [
            'a',
            'b',
            'c'
          ],
          default: 1
        }
      }
    })

    testNativeSelectModel(form, LocalVue, done)
  })
  
  it('should set default, change value, update & load with "array of objects with label only" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: [
            { label: 'a' },
            { label: 'b' },
            { label: 'c' },
          ],
          default: 1
        }
      }
    })

    testNativeSelectModel(form, LocalVue, done)
  })
  
  it('should set default, change value, update & load with "array of objects which contains value & label" items', (done) => {
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
          default: 'b'
        }
      }
    })

    testNativeSelectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with string values" items', (done) => {
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
          default: 'b'
        }
      }
    })

    testNativeSelectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with object values including label only" items', (done) => {
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
          default: 'b'
        }
      }
    })

    testNativeSelectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with object values which includes value + label" items', (done) => {
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
          default: 'bb'
        }
      }
    })

    testNativeSelectModel(form, LocalVue, done, ['aa', 'bb', 'cc'])
  })
})

describe('Select Element Model (non-native)', () => {
  it('should set default, change value, update & load with "array of string" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: [
            'a',
            'b',
            'c'
          ],
          default: 1
        }
      }
    })

    testNonNativeSelectModel(form, LocalVue, done)
  })
  
  it('should set default, change value, update & load with "array of objects with label only" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: [
            { label: 'a' },
            { label: 'b' },
            { label: 'c' },
          ],
          default: 1
        }
      }
    })

    testNonNativeSelectModel(form, LocalVue, done)
  })
  
  it('should set default, change value, update & load with "array of objects which contains value & label" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: [
            { value: 'a', label: 'aaa' },
            { value: 'b', label: 'bbb' },
            { value: 'c', label: 'ccc' },
          ],
          default: 'b'
        }
      }
    })

    testNonNativeSelectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with string values" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          default: 'b'
        }
      }
    })

    testNonNativeSelectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with object values including label only" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: {
            a: { label: 'aaa' },
            b: { label: 'bbb' },
            c: { label: 'ccc' },
          },
          default: 'b'
        }
      }
    })

    testNonNativeSelectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with object values which includes value + label" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: {
            a: { value: 'aa', label: 'aaa' },
            b: { value: 'bb', label: 'bbb' },
            c: { value: 'cc', label: 'ccc' },
          },
          default: 'bb'
        }
      }
    })

    testNonNativeSelectModel(form, LocalVue, done, ['aa', 'bb', 'cc'])
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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

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
  it('should trigger `change` on native element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          items: ['a', 'b', 'c'],
          onChange: onChangeMock
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    a.get('select').findAll('option').at(1).setSelected()

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe(1)
    expect(onChangeMock.mock.calls[0][1]).toBe(null)
    
    done()
  })

  it('should trigger `change` on non-native element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: ['a', 'b', 'c'],
          onChange: onChangeMock
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    a.vm.select$.select(a.vm.selectOptions[1])

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe(1)
    expect(onChangeMock.mock.calls[0][1]).toBe(null)
    
    done()
  })

  it('should trigger `select` on non-native element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onSelectMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: ['a', 'b', 'c'],
          onSelect: onSelectMock
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

    expect(onSelectMock.mock.calls.length).toBe(0)

    a.vm.select$.select(a.vm.selectOptions[1])

    expect(onSelectMock.mock.calls.length).toBe(1)
    expect(onSelectMock.mock.calls[0][0]).toStrictEqual(a.vm.selectOptions[1])
    
    done()
  })

  it('should trigger `deselect` on non-native element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onDeselectMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: ['a', 'b', 'c'],
          onDeselect: onDeselectMock
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

    expect(onDeselectMock.mock.calls.length).toBe(0)

    a.vm.select$.$emit('remove', a.vm.selectOptions[1])

    expect(onDeselectMock.mock.calls.length).toBe(1)
    expect(onDeselectMock.mock.calls[0][0]).toStrictEqual(a.vm.selectOptions[1])
    
    done()
  })

  it('should trigger `searchChange` on non-native element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onSearchChangeMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: ['a', 'b', 'c'],
          onSearchChange: onSearchChangeMock
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

    expect(onSearchChangeMock.mock.calls.length).toBe(0)

    a.vm.select$.$emit('search-change', 'aaa')

    expect(onSearchChangeMock.mock.calls.length).toBe(1)
    expect(onSearchChangeMock.mock.calls[0][0]).toStrictEqual('aaa')
    
    done()
  })

  it('should trigger `open` on non-native element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onOpenMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: ['a', 'b', 'c'],
          onOpen: onOpenMock
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

    expect(onOpenMock.mock.calls.length).toBe(0)

    a.vm.select$.$emit('open')

    expect(onOpenMock.mock.calls.length).toBe(1)
    
    done()
  })

  it('should trigger `close` on non-native element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onCloseMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: ['a', 'b', 'c'],
          onClose: onCloseMock
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

    expect(onCloseMock.mock.calls.length).toBe(0)

    a.vm.select$.$emit('close')

    expect(onCloseMock.mock.calls.length).toBe(1)
    
    done()
  })

  it('should not trigger `tag` on non-native element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onTagMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: ['a', 'b', 'c'],
          onTag: onTagMock
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)

    expect(onTagMock.mock.calls.length).toBe(0)

    a.vm.select$.$emit('tag')

    expect(onTagMock.mock.calls.length).toBe(0)
    
    done()
  })
})

describe('Select Element Slots', () => {
  it('should be able to use custom slot for `option` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: ['a', 'b', 'c'],
          slots: {
            option: LocalVue.extend({
              props: ['el$', 'option', 'search'],
              render(h) {
                return h('div', this.option.label + ' select')
              }
            })
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    let mso0 = a.findAll('.multiselect__option').at(0)
    let mso1 = a.findAll('.multiselect__option').at(1)
    let mso2 = a.findAll('.multiselect__option').at(2)

    expect(mso0.html()).toContain('a select')
    expect(mso1.html()).toContain('b select')
    expect(mso2.html()).toContain('c select')

    done()
  })

  it('should be able to use inline slot for `option`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            a: {
              type: 'select',
              native: false,
              items: ['a', 'b', 'c'],
            }
          }
        }
      },
      render(h) {
        return h('form', [
          h(this.extendedTheme.elements.SelectElement, {
            props: {
              schema: this.schema.a,
              name: 'a'
            },
            directives: [
              {
                name: 'ref',
                arg: 'elements$'
              }
            ],
            scopedSlots: {
              option: (props) => {
                return h('div', props.option.label + ' select')
              }
            }
          })
        ])
      }
    })

    let form = mount(component, {
      LocalVue,
      mocks: {
        $laraform: {
          config: {},
          services: {
            messageBag: jest.fn()
          },
          locales: {
            en: en,
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    let mso0 = a.findAll('.multiselect__option').at(0)
    let mso1 = a.findAll('.multiselect__option').at(1)
    let mso2 = a.findAll('.multiselect__option').at(2)

    expect(mso0.html()).toContain('a select')
    expect(mso1.html()).toContain('b select')
    expect(mso2.html()).toContain('c select')

    done()
  })

  it('should be able to use custom slot for `beforeList` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: ['a', 'b', 'c'],
          label: 'AAA',
          slots: {
            beforeList: LocalVue.extend({
              props: ['el$'],
              render(h) {
                return h('div', this.el$.label + ' before list')
              }
            })
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    
    LocalVue.nextTick(() => {
      expect(a.html()).toContain('AAA before list')
      
      done()
    })

  })

  it('should be able to use inline slot for `beforeList`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            a: {
              type: 'select',
              native: false,
              items: ['a', 'b', 'c'],
              label: 'AAA'
            }
          }
        }
      },
      render(h) {
        return h('form', [
          h(this.extendedTheme.elements.SelectElement, {
            props: {
              schema: this.schema.a,
              name: 'a'
            },
            directives: [
              {
                name: 'ref',
                arg: 'elements$'
              }
            ],
            scopedSlots: {
              beforeList: (props) => {
                return h('div', props.el$.label + ' before list')
              }
            }
          })
        ])
      }
    })

    let form = mount(component, {
      LocalVue,
      mocks: {
        $laraform: {
          config: {},
          services: {
            messageBag: jest.fn()
          },
          locales: {
            en: en,
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    
    expect(a.html()).toContain('AAA before list')

    done()
  })

  it('should be able to use custom slot for `afterList` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          native: false,
          items: ['a', 'b', 'c'],
          label: 'AAA',
          slots: {
            afterList: LocalVue.extend({
              props: ['el$'],
              render(h) {
                return h('div', this.el$.label + ' after list')
              }
            })
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    
    LocalVue.nextTick(() => {
      expect(a.html()).toContain('AAA after list')
      
      done()
    })

  })

  it('should be able to use inline slot for `afterList`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            a: {
              type: 'select',
              native: false,
              items: ['a', 'b', 'c'],
              label: 'AAA'
            }
          }
        }
      },
      render(h) {
        return h('form', [
          h(this.extendedTheme.elements.SelectElement, {
            props: {
              schema: this.schema.a,
              name: 'a'
            },
            directives: [
              {
                name: 'ref',
                arg: 'elements$'
              }
            ],
            scopedSlots: {
              afterList: (props) => {
                return h('div', props.el$.label + ' after list')
              }
            }
          })
        ])
      }
    })

    let form = mount(component, {
      LocalVue,
      mocks: {
        $laraform: {
          config: {},
          services: {
            messageBag: jest.fn()
          },
          locales: {
            en: en,
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    
    expect(a.html()).toContain('AAA after list')

    done()
  })

  it('should be able to use custom slot for `noResult` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          search: true,
          items: ['a', 'b', 'c'],
          slots: {
            noResult: LocalVue.extend({
              props: ['el$'],
              render(h) {
                return h('div', 'No results.')
              }
            })
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    
    LocalVue.nextTick(() => {
      expect(a.html()).toContain('No results')
      
      done()
    })

  })

  it('should be able to use inline slot for `noResult`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            a: {
              type: 'select',
              search: true,
              items: ['a', 'b', 'c'],
            }
          }
        }
      },
      render(h) {
        return h('form', [
          h(this.extendedTheme.elements.SelectElement, {
            props: {
              schema: this.schema.a,
              name: 'a'
            },
            directives: [
              {
                name: 'ref',
                arg: 'elements$'
              }
            ],
            scopedSlots: {
              noResult: (props) => {
                return h('div', 'No results.')
              }
            }
          })
        ])
      }
    })

    let form = mount(component, {
      LocalVue,
      mocks: {
        $laraform: {
          config: {},
          services: {
            messageBag: jest.fn()
          },
          locales: {
            en: en,
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    
    expect(a.html()).toContain('No results.')

    done()
  })

  it('should be able to use custom slot for `singleLabel` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          search: true,
          items: ['a', 'b', 'c'],
          default: 1,
          slots: {
            singleLabel: LocalVue.extend({
              props: ['el$', 'option'],
              render(h) {
                return h('div', this.option.label + ' single label')
              }
            })
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    
    LocalVue.nextTick(() => {
      expect(a.find('.multiselect__single').html()).toContain('b single label')
      
      done()
    })
  })

  it('should be able to use inline slot for `singleLabel`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            a: {
              type: 'select',
              search: true,
              items: ['a', 'b', 'c'],
              default: 1,
            }
          }
        }
      },
      render(h) {
        return h('form', [
          h(this.extendedTheme.elements.SelectElement, {
            props: {
              schema: this.schema.a,
              name: 'a'
            },
            directives: [
              {
                name: 'ref',
                arg: 'elements$'
              }
            ],
            scopedSlots: {
              singleLabel: (props) => {
                return h('div', props.option.label + ' single label')
              }
            }
          })
        ])
      }
    })

    let form = mount(component, {
      LocalVue,
      mocks: {
        $laraform: {
          config: {},
          services: {
            messageBag: jest.fn()
          },
          locales: {
            en: en,
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    
    expect(a.find('.multiselect__single').html()).toContain('b single label')

    done()
  })

  it('should be able to use custom slot for `noOptions` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'select',
          search: true,
          items: ['a', 'b', 'c'],
          default: 1,
          slots: {
            noOptions: LocalVue.extend({
              props: ['el$', 'option'],
              render(h) {
                return h('div', 'No options.')
              }
            })
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    
    LocalVue.nextTick(() => {
      expect(a.html()).toContain('No options.')
      
      done()
    })
  })

  it('should be able to use inline slot for `noOptions`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            a: {
              type: 'select',
              search: true,
              items: ['a', 'b', 'c'],
              default: 1,
            }
          }
        }
      },
      render(h) {
        return h('form', [
          h(this.extendedTheme.elements.SelectElement, {
            props: {
              schema: this.schema.a,
              name: 'a'
            },
            directives: [
              {
                name: 'ref',
                arg: 'elements$'
              }
            ],
            scopedSlots: {
              noOptions: (props) => {
                return h('div', 'No options.')
              }
            }
          })
        ])
      }
    })

    let form = mount(component, {
      LocalVue,
      mocks: {
        $laraform: {
          config: {},
          services: {
            messageBag: jest.fn()
          },
          locales: {
            en: en,
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'SelectElement' }).at(0)
    
    expect(a.html()).toContain('No options.')

    done()
  })
})