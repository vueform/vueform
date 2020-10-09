import { createLocalVue } from '@vue/test-utils'
import { createForm } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { current } from 'locutus/php/array'

expect.extend({toBeVisible})

describe('Time Element Rendering', () => {
  it('should display time in input field', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    a.vm.value = '23:59'

    LocalVue.nextTick(() => {
      expect(a.get('input').element.value).toBe('23:59')

      done()
    })
  })

  it('should display time with seconds in input field if `seconds` is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
          seconds: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    a.vm.value = '23:59:59'

    LocalVue.nextTick(() => {
      expect(a.get('input').element.value).toBe('23:59:59')

      done()
    })
  })

  it('should display AM/PM selector if `hour24` is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
          hour24: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)
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
          type: 'time',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    expect(Flatpickr.vm.flatpickr$.config.time_24hr).toBe(false)

    done()
  })

  it('should not display calendar', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    expect(Flatpickr.vm.flatpickr$.config.noCalendar).toBe(true)

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
          type: 'time',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    expect(a.vm.displayFormat).toBe(a.vm.__('laraform.elements.time.displayFormat'))

    done()
  })

  it('should have `displayFormat` as defined in schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
          displayFormat: 'HH:mm'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    expect(a.vm.displayFormat).toBe('HH:mm')

    done()
  })

  it('should set `displayFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    expect(a.vm.displayFormat).toBe(a.vm.__('laraform.elements.time.displayFormat'))

    a.vm.displayFormat = 'HH:mm'

    expect(a.vm.displayFormat).toBe('HH:mm')

    done()
  })

  it('should have default "HH:mm" `valueFormat` when `seconds` is `false`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
          seconds: false,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    expect(a.vm.valueFormat).toBe('HH:mm')

    done()
  })

  it('should have default "HH:mm:ss" `valueFormat` when `seconds` is `true`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
          seconds: true,
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    expect(a.vm.valueFormat).toBe('HH:mm:ss')

    done()
  })

  it('should have `valueFormat` as defined in schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
          valueFormat: 'HH:mm'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    expect(a.vm.valueFormat).toBe('HH:mm')

    done()
  })

  it('should set `valueFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    expect(a.vm.valueFormat).toBe('HH:mm')

    a.vm.valueFormat = 'HH:mm'

    expect(a.vm.valueFormat).toBe('HH:mm')

    done()
  })

  it('should have default "HH:mm" `loadFormat` when `seconds` is `false`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
          seconds: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    expect(a.vm.loadFormat).toBe('HH:mm')

    done()
  })

  it('should have default "HH:mm:ss" `loadFormat` when `seconds` is `false`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
          seconds: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    expect(a.vm.loadFormat).toBe('HH:mm:ss')

    done()
  })

  it('should have `loadFormat` as defined in schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
          loadFormat: 'HH:mm'
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    expect(a.vm.loadFormat).toBe('HH:mm')

    done()
  })

  it('should set `loadFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)

    expect(a.vm.loadFormat).toBe('HH:mm')

    a.vm.loadFormat = 'HH:mm'

    expect(a.vm.loadFormat).toBe('HH:mm')

    done()
  })

  it('should `hasDate` to be `false`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)
    
    expect(a.vm.hasDate).toBe(false)

    done()
  })

  it('should `hasTime` to be `true`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'time',
        }
      }
    })

    let a = form.findAllComponents({ name: 'TimeElement' }).at(0)
    
    expect(a.vm.hasTime).toBe(true)

    done()
  })
})