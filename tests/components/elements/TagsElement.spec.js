import { createLocalVue, mount } from '@vue/test-utils'
import {
    createForm, confirmSelectOptions, installLaraform,
    testTagsModel,
} from './../../../src/utils/testHelpers'
import { Laraform } from './../../../src/index'
import en from './../../../src/locales/en'

describe('Tags Element Rendering', () => {
  it('should render tags element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: {
            a: 1
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    expect(a.exists()).toBe(true)

    done()
  })
})

describe('Tags Element Props', () => {
  it('should have false for `create` by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    expect(a.vm.create).toBe(false)
    
    done()
  })

  it('should set `create` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
          create: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    expect(a.vm.create).toBe(true)
    
    done()
  })

  it('should set `create` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.create = true

    expect(a.vm.create).toBe(true)
    
    done()
  })

  it('should return `false` for native', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
          native: true
        },
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    expect(a.vm.native).toBe(false)
    
    done()
  })

  it('should have empty string by default for `tagPlaceholder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
        },
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    expect(a.vm.tagPlaceholder).toBe('')
    
    done()
  })

  it('should have localized string by default for `tagPlaceholder` if create is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
          create: true
        },
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    expect(a.vm.tagPlaceholder).toBe(a.vm.$laraform.locales[a.vm.locale].laraform.elements.tags.createLabel)
    
    done()
  })

  it('should set `tagPlaceholder` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
          create: true,
          tagPlaceholder: 'aaa'
        },
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    expect(a.vm.tagPlaceholder).toBe('aaa')
    
    done()
  })

  it('should set `tagPlaceholder` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'aaa',
            'bbb',
            'ccc',
          ],
          create: true,
        },
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.tagPlaceholder = 'aaa'

    expect(a.vm.tagPlaceholder).toBe('aaa')
    
    done()
  })
})

describe('Tags Element Model', () => {
  it('should set default, change value, update & load with "array of string" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'a',
            'b',
            'c'
          ],
          default: [1]
        }
      }
    })

    testTagsModel(form, LocalVue, done)
  })
  
  it('should set default, change value, update & load with "array of objects with label only" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            { label: 'a' },
            { label: 'b' },
            { label: 'c' },
          ],
          default: [1]
        }
      }
    })

    testTagsModel(form, LocalVue, done)
  })
  
  it('should set default, change value, update & load with "array of objects which contains value & label" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            { value: 'a', label: 'aaa' },
            { value: 'b', label: 'bbb' },
            { value: 'c', label: 'ccc' },
          ],
          default: ['b']
        }
      }
    })

    testTagsModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with string values" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          default: ['b']
        }
      }
    })

    testTagsModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with object values including label only" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: {
            a: { label: 'aaa' },
            b: { label: 'bbb' },
            c: { label: 'ccc' },
          },
          default: ['b']
        }
      }
    })

    testTagsModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with object values which includes value + label" items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: {
            a: { value: 'aa', label: 'aaa' },
            b: { value: 'bb', label: 'bbb' },
            c: { value: 'cc', label: 'ccc' },
          },
          default: ['bb']
        }
      }
    })

    testTagsModel(form, LocalVue, done, ['aa', 'bb', 'cc'])
  })
  
  it('should update value when an option is selected', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          native: false,
          items: [
            'a',
            'b',
            'c',
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.select$.select({value: 1, label: 'b'})

    LocalVue.nextTick(() => {
      a.vm.select$.select({value: 2, label: 'c'})

      expect(a.vm.value).toStrictEqual([1, 2])

      done()
    })
  })
})

describe('Tags Element Methods', () => {
  it('should `select` options', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          native: false,
          items: [
            'a',
            'b',
            'c'
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.select(1)
    a.vm.select(2)
    a.vm.select(2)
    
    expect(a.vm.value).toStrictEqual([1,2])

    LocalVue.nextTick(() => {
      expect(a.findAll('.multiselect__element').length).toBe(1)
      
      done()
    })
  })

  it('should `deselect` options', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'tags',
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

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.deselect(1)
    a.vm.deselect(2)
    a.vm.deselect(2)
    
    expect(a.vm.value).toStrictEqual([0])

    LocalVue.nextTick(() => {
      expect(a.findAll('.multiselect__element').length).toBe(2)
      
      done()
    })
  })
  
  it('should `addItem` to array of items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'a',
            'b',
            'c'
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.addItem('d', 'd')

    a.vm.select('d')

    expect(a.vm.value).toStrictEqual(['d'])
    expect(a.vm.items[3]).toStrictEqual({ value: 'd', label: 'd' })

    done()
  })
  
  it('should `addItem` to complex array of items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          trackBy: 'name',
          items: [
            { value: 'a', name: 'aaa' },
            { value: 'b', name: 'bbb' },
            { value: 'c', name: 'ccc' },
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.addItem('d', 'ddd')

    a.vm.select('d')

    expect(a.vm.value).toStrictEqual(['d'])
    expect(a.vm.items[3]).toStrictEqual({ value: 'd', name: 'ddd', label: 'ddd' })

    done()
  })
  
  it('should `addItem` to object of items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.addItem('d', 'ddd')

    a.vm.select('d')

    expect(a.vm.value).toStrictEqual(['d'])
    expect(a.vm.items.d).toStrictEqual({ value: 'd', label: 'ddd' })

    done()
  })
  
  it('should `addItem` to complex object of items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          trackBy: 'name',
          items: {
            a: { value: 'aa', name: 'aaa' },
            b: { value: 'bb', name: 'bbb' },
            c: { value: 'cc', name: 'ccc' }
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.addItem('dd', 'ddd')

    a.vm.select('dd')

    expect(a.vm.value).toStrictEqual(['dd'])
    expect(a.vm.items.dd).toStrictEqual({ value: 'dd', label: 'ddd', name: 'ddd' })

    done()
  })
  
  it('should `removeItem` from an array of items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'aaa',
            'bbb',
            'ccc'
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.removeItem(1)

    LocalVue.nextTick(() => {
      expect(a.findAll('.multiselect__element').length).toBe(2)
      expect(a.findAll('.multiselect__element').at(0).html()).toContain('aaa')
      expect(a.findAll('.multiselect__element').at(1).html()).toContain('ccc')

      done()
    })
  })
  
  it('should `removeItem` from a complex array of items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          trackBy: 'name',
          items: [
            { value: 'a', name: 'aaa' },
            { value: 'b', name: 'bbb' },
            { value: 'c', name: 'ccc' },
          ],
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.removeItem('b')

    LocalVue.nextTick(() => {
      expect(a.findAll('.multiselect__element').length).toBe(2)
      expect(a.findAll('.multiselect__element').at(0).html()).toContain('aaa')
      expect(a.findAll('.multiselect__element').at(1).html()).toContain('ccc')

      done()
    })
  })
  
  it('should `removeItem` form an object of items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.removeItem('b')

    LocalVue.nextTick(() => {
      expect(a.findAll('.multiselect__element').length).toBe(2)
      expect(a.findAll('.multiselect__element').at(0).html()).toContain('aaa')
      expect(a.findAll('.multiselect__element').at(1).html()).toContain('ccc')

      done()
    })
  })
  
  it('should `removeItem` form a complex object of items', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          trackBy: 'name',
          items: {
            a: { value: 'aa', name: 'aaa' },
            b: { value: 'bb', name: 'bbb' },
            c: { value: 'cc', name: 'ccc' }
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    a.vm.removeItem('bb')

    LocalVue.nextTick(() => {
      expect(a.findAll('.multiselect__element').length).toBe(2)
      expect(a.findAll('.multiselect__element').at(0).html()).toContain('aaa')
      expect(a.findAll('.multiselect__element').at(1).html()).toContain('ccc')

      done()
    })
  })
})

describe('Tags Element Slots', () => {
  it('should be able to use custom slot for `tag` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: ['a', 'b', 'c'],
          default: [1,2],
          slots: {
            tag: LocalVue.extend({
              props: ['el$', 'option', 'search', 'remove'],
              render(h) {
                return h('span', this.option.label + ' tag')
              }
            })
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    LocalVue.nextTick(() => {
      expect(a.findAll('.multiselect__tags-wrap span').length).toBe(2)
      expect(a.findAll('.multiselect__tags-wrap span').at(0).html()).toContain('b tag')
      expect(a.findAll('.multiselect__tags-wrap span').at(1).html()).toContain('c tag')

      done()
    })
  })

  it('should be able to use inline slot for `tag`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            a: {
              type: 'tags',
              items: ['a', 'b', 'c'],
              default: [1,2],
            }
          }
        }
      },
      render(h) {
        return h('form', [
          h(this.extendedTheme.elements.TagsElement, {
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
              tag: (props) => {
                return h('span', props.option.label + ' tag')
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

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    LocalVue.nextTick(() => {
      expect(a.findAll('.multiselect__tags-wrap span').length).toBe(2)
      expect(a.findAll('.multiselect__tags-wrap span').at(0).html()).toContain('b tag')
      expect(a.findAll('.multiselect__tags-wrap span').at(1).html()).toContain('c tag')

      done()
    })
  })

  it('should be able to use custom slot for `selection` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: ['a', 'b', 'c'],
          default: [1,2],
          slots: {
            selection: LocalVue.extend({
              props: ['el$', 'values', 'search', 'remove'],
              render(h) {
                return h('div', {class: 'wrap'}, this.values.length + ' selected')
              }
            })
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    LocalVue.nextTick(() => {
      expect(a.find('.wrap').html()).toContain('2 selected')

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
              type: 'tags',
              items: ['a', 'b', 'c'],
              default: [1,2],
            }
          }
        }
      },
      render(h) {
        return h('form', [
          h(this.extendedTheme.elements.TagsElement, {
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
                return h('div', {class: 'wrap'}, props.values.length + ' selected')
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

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    LocalVue.nextTick(() => {
      expect(a.find('.wrap').html()).toContain('2 selected')

      done()
    })
  })
})

describe('Tags Element Events', () => {
  it('should not fire `tag` if `create` is false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onTagMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'a',
            'b',
            'c'
          ],
          onTag: onTagMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    LocalVue.nextTick(() => {
      a.vm.select$.$emit('tag')

      expect(onTagMock.mock.calls.length).toBe(0)
      
      done()
    })
  })

  it('should fire `tag` if `create` is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onTagMock = jest.fn()

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'a',
            'b',
            'c'
          ],
          create: true,
          onTag: onTagMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    LocalVue.nextTick(() => {
      a.vm.select$.$emit('tag', 'aaa')

      expect(onTagMock.mock.calls.length).toBe(1)
      expect(onTagMock.mock.calls[0][0]).toBe('aaa')

      // Should not auto-create the tag
      LocalVue.nextTick(() => {
        expect(a.vm.value).toStrictEqual([])
        expect(a.vm.items[3]).toStrictEqual(undefined)
        
        done()
      })
    })
  })

  it('should add `tag` if not subscribed to `tag` event but `create` is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: [
            'a',
            'b',
            'c'
          ],
          create: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    LocalVue.nextTick(() => {
      a.vm.select$.$emit('tag', 'd')

      LocalVue.nextTick(() => {
        expect(a.vm.value).toStrictEqual(['d'])
        expect(a.vm.items[3]).toStrictEqual({ value: 'd', label: 'd' })
        
        done()
      })
    })
  })

  it('should not add `tag` if it already exists', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'tags',
          items: {
            a: 'a',
            b: 'b',
            c: 'c',
          },
          create: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TagsElement' }).at(0)

    LocalVue.nextTick(() => {
      a.vm.select$.$emit('tag', 'b')

      LocalVue.nextTick(() => {
        expect(a.vm.value).toStrictEqual([])
        expect(a.vm.items[3]).toStrictEqual(undefined)
        
        done()
      })
    })
  })
})