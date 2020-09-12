import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../../src/utils/testHelpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { current } from 'locutus/php/array'

expect.extend({toBeVisible})

describe('Datetime Element Rendering', () => {
  it('should display date with time in input field', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    a.vm.value = '2020-12-30 23:59'

    LocalVue.nextTick(() => {
      expect(a.get('input').element.value).toBe('2020-12-30 23:59')

      done()
    })
  })

  it('should display date with time with seconds in input field if `seconds` is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
          seconds: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    a.vm.value = '2020-12-30 23:59:59'

    LocalVue.nextTick(() => {
      expect(a.get('input').element.value).toBe('2020-12-30 23:59:59')

      done()
    })
  })

  it('should display AM/PM selector if `hour24` is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
          hour24: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    expect(Flatpickr.vm.flatpickr$.config.time_24hr).toBe(true)

    done()
  })

  it('should not display AM/PM selector if `hour24` is not set', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    expect(Flatpickr.vm.flatpickr$.config.time_24hr).toBe(false)

    done()
  })
})

describe('Datetime Element Props', () => {
  it('should have `displayFormat` as in config if not defined', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.displayFormat).toBe(a.vm.__('laraform.elements.datetime.displayFormat'))

    done()
  })

  it('should have `displayFormat` as defined in schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
          displayFormat: 'DD/MM/YYYY HH:mm'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.displayFormat).toBe('DD/MM/YYYY HH:mm')

    done()
  })

  it('should set `displayFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.displayFormat).toBe(a.vm.__('laraform.elements.datetime.displayFormat'))

    a.vm.displayFormat = 'DD/MM/YYYY HH:mm'

    expect(a.vm.displayFormat).toBe('DD/MM/YYYY HH:mm')

    done()
  })

  it('should have default "YYYY-MM-DD HH:mm" `valueFormat` when `seconds` is `false`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
          seconds: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.valueFormat).toBe('YYYY-MM-DD HH:mm')

    done()
  })

  it('should have default "YYYY-MM-DD HH:mm:ss" `valueFormat` when `seconds` is `true`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
          seconds: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.valueFormat).toBe('YYYY-MM-DD HH:mm:ss')

    done()
  })

  it('should have `valueFormat` as defined in schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
          valueFormat: 'DD/MM/YYYY HH:mm'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.valueFormat).toBe('DD/MM/YYYY HH:mm')

    done()
  })

  it('should set `valueFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.valueFormat).toBe('YYYY-MM-DD HH:mm')

    a.vm.valueFormat = 'DD/MM/YYYY HH:mm'

    expect(a.vm.valueFormat).toBe('DD/MM/YYYY HH:mm')

    done()
  })

  it('should have default "YYYY-MM-DD HH:mm" `loadFormat` when `seconds` is `false`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
          seconds: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.loadFormat).toBe('YYYY-MM-DD HH:mm')

    done()
  })

  it('should have default "YYYY-MM-DD HH:mm:ss" `loadFormat` when `seconds` is `false`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
          seconds: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.loadFormat).toBe('YYYY-MM-DD HH:mm:ss')

    done()
  })

  it('should have `loadFormat` as defined in schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
          loadFormat: 'DD/MM/YYYY HH:mm'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.loadFormat).toBe('DD/MM/YYYY HH:mm')

    done()
  })

  it('should set `loadFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.loadFormat).toBe('YYYY-MM-DD HH:mm')

    a.vm.loadFormat = 'DD/MM/YYYY HH:mm'

    expect(a.vm.loadFormat).toBe('DD/MM/YYYY HH:mm')

    done()
  })

  it('should have `seconds` as `false` by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.seconds).toBe(false)

    done()
  })

  it('should set `seconds` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
          seconds: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.seconds).toBe(true)

    done()
  })

  it('should set `seconds` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.seconds).toBe(false)

    a.vm.seconds = true

    expect(a.vm.seconds).toBe(true)

    done()
  })

  it('should return `single` for `mode` even if set in schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
          mode: 'range'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.mode).toBe('single')

    done()
  })

  it('should throw error when trying to set `mode`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      a.vm.mode = 'range'
    }).toThrowError()
    
    console.error = originalConsoleError

    done()
  })

  it('should have `hour24` as `false` by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.hour24).toBe(false)

    done()
  })

  it('should set `hour24` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
          hour24: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.hour24).toBe(true)

    done()
  })

  it('should set `hour24` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)

    expect(a.vm.hour24).toBe(false)

    a.vm.hour24 = true

    expect(a.vm.hour24).toBe(true)

    done()
  })

  it('should `hasDate` to be `true`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)
    
    expect(a.vm.hasDate).toBe(true)

    done()
  })

  it('should `hasTime` to be `true`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'datetime',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DatetimeElement' }).at(0)
    
    expect(a.vm.hasTime).toBe(true)

    done()
  })
})