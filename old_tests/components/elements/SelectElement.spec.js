import { createLocalVue, mount } from '@vue/test-utils'
import {
    createForm, confirmSelectOptions, installLaraform,
    testNativeSelectModel, testNonNativeSelectModel
} from 'test-helpers'
import { Laraform } from './../../../src/index'
import en from './../../../src/locales/en'

// describe('Select Element Rendering', () => {
//   it('should render select element', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           items: {
//             a: 1
//           }
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     done()
//   })

//   it('should render component attributes when native', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           id: 'aaa',
//           placeholder: 'Placeholder',
//           disabled: true,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.get('select').attributes().id).toBe('aaa')
//     expect(el.get('select').attributes().disabled).toBe('disabled')
//     expect(el.get('select').attributes().name).toBe('a')

//     expect(el.find('.' + a.vm.classes.selectNativePlaceholder).html()).toContain('Placeholder')

//     done()
//   })

//   it('should render component attributes when non-native', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           native: false,
//           search: true,
//           trackBy: 'name',
//           limit: 300,
//           id: 'aaa',
//           placeholder: 'Placeholder',
//           disabled: true,
//         }
//       }
//     })

//     let el = form.vm.el$('el')
//     let vms$ = findAllComponents(form, { name: 'VueMultiselect' }).at(0)

//     expect(vms$.vm.$props.name).toBe('a')
//     expect(vms$.vm.$props.id).toBe('aaa')
//     expect(vms$.vm.$props.placeholder).toBe('Placeholder')
//     expect(vms$.vm.$props.disabled).toBe(true)
//     expect(vms$.vm.$props.searchable).toBe(true)
//     expect(vms$.vm.$props.trackBy).toBe('name')
//     expect(vms$.vm.$props.optionsLimit).toBe(300)

//     done()
//   })

//   it('should render floating label', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           floating: 'Select',
//         }
//       }
//     })

//     let el = form.vm.el$('el')
//     let elf = findAllComponents(form, { name: 'ElementLabelFloating' }).at(0)

//     expect(elf.exists()).toBe(true)
//     expect(elf.html()).toContain('Select')

//     done()
//   })
// })

// describe('Select Element Props', () => {
//   it('should have empty object as default for `items`', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.items).toStrictEqual({})

//     done()
//   })

//   it('should set `items` from schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           items: {
//             a: 1,
//             b: 2,
//           }
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.items).toStrictEqual({
//       a: 1,
//       b: 2,
//     })

//     done()
//   })

//   it('should set `items` to schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     a.vm.items = {
//       a: 1,
//       b: 2,
//     }

//     expect(el.vm.items).toStrictEqual({
//       a: 1,
//       b: 2,
//     })

//     done()
//   })

//   it('should have true as default for `native`', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.native).toStrictEqual(true)

//     done()
//   })

//   it('should set `native` from schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           native: false
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.native).toStrictEqual(false)

//     done()
//   })

//   it('should set `native` to schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     a.vm.native = false

//     expect(el.vm.native).toStrictEqual(false)

//     done()
//   })

//   it('should have "label" as default for `trackBy`', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.trackBy).toStrictEqual('label')

//     done()
//   })

//   it('should set `trackBy` from schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           trackBy: 'name'
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.trackBy).toStrictEqual('name')

//     done()
//   })

//   it('should set `trackBy` to schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     a.vm.trackBy = 'name'

//     expect(el.vm.trackBy).toStrictEqual('name')

//     done()
//   })

//   it('should have false as default for `search`', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.search).toStrictEqual(false)

//     done()
//   })

//   it('should set `search` from schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           search: true
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.search).toStrictEqual(true)

//     done()
//   })

//   it('should set `search` to schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     a.vm.search = true

//     expect(el.vm.search).toStrictEqual(true)

//     done()
//   })

//   it('should have 1000 as default for `limit`', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.limit).toStrictEqual(1000)

//     done()
//   })

//   it('should set `limit` from schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           limit: 500
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.limit).toStrictEqual(500)

//     done()
//   })

//   it('should set `limit` to schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     a.vm.limit = 500

//     expect(el.vm.limit).toStrictEqual(500)

//     done()
//   })

//   it('should have null as default for `placeholder`', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.placeholder).toStrictEqual(null)

//     done()
//   })

//   it('should set `placeholder` from schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           placeholder: 'aaa'
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.placeholder).toStrictEqual('aaa')

//     done()
//   })

//   it('should set `placeholder` to schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     a.vm.placeholder = 'aaa'

//     expect(el.vm.placeholder).toStrictEqual('aaa')

//     done()
//   })

//   it('should have null as default for `floating`', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.floating).toStrictEqual(null)

//     done()
//   })

//   it('should set `floating` from schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           floating: 'aaa'
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.floating).toStrictEqual('aaa')

//     done()
//   })

//   it('should set `floating` to schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     a.vm.floating = 'aaa'

//     expect(el.vm.floating).toStrictEqual('aaa')

//     done()
//   })

//   it('should have `defaultOptions` as default for `options`', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.options).toStrictEqual(a.vm.defaultOptions)

//     done()
//   })

//   it('should set `options` from schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           options: {
//             a: 'aaa'
//           }
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.options).toStrictEqual(Object.assign({}, a.vm.defaultOptions, {
//       a: 'aaa'
//     }))

//     done()
//   })

//   it('should set `options` to schema', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     a.vm.options = {
//       a: 'aaa'
//     }

//     expect(el.vm.options).toStrictEqual(Object.assign({}, a.vm.defaultOptions, {
//       a: 'aaa'
//     }))

//     done()
//   })

//   it('should return true for `isNative` if native is true & search is false', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.isNative).toBe(true)

//     a.vm.native = false

//     expect(el.vm.isNative).toBe(false)
    
//     a.vm.native = true

//     expect(el.vm.isNative).toBe(true)

//     a.vm.search = true

//     expect(el.vm.isNative).toBe(false)

//     done()
//   })

//   it('should return current value\'s label for `textValue`', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           items: [
//             'aaa',
//             'bbb',
//             'ccc',
//           ],
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     a.vm.update(1)

//     expect(el.vm.textValue).toBe('bbb')
    
//     done()
//   })

//   it('should return empty for `textValue` if value is not been selected yet', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           items: [
//             'aaa',
//             'bbb',
//             'ccc',
//           ],
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     expect(el.vm.textValue).toBe('')
    
//     done()
//   })

//   it('should return current item for `textValue`', async () => {
//     let form = createForm({
//       schema: {
//         el: {
//           type: elementType,
//           items: [
//             'aaa',
//             'bbb',
//             'ccc',
//           ],
//         }
//       }
//     })

//     let el = form.vm.el$('el')

//     a.vm.update(1)

//     expect(el.vm.selectedOption).toStrictEqual({
//       value: 1,
//       label: 'bbb'
//     })
    
//     done()
//   })
// })

describe('Select Element Model (native)', () => {
  it('should set default, change value, update & load with "array of string" items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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
  
  it('should set default, change value, update & load with "array of objects with label only" items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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
  
  it('should set default, change value, update & load with "array of objects which contains value & label" items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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
  
  it('should set default, change value, update & load with "object with string values" items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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
  
  it('should set default, change value, update & load with "object with object values including label only" items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            el: { label: 'aaa' },
            b: { label: 'bbb' },
            c: { label: 'ccc' },
          },
          default: 'b'
        }
      }
    })

    testNativeSelectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with object values which includes value + label" items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            el: { value: 'aa', label: 'aaa' },
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
  it('should set default, change value, update & load with "array of string" items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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
  
  it('should set default, change value, update & load with "array of objects with label only" items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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
  
  it('should set default, change value, update & load with "array of objects which contains value & label" items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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
  
  it('should set default, change value, update & load with "object with string values" items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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
  
  it('should set default, change value, update & load with "object with object values including label only" items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: {
            el: { label: 'aaa' },
            b: { label: 'bbb' },
            c: { label: 'ccc' },
          },
          default: 'b'
        }
      }
    })

    testNonNativeSelectModel(form, LocalVue, done, ['a', 'b', 'c'])
  })
  
  it('should set default, change value, update & load with "object with object values which includes value + label" items', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: {
            el: { value: 'aa', label: 'aaa' },
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
  it('should convert an array of strings to `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            'aaa',
            'bbb',
            'ccc'
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    confirmSelectOptions(a, done, LocalVue, {
      0: 'aaa',
      1: 'bbb',
      2: 'ccc'
    })
  })

  it('should convert an array of objects with label only to `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            { label: 'aaa' },
            { label: 'bbb' },
            { label: 'ccc' },
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.vm.selectOptions).toStrictEqual([
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

  it('should convert an array of objects with trackBy key only to `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trackBy: 'name',
          items: [
            { name: 'aaa' },
            { name: 'bbb' },
            { name: 'ccc' },
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.vm.selectOptions).toStrictEqual([
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

  it('should throw an error if an array of objects is provided as items without including the trackBy key', async () => {
    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
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

  it('should convert an array of objects which contains value & label to `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: [
            { value: 'a', label: 'aaa' },
            { value: 'b', label: 'bbb' },
            { value: 'c', label: 'ccc' },
          ],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.vm.selectOptions).toStrictEqual([
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

  it('should convert an an object with string values to `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.vm.selectOptions).toStrictEqual([
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

  it('should convert an object with object values including label only to `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            el: { label: 'aaa' },
            b: { label: 'bbb' },
            c: { label: 'ccc' },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.vm.selectOptions).toStrictEqual([
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

  it('should convert an object of objects values with trackBy key only to `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          trackBy: 'name',
          items: {
            el: { name: 'aaa' },
            b: { name: 'bbb' },
            c: { name: 'ccc' },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.vm.selectOptions).toStrictEqual([
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

  it('should throw an error if an object of objects is provided as items without including the trackBy key', async () => {
    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            items: {
              el: { name: 'aaa' },
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

  it('should convert an object with object values which includes value + label to `selectOptions`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: {
            el: { value: 'aa', label: 'aaa' },
            b: { value: 'bb', label: 'bbb' },
            c: { value: 'cc', label: 'ccc' },
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.vm.selectOptions).toStrictEqual([
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
  it('should trigger `change` on native element', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: ['a', 'b', 'c'],
          onChange: onChangeMock
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onChangeMock.mock.calls.length).toBe(0)

    a.get('select').findAll('option').at(1).setSelected()

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe(1)
    expect(onChangeMock.mock.calls[0][1]).toBe(null)
    
    done()
  })

  it('should trigger `change` on non-native element', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: ['a', 'b', 'c'],
          onChange: onChangeMock
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onChangeMock.mock.calls.length).toBe(0)

    a.vm.select$.select(a.vm.selectOptions[1])

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe(1)
    expect(onChangeMock.mock.calls[0][1]).toBe(null)
    
    done()
  })

  it('should trigger `select` on non-native element', async () => {
    let onSelectMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: ['a', 'b', 'c'],
          onSelect: onSelectMock
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onSelectMock.mock.calls.length).toBe(0)

    a.vm.select$.select(a.vm.selectOptions[1])

    expect(onSelectMock.mock.calls.length).toBe(1)
    expect(onSelectMock.mock.calls[0][0]).toStrictEqual(a.vm.selectOptions[1])
    
    done()
  })

  it('should trigger `deselect` on non-native element', async () => {
    let onDeselectMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: ['a', 'b', 'c'],
          onDeselect: onDeselectMock
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onDeselectMock.mock.calls.length).toBe(0)

    a.vm.select$.$emit('remove', a.vm.selectOptions[1])

    expect(onDeselectMock.mock.calls.length).toBe(1)
    expect(onDeselectMock.mock.calls[0][0]).toStrictEqual(a.vm.selectOptions[1])
    
    done()
  })

  it('should trigger `searchChange` on non-native element', async () => {
    let onSearchChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: ['a', 'b', 'c'],
          onSearchChange: onSearchChangeMock
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onSearchChangeMock.mock.calls.length).toBe(0)

    a.vm.select$.$emit('search-change', 'aaa')

    expect(onSearchChangeMock.mock.calls.length).toBe(1)
    expect(onSearchChangeMock.mock.calls[0][0]).toStrictEqual('aaa')
    
    done()
  })

  it('should trigger `open` on non-native element', async () => {
    let onOpenMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: ['a', 'b', 'c'],
          onOpen: onOpenMock
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onOpenMock.mock.calls.length).toBe(0)

    a.vm.select$.$emit('open')

    expect(onOpenMock.mock.calls.length).toBe(1)
    
    done()
  })

  it('should trigger `close` on non-native element', async () => {
    let onCloseMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: ['a', 'b', 'c'],
          onClose: onCloseMock
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onCloseMock.mock.calls.length).toBe(0)

    a.vm.select$.$emit('close')

    expect(onCloseMock.mock.calls.length).toBe(1)
    
    done()
  })

  it('should not trigger `tag` on non-native element', async () => {
    let onTagMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          items: ['a', 'b', 'c'],
          onTag: onTagMock
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onTagMock.mock.calls.length).toBe(0)

    a.vm.select$.$emit('tag')

    expect(onTagMock.mock.calls.length).toBe(0)
    
    done()
  })
})

describe('Select Element Slots', () => {
  it('should be able to use custom slot for `option` from schema', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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

    let el = form.vm.el$('el')
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
            el: {
              type: elementType,
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

    let el = form.vm.el$('el')
    let mso0 = a.findAll('.multiselect__option').at(0)
    let mso1 = a.findAll('.multiselect__option').at(1)
    let mso2 = a.findAll('.multiselect__option').at(2)

    expect(mso0.html()).toContain('a select')
    expect(mso1.html()).toContain('b select')
    expect(mso2.html()).toContain('c select')

    done()
  })

  it('should be able to use custom slot for `beforeList` from schema', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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

    let el = form.vm.el$('el')
    
    await nextTick()

    expect(el.html()).toContain('AAA before list')
  })

  it('should be able to use inline slot for `beforeList`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            el: {
              type: elementType,
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

    let el = form.vm.el$('el')
    
    expect(el.html()).toContain('AAA before list')

    done()
  })

  it('should be able to use custom slot for `afterList` from schema', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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

    let el = form.vm.el$('el')
    
    await nextTick()

    expect(el.html()).toContain('AAA after list')
  })

  it('should be able to use inline slot for `afterList`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            el: {
              type: elementType,
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

    let el = form.vm.el$('el')
    
    expect(el.html()).toContain('AAA after list')

    done()
  })

  it('should be able to use custom slot for `noResult` from schema', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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

    let el = form.vm.el$('el')
    
    await nextTick()

    expect(el.html()).toContain('No results')
  })

  it('should be able to use inline slot for `noResult`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            el: {
              type: elementType,
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

    let el = form.vm.el$('el')
    
    expect(el.html()).toContain('No results.')

    done()
  })

  it('should be able to use custom slot for `singleLabel` from schema', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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

    let el = form.vm.el$('el')
    
    await nextTick()

    expect(el.find('.multiselect__single').html()).toContain('b single label')
  })

  it('should be able to use inline slot for `singleLabel`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            el: {
              type: elementType,
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

    let el = form.vm.el$('el')
    
    expect(el.find('.multiselect__single').html()).toContain('b single label')

    done()
  })

  it('should be able to use custom slot for `noOptions` from schema', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
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

    let el = form.vm.el$('el')
    
    await nextTick()

    expect(el.html()).toContain('No options.')
  })

  it('should be able to use inline slot for `noOptions`', (done) => {
    let { LocalVue } = installLaraform({})

    LocalVue.config.errorHandler = done

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            el: {
              type: elementType,
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

    let el = form.vm.el$('el')
    
    expect(el.html()).toContain('No options.')

    done()
  })
})