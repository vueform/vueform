import { createLocalVue, mount } from '@vue/test-utils'
import {
    createForm, installLaraform,
    testNativeMultiselectModel, testNonNativeMultiselectModel
} from './../../../src/utils/testHelpers'
import { Laraform } from './../../../src/index'
import en from './../../../src/locales/en'

describe('Multiselect Element Rendering', () => {
  it('should render multiselect element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: {
            a: 1
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

    expect(a.exists()).toBe(true)

    done()
  })
})

describe('Multiselect Element Props', () => {
  it('should have `empty` true if no items selected or value null', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

    expect(a.vm.empty).toBe(true)

    a.vm.value = [1]

    expect(a.vm.empty).toBe(false)

    a.vm.update(null)
    
    expect(a.vm.empty).toBe(true)
    
    done()
  })

  it('should return true for `isArray`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

    expect(a.vm.isArrayType).toBe(true)
    
    done()
  })

  it('should return undefined for `textValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

    expect(a.vm.textValue).toBe(undefined)
    
    done()
  })
})

describe('Multiselect Element Model (native)', () => {
  it('should set default, change value, update & load with "array of string" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: [
            'a',
            'b',
            'c'
          ],
          default: [1]
        }
      }
    })

    testNativeMultiselectModel(form, LocalVue, done)
  })
  
  it('should set default, change value, update & load with "array of objects with label only" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: [
            { label: 'a' },
            { label: 'b' },
            { label: 'c' },
          ],
          default: [1]
        }
      }
    })

    testNativeMultiselectModel(form, LocalVue, done)
  })
  
  it('should set default, change value, update & load with "array of objects which contains value & label" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: [
            { value: 'a', label: 'aaa' },
            { value: 'b', label: 'bbb' },
            { value: 'c', label: 'ccc' },
          ],
          default: ['b']
        }
      }
    })

    testNativeMultiselectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with string values" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          default: ['b']
        }
      }
    })

    testNativeMultiselectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with object values including label only" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: {
            a: { label: 'aaa' },
            b: { label: 'bbb' },
            c: { label: 'ccc' },
          },
          default: ['b']
        }
      }
    })

    testNativeMultiselectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with object values which includes value + label" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: {
            a: { value: 'aa', label: 'aaa' },
            b: { value: 'bb', label: 'bbb' },
            c: { value: 'cc', label: 'ccc' },
          },
          default: ['bb']
        }
      }
    })

    testNativeMultiselectModel(form, LocalVue, done, ['aa', 'bb', 'cc'])
  })
  
  it('should update value when an option is selected', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: [
            'a',
            'b',
            'c',
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

    let option1 = a.findAll('option').at(1)
    let option2 = a.findAll('option').at(2)

    option1.setSelected(true)
    option2.setSelected(true)

    expect(a.vm.value).toStrictEqual([1, 2])

    done()
  })
})

describe('Multiselect Element Model (non-native)', () => {
  it('should set default, change value, update & load with "array of string" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          native: false,
          items: [
            'a',
            'b',
            'c'
          ],
          default: [1]
        }
      }
    })

    testNonNativeMultiselectModel(form, LocalVue, done)
  })
  
  it('should set default, change value, update & load with "array of objects with label only" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          native: false,
          items: [
            { label: 'a' },
            { label: 'b' },
            { label: 'c' },
          ],
          default: [1]
        }
      }
    })

    testNonNativeMultiselectModel(form, LocalVue, done)
  })
  
  it('should set default, change value, update & load with "array of objects which contains value & label" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          native: false,
          items: [
            { value: 'a', label: 'aaa' },
            { value: 'b', label: 'bbb' },
            { value: 'c', label: 'ccc' },
          ],
          default: ['b']
        }
      }
    })

    testNonNativeMultiselectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with string values" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          native: false,
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          default: ['b']
        }
      }
    })

    testNonNativeMultiselectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with object values including label only" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          native: false,
          items: {
            a: { label: 'aaa' },
            b: { label: 'bbb' },
            c: { label: 'ccc' },
          },
          default: ['b']
        }
      }
    })

    testNonNativeMultiselectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with object values which includes value + label" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          native: false,
          items: {
            a: { value: 'aa', label: 'aaa' },
            b: { value: 'bb', label: 'bbb' },
            c: { value: 'cc', label: 'ccc' },
          },
          default: ['bb']
        }
      }
    })

    testNonNativeMultiselectModel(form, LocalVue, done, ['aa', 'bb', 'cc'])
  })
  
  it('should update value when an option is selected', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          native: false,
          items: [
            'a',
            'b',
            'c',
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

    a.vm.select$.select({value: 1, label: 'b'})

    LocalVue.nextTick(() => {
      a.vm.select$.select({value: 2, label: 'c'})

      expect(a.vm.value).toStrictEqual([1, 2])

      done()
    })
  })
})

describe('Multiselect Element Methods', () => {
  it('should `select` options in native', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: [
            'a',
            'b',
            'c'
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

    a.vm.select(1)
    a.vm.select(2)
    a.vm.select(2)
    
    expect(a.vm.value).toStrictEqual([1,2])

    LocalVue.nextTick(() => {
      expect(a.get('select').findAll('option').at(0).element.selected).toBe(false)
      expect(a.get('select').findAll('option').at(1).element.selected).toBe(true)
      expect(a.get('select').findAll('option').at(2).element.selected).toBe(true)
      
      done()
    })
  })

  it('should `deselect` options in native', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          items: [
            'a',
            'b',
            'c'
          ],
          default: [0,1,2]
        }
      }
    })

    let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

    a.vm.deselect(1)
    a.vm.deselect(2)
    a.vm.deselect(2)
    
    expect(a.vm.value).toStrictEqual([0])

    LocalVue.nextTick(() => {
      expect(a.get('select').findAll('option').at(0).element.selected).toBe(true)
      expect(a.get('select').findAll('option').at(1).element.selected).toBe(false)
      expect(a.get('select').findAll('option').at(2).element.selected).toBe(false)
      
      done()
    })
  })

  it('should `select` options in non-native', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          native: false,
          items: [
            'a',
            'b',
            'c'
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

    a.vm.select(1)
    a.vm.select(2)
    a.vm.select(2)
    
    expect(a.vm.value).toStrictEqual([1,2])

    LocalVue.nextTick(() => {
      expect(a.findAll('.multiselect__option').at(0).element.classList.toString()).not.toContain('selected')
      expect(a.findAll('.multiselect__option').at(1).element.classList.toString()).toContain('selected')
      expect(a.findAll('.multiselect__option').at(2).element.classList.toString()).toContain('selected')
      
      done()
    })
  })

  it('should `deselect` options in non-native', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          native: false,
          items: [
            'a',
            'b',
            'c'
          ],
          default: [0,1,2],
        }
      }
    })

    let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

    a.vm.deselect(1)
    a.vm.deselect(2)
    a.vm.deselect(2)
    
    expect(a.vm.value).toStrictEqual([0])

    LocalVue.nextTick(() => {
      expect(a.findAll('.multiselect__option').at(0).element.classList.toString()).toContain('selected')
      expect(a.findAll('.multiselect__option').at(1).element.classList.toString()).not.toContain('selected')
      expect(a.findAll('.multiselect__option').at(2).element.classList.toString()).not.toContain('selected')
      
      done()
    })
  })
})

describe('Multiselect Element Slots', () => {
  it('should be able to use custom slot for `selection` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'multiselect',
          native: false,
          items: ['a', 'b', 'c'],
          default: [1,2],
          slots: {
            selection: LocalVue.extend({
              props: ['el$', 'values'],
              render(h) {
                return h('div', this.values.length + ' items')
              }
            })
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

    LocalVue.nextTick(() => {
      expect(a.find('.multiselect__tags').html()).toContain('2 items')

      done()
    })
  })

  it('should be able to use inline slot for `selection`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            a: {
              type: 'multiselect',
              native: false,
              items: ['a', 'b', 'c'],
              default: [1,2],
            }
          }
        }
      },
      render(h) {
        return h('form', [
          h(this.extendedTheme.elements.MultiselectElement, {
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
              selection: (props) => {
                return h('div', props.values.length + ' items')
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

    let a = form.findAllComponents({ name: 'MultiselectElement' }).at(0)

    LocalVue.nextTick(() => {
      expect(a.find('.multiselect__tags').html()).toContain('2 items')

      done()
    })
  })
})