import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, installLaraform, check, uncheck } from './../../../src/utils/testHelpers'

describe('Slider Element Rendering', () => {
  it('should render slider', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)
    let slider$ = a.findAllComponents({ name: 'VueSliderComponent' }).at(0)

    expect(a.exists()).toBe(true)
    expect(slider$.exists()).toBe(true)

    done()
  })
})

describe('Slider Element Props', () => {
  it('should have `0` as default `min`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.min).toBe(0)

    done()
  })

  it('should set `min` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          min: 5,
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.min).toBe(5)

    done()
  })

  it('should set `min` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.min).toBe(0)

    a.vm.value = 5
    a.vm.min = 5

    expect(a.vm.min).toBe(5)

    done()
  })

  it('should have `100` as default `max`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.max).toBe(100)

    done()
  })

  it('should set `max` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          max: 50,
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.max).toBe(50)

    done()
  })

  it('should set `max` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.max).toBe(100)

    a.vm.max = 50

    expect(a.vm.max).toBe(50)

    done()
  })

  it('should have `null` value equal to `min`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          min: 18
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.null).toBe(18)

    done()
  })

  it('should have `default` equal to `null` if not set', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          min: 18
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.default).toBe(a.vm.null)

    done()
  })

  it('should have `default` equal to `null` if not set', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          min: 18
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.default).toBe(a.vm.null)

    done()
  })

  it('should return `true` for `multiple` if value is an array', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: [5,10]
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.multiple).toBe(true)

    done()
  })

  it('should return `false` for `multiple` if value is not an array', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: 5
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.multiple).toBe(false)

    done()
  })

  it('should `options` equal to `defaultOptions` if nothing else is set', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.options).toStrictEqual(a.vm.defaultOptions)

    done()
  })

  it('should `options` equal to `defaultOptions` merged with custom options if set', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          options: {
            direction: 'rtl'
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.options).toStrictEqual(Object.assign({}, a.vm.defaultOptions, {
      direction: 'rtl'
    }))

    done()
  })

  it('should set `options` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    a.vm.options = {
      direction: 'rtl'
    }

    expect(a.vm.options).toStrictEqual(Object.assign({}, a.vm.defaultOptions, {
      direction: 'rtl'
    }))

    done()
  })
})

describe('Slider Element Options', () => {
  it('should set all the properties available via Laraform API', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          options: {
            speed: 2
          },
          min: 10,
          max: 200,
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)
    let slider$ = a.vm.slider$

    expect(slider$.min).toBe(10)
    expect(slider$.max).toBe(200)
    expect(slider$.speed).toBe(2)
    expect(slider$.isRange).toBe(false)

    done()
  })

  it('should set to be `range` if value is an array', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: [5,10]
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)
    let slider$ = a.vm.slider$

    expect(slider$.isRange).toBe(true)

    done()
  })
})

describe('Slider Element Events', () => {
  it('should trigger `change` event on change', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(onChangeMock.mock.calls.length).toBe(0)

    a.vm.slider$.setValue(20)

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe(0)
    expect(onChangeMock.mock.calls[0][1]).toBe(20)

    done()
  })
})

describe('Slider Element Model', () => {
  it('should set value from `default`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: 33,
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.value).toBe(33)
    expect(a.vm.slider$.value).toBe(33)

    done()
  })

  it('should set value from `default` if range', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: [33,38],
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    expect(a.vm.value).toStrictEqual([33,38])
    expect(a.vm.slider$.value).toStrictEqual([33,38])

    done()
  })

  it('should set value by setting `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    a.vm.value = 33

    expect(a.vm.value).toBe(33)

    LocalVue.nextTick(() => {
      expect(a.vm.slider$.value).toBe(33)

      done()
    })
  })

  it('should set value by setting `value` if range', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: []
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    a.vm.value = [33,38]

    expect(a.vm.value).toStrictEqual([33,38])
    
    LocalVue.nextTick(() => {
      expect(a.vm.slider$.value).toStrictEqual([33,38])

      done()
    })
  })

  it('should set value by `update`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    a.vm.update(33)

    expect(a.vm.value).toBe(33)

    LocalVue.nextTick(() => {
      expect(a.vm.slider$.value).toBe(33)

      done()
    })
  })

  it('should set value by `update` if range', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: []
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    a.vm.update([33,38])

    expect(a.vm.value).toStrictEqual([33,38])
    
    LocalVue.nextTick(() => {
      expect(a.vm.slider$.value).toStrictEqual([33,38])

      done()
    })
  })

  it('should set value by `load`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    form.vm.load({
      a: 33
    })

    expect(a.vm.value).toBe(33)

    LocalVue.nextTick(() => {
      expect(a.vm.slider$.value).toBe(33)

      done()
    })
  })

  it('should set value by `load` if range', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
          default: []
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    form.vm.load({
      a: [33,38]
    })

    expect(a.vm.value).toStrictEqual([33,38])
    
    LocalVue.nextTick(() => {
      expect(a.vm.slider$.value).toStrictEqual([33,38])

      done()
    })
  })

  it('should update `value` if user changes slider', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    a.vm.slider$.setValue(22)
    expect(a.vm.value).toBe(22)

    done()
  })

  it('should update multiple `value` if user changes slider', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'slider',
        }
      }
    })

    let a = form.findAllComponents({ name: 'SliderElement' }).at(0)

    a.vm.slider$.setValue([22,28])
    expect(a.vm.value).toStrictEqual([22,28])

    done()
  })
})