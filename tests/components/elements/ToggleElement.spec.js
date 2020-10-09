import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, findAllComponents, installLaraform, check, uncheck } from 'test-helpers'

describe('Toggle Element Rendering', () => {
  it('should render toggle', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)
    let tb = findAllComponents(a, { name: 'ToggleButton' }).at(0)

    expect(a.exists()).toBe(true)
    expect(tb.exists()).toBe(true)

    done()
  })

  it('should render `text`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          text: 'aaa'
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.html()).toContain('aaa')

    done()
  })
})

describe('Toggle Element Props', () => {
  it('should have `null` as default `text`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.text).toBe(null)

    done()
  })

  it('should set `text` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          text: 'aaa'
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.text).toBe('aaa')

    done()
  })

  it('should set `text` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.text).toBe(null)

    a.vm.text = 'aaa'

    expect(a.vm.text).toBe('aaa')

    done()
  })

  it('should have `true` as default `trueValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.trueValue).toBe(true)

    done()
  })

  it('should set `trueValue` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          trueValue: 'yes'
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.trueValue).toBe('yes')

    done()
  })

  it('should set `trueValue` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.trueValue).toBe(true)

    a.vm.trueValue = 'yes'

    expect(a.vm.trueValue).toBe('yes')

    done()
  })

  it('should have `false` as default `falseValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.falseValue).toBe(false)

    done()
  })

  it('should set `falseValue` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          falseValue: 'no'
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.falseValue).toBe('no')

    done()
  })

  it('should set `falseValue` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.falseValue).toBe(false)

    a.vm.falseValue = 'no'

    expect(a.vm.falseValue).toBe('no')

    done()
  })

  it('should have `false` as default `labels`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.labels).toBe(false)

    done()
  })

  it('should set `labels` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          labels: {
            checked: 'On',
            unchecked: 'Off',
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.labels).toStrictEqual({
      checked: 'On',
      unchecked: 'Off',
    })

    done()
  })

  it('should set `falseValue` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.labels).toBe(false)

    a.vm.labels = {
      checked: 'On',
      unchecked: 'Off',
    }

    expect(a.vm.labels).toStrictEqual({
      checked: 'On',
      unchecked: 'Off',
    })

    done()
  })

  it('should have `300` as default `speed`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.speed).toBe(300)

    done()
  })

  it('should set `speed` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          speed: 500
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.speed).toBe(500)

    done()
  })

  it('should set `speed` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.speed).toBe(300)

    a.vm.speed = 500

    expect(a.vm.speed).toBe(500)

    done()
  })

  it('should have `50x22` as default `dimensions`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.dimensions).toStrictEqual({
      width: 50,
      height: 22
    })

    done()
  })

  it('should set `dimensions` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          dimensions: {
            width: 60,
            height: 30,
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.dimensions).toStrictEqual({
      width: 60,
      height: 30,
    })

    done()
  })

  it('should set `dimensions` width from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          dimensions: {
            width: 60,
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.dimensions).toStrictEqual({
      width: 60,
      height: 22,
    })

    done()
  })

  it('should set `dimensions` height from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          dimensions: {
            height: 30,
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.dimensions).toStrictEqual({
      width: 50,
      height: 30,
    })

    done()
  })

  it('should set `dimensions` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.dimensions).toStrictEqual({
      width: 50,
      height: 22
    })

    a.vm.dimensions = {
      width: 60,
      height: 30
    }

    expect(a.vm.dimensions).toStrictEqual({
      width: 60,
      height: 30
    })

    done()
  })

  it('should have `#777777 / #FFFFFF` as default `colors`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.colors).toStrictEqual({
      background: '#777777',
      handle: '#FFFFFF',
    })

    done()
  })

  it('should set `colors` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          colors: {
            background: '#000',
            handle: '#333',
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.colors).toStrictEqual({
      background: '#000',
      handle: '#333',
    })

    done()
  })

  it('should set `colors` background from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          colors: {
            background: '#000',
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.colors).toStrictEqual({
      background: '#000',
      handle: '#FFFFFF',
    })

    done()
  })

  it('should set `colors` handle from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          colors: {
            handle: '#333',
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.colors).toStrictEqual({
      background: '#777777',
      handle: '#333',
    })

    done()
  })

  it('should set `colors` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.colors).toStrictEqual({
      background: '#777777',
      handle: '#FFFFFF',
    })

    a.vm.colors = {
      background: '#000',
      handle: '#333',
    }

    expect(a.vm.colors).toStrictEqual({
      background: '#000',
      handle: '#333',
    })

    done()
  })

  it('should have `true` as default `cssColors` if `colors` is not defined', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.cssColors).toBe(true)

    done()
  })

  it('should have `false` as default `cssColors` if `colors` is not defined', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          colors: {
            background: '#0000000'
          }
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.cssColors).toBe(false)

    done()
  })

  it('should set `cssColors` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          cssColors: false
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.cssColors).toBe(false)

    done()
  })

  it('should set `cssColors` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.cssColors).toBe(true)

    a.vm.cssColors = false

    expect(a.vm.cssColors).toBe(false)

    done()
  })

  it('should have `true` as default `sync`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.sync).toBe(true)

    done()
  })

  it('should set `sync` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          sync: false
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.sync).toBe(false)

    done()
  })

  it('should set `sync` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.sync).toBe(true)

    a.vm.sync = false

    expect(a.vm.sync).toBe(false)

    done()
  })

  it('should `null` equal to `falseValue`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          falseValue: 'no'
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.null).toBe('no')

    done()
  })
})

describe('Toggle Element Options', () => {
  it('should set all the properties available via Laraform API', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          options: {
            margin: 3
          },
          labels: true,
          speed: 500,
          dimensions: {
            width: 60,
            height: 30,
          },
          colors: {
            background: '#000000',
            handle: '#111111',
          },
          sync: false,
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)
    let toggle$ = a.vm.toggle$

    expect(toggle$.margin).toBe(3)
    expect(toggle$.labels).toBe(true)
    expect(toggle$.speed).toBe(500)
    expect(toggle$.sync).toBe(false)
    expect(toggle$.width).toBe(60)
    expect(toggle$.height).toBe(30)
    expect(toggle$.color).toBe('#000000')
    expect(toggle$.switchColor).toBe('#111111')

    done()
  })
})

describe('Toggle Element Events', () => {
  it('should trigger `change` event on change', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          onChange: onChangeMock,
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    a.vm.update(true, true)

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe(true)
    expect(onChangeMock.mock.calls[0][1]).toBe(false)

    done()
  })
})

describe('Toggle Element Model', () => {
  it('should have `falseValue` as `value` by default & `model` to be `false`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          falseValue: 0
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)
    
    expect(a.vm.value).toStrictEqual(0)
    expect(a.vm.model).toStrictEqual(false)

    done()
  })

  it('should set `default`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          default: 'yas',
          trueValue: 'yas'
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)
    
    expect(a.vm.value).toStrictEqual('yas')
    expect(a.vm.model).toStrictEqual(true)

    done()
  })

  it('should update `value` and `model` by setting `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          trueValue: 'yes',
          falseValue: 'no'
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.value).toStrictEqual('no')
    expect(a.vm.model).toStrictEqual(false)

    a.vm.value = 'yes'

    expect(a.vm.value).toStrictEqual('yes')
    expect(a.vm.model).toStrictEqual(true)
    
    done()
  })

  it('should update `value` and `model` by `update`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          trueValue: 'yes',
          falseValue: 'no'
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.value).toStrictEqual('no')
    expect(a.vm.model).toStrictEqual(false)

    a.vm.update('yes')

    expect(a.vm.value).toStrictEqual('yes')
    expect(a.vm.model).toStrictEqual(true)
    
    done()
  })

  it('should update `value` and `model` by `load`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          trueValue: 'yes',
          falseValue: 'no'
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.value).toStrictEqual('no')
    expect(a.vm.model).toStrictEqual(false)

    form.vm.load({
      a: 'yes'
    })

    expect(a.vm.value).toStrictEqual('yes')
    expect(a.vm.model).toStrictEqual(true)
    
    done()
  })

  it('should be `true` if `true` or `1` is loaded by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.value).toStrictEqual(false)
    expect(a.vm.model).toStrictEqual(false)

    form.vm.load({
      a: true
    })

    expect(a.vm.value).toStrictEqual(true)
    expect(a.vm.model).toStrictEqual(true)

    form.vm.load({
      a: false
    })

    expect(a.vm.value).toStrictEqual(false)
    expect(a.vm.model).toStrictEqual(false)

    form.vm.load({
      a: 1
    })

    expect(a.vm.value).toStrictEqual(true)
    expect(a.vm.model).toStrictEqual(true)
    
    done()
  })

  it('should be `true` if `true` or `1` is loaded when `trueValue` is `1`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
          trueValue: 1
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.value).toStrictEqual(false)
    expect(a.vm.model).toStrictEqual(false)

    form.vm.load({
      a: true
    })

    expect(a.vm.value).toStrictEqual(1)
    expect(a.vm.model).toStrictEqual(true)

    form.vm.load({
      a: false
    })

    expect(a.vm.value).toStrictEqual(false)
    expect(a.vm.model).toStrictEqual(false)

    form.vm.load({
      a: 1
    })

    expect(a.vm.value).toStrictEqual(1)
    expect(a.vm.model).toStrictEqual(true)
    
    done()
  })

  it('should be `false` if `null`, `undefined`, `0` or any other value than `1` or `true` is loaded', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'toggle',
        }
      }
    })

    let a = findAllComponents(form, { name: 'ToggleElement' }).at(0)

    expect(a.vm.value).toStrictEqual(false)
    expect(a.vm.model).toStrictEqual(false)

    form.vm.load({
      a: null
    })

    expect(a.vm.value).toStrictEqual(false)
    expect(a.vm.model).toStrictEqual(false)

    form.vm.load({
      a: undefined
    })

    expect(a.vm.value).toStrictEqual(false)
    expect(a.vm.model).toStrictEqual(false)

    form.vm.load({
      a: 0
    })

    expect(a.vm.value).toStrictEqual(false)
    expect(a.vm.model).toStrictEqual(false)

    form.vm.load({
      a: 'asdffdas'
    })

    expect(a.vm.value).toStrictEqual(false)
    expect(a.vm.model).toStrictEqual(false)
    
    done()
  })
})