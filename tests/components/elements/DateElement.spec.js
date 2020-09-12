import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../../src/utils/testHelpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { current } from 'locutus/php/array'

expect.extend({toBeVisible})

describe('Date Element Rendering', () => {
  it('should render date element with flatpickr', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date'
        }
      }
    })

    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    expect(Flatpickr.exists()).toBe(true)
    
    done()
  })

  it('should render format according to `displayFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          displayFormat: 'DD/MM/YYYY'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate('20201230', true, 'YYYYMMDD')

    expect(a.get('input').element.value).toBe('30/12/2020')
    
    done()
  })

  it('should add `calendarContainer` class to calendar container', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
        }
      }
    })

    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    expect(Flatpickr.vm.flatpickr$.calendarContainer.classList).toContain(form.vm.selectedTheme.components.Flatpickr.data().defaultClasses.calendarContainer)
    
    done()
  })
})

describe('Date Element Model Single Mode', () => {
  it('should have value in format defined in `valueFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          valueFormat: 'YYYY-MM-DD'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate('20201230', true, 'YYYYMMDD')

    expect(a.vm.value).toBe('2020-12-30')
    
    done()
  })

  it('should have a Date object as value if `valueFormat` is false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          valueFormat: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate('20201230', true, 'YYYYMMDD')

    expect(a.vm.value instanceof Date).toBe(true)
    
    done()
  })

  it('should load date according to `loadFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    a.vm.load({
      a: '2020-12-30'
    })

    expect(a.vm.value).toBe('2020-12-30')

    a.vm.load({
      a: '30/12/2020'
    })

    expect(a.vm.value).not.toBe('2020-12-30')

    a.vm.loadFormat = 'DD/MM/YYYY'
    a.vm.load({
      a: '30/12/2020'
    })

    expect(a.vm.value).toBe('2020-12-30')
    
    done()
  })

  it('should update according to `loadFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    a.vm.update('2020-12-30')

    expect(a.vm.value).toBe('2020-12-30')

    a.vm.update('30/12/2020')

    expect(a.vm.value).not.toBe('2020-12-30')

    a.vm.loadFormat = 'DD/MM/YYYY'
    a.vm.update('30/12/2020')

    expect(a.vm.value).toBe('2020-12-30')
    
    done()
  })

  it('should set value according to `loadFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    a.vm.value = '2020-12-30'

    expect(a.vm.value).toBe('2020-12-30')

    a.vm.value = '30/12/2020'

    expect(a.vm.value).not.toBe('2020-12-30')

    a.vm.loadFormat = 'DD/MM/YYYY'
    a.vm.value = '30/12/2020'

    expect(a.vm.value).toBe('2020-12-30')
    
    done()
  })

  it('should have null value if calendar is closed before selecting a date', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.open()

    expect(a.vm.value).toBe(null)

    flatpickr$.close()

    expect(a.vm.value).toBe(null)
    
    done()
  })

  it('should throw an error when trying to set array data in single mode', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      a.vm.value = ['2020-12-24', '2020-12-25']
    }).toThrow(TypeError)
    
    console.error = originalConsoleError
    
    done()
  })

  it('should set a `default` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          loadFormat: 'YYYY-MM-DD',
          default: "2020-12-30"
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    expect(a.vm.value).toBe('2020-12-30')
    
    done()
  })

  it('should not update model if `disabled`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          disabled: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true, 'YYYY-MM-DD')

    expect(a.vm.value).toBe(null)
    
    done()
  })

  it('should not update model if `readonly`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          readonly: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true, 'YYYY-MM-DD')

    expect(a.vm.value).toBe(null)
    
    done()
  })
})

describe('Date Element Model Range Mode', () => {
  it('should be able to select date range if `mode` is `range`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'range'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate(['2020-12-24', '2020-12-30'], true, 'YYYY-MM-DD')

    expect(a.vm.value).toStrictEqual(['2020-12-24', '2020-12-30'])
    
    done()
  })

  it('should convert dates to `valueFormat` if `mode` is `range`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'range',
          valueFormat: 'DD/MM/YYYY'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate(['2020-12-24', '2020-12-30'], true, 'YYYY-MM-DD')

    expect(a.vm.value).toStrictEqual(['24/12/2020', '30/12/2020'])
    
    done()
  })

  it('should have Date objects in the value array if `mode` is `range` and `valueFormat` is false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'range',
          valueFormat: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate(['2020-12-24', '2020-12-30'], true, 'YYYY-MM-DD')

    expect(a.vm.value[0] instanceof Date).toBe(true)
    expect(a.vm.value[1] instanceof Date).toBe(true)
    
    done()
  })

  it('should null value if `mode` is `range` and only one date is selected before closing', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'range'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.open()

    flatpickr$.setDate(['2020-12-24'], true, 'YYYY-MM-DD')

    expect(a.vm.value).toStrictEqual(['2020-12-24'])

    flatpickr$.close()

    expect(a.vm.value).toStrictEqual([])
    
    done()
  })

  it('should load date according to `loadFormat` when in `range` mode', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'range',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    a.vm.load({
      a: ['2020-12-24', '2020-12-30']
    })

    expect(a.vm.value).toStrictEqual(['2020-12-24', '2020-12-30'])

    a.vm.load({
      a: ['25/12/2020', '30/12/2020']
    })

    expect(a.vm.value).not.toStrictEqual(['2020-12-25', '2020-12-30'])

    a.vm.loadFormat = 'DD/MM/YYYY'
    a.vm.load({
      a: ['25/12/2020', '30/12/2020']
    })

    expect(a.vm.value).toStrictEqual(['2020-12-25', '2020-12-30'])
    
    done()
  })

  it('should update according to `loadFormat` when in `range` mode', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'range',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    a.vm.update(['2020-12-24','2020-12-30'])

    expect(a.vm.value).toStrictEqual(['2020-12-24','2020-12-30'])

    a.vm.update(['24/12/2020','30/12/2020'])

    expect(a.vm.value).not.toStrictEqual(['2020-12-24','2020-12-30'])

    a.vm.loadFormat = 'DD/MM/YYYY'
    a.vm.update(['24/12/2020','30/12/2020'])

    expect(a.vm.value).toStrictEqual(['2020-12-24','2020-12-30'])
    
    done()
  })

  it('should set value according to `loadFormat` when in `range` mode', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'range',
          loadFormat: 'DD/MM/YYYY',
          valueFormat: 'YYYY-MM-DD',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    a.vm.value = ['24/12/2020', '30/12/2020']

    expect(a.vm.value).toStrictEqual(['2020-12-24', '2020-12-30'])
    
    done()
  })

  it('should set `default` value in `range` mode', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          loadFormat: 'YYYY-MM-DD',
          default: ['2020-12-25', '2020-12-30'],
          mode: 'range'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    expect(a.vm.value).toStrictEqual(['2020-12-25', '2020-12-30'])
    expect(a.vm.dirty).toBe(false)
    
    done()
  })
})

describe('Date Element Model Multiple Mode', () => {
  it('should be able to select multiple dates if `mode` is `multiple`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'multiple'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate(['2020-12-24', '2020-12-25', '2020-12-30'], true, 'YYYY-MM-DD')

    expect(a.vm.value).toStrictEqual(['2020-12-24', '2020-12-25', '2020-12-30'])
    
    done()
  })

  it('should convert dates to `valueFormat` if `mode` is `multiple`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'multiple',
          valueFormat: 'DD/MM/YYYY'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate(['2020-12-24', '2020-12-25', '2020-12-30'], true, 'YYYY-MM-DD')

    expect(a.vm.value).toStrictEqual(['24/12/2020', '25/12/2020', '30/12/2020'])
    
    done()
  })

  it('should have Date objects in the value array if `mode` is `multiple` and `valueFormat` is false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'multiple',
          valueFormat: false
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate(['2020-12-24', '2020-12-25', '2020-12-30'], true, 'YYYY-MM-DD')

    expect(a.vm.value[0] instanceof Date).toBe(true)
    expect(a.vm.value[1] instanceof Date).toBe(true)
    expect(a.vm.value[2] instanceof Date).toBe(true)
    
    done()
  })

  it('should load date according to `loadFormat` when in `multiple` mode', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'multiple',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    a.vm.load({
      a: ['2020-12-24', '2020-12-30']
    })

    expect(a.vm.value).toStrictEqual(['2020-12-24', '2020-12-30'])

    a.vm.load({
      a: ['25/12/2020', '30/12/2020']
    })

    expect(a.vm.value).not.toStrictEqual(['2020-12-25', '2020-12-30'])

    a.vm.loadFormat = 'DD/MM/YYYY'
    a.vm.load({
      a: ['25/12/2020', '30/12/2020']
    })

    expect(a.vm.value).toStrictEqual(['2020-12-25', '2020-12-30'])
    
    done()
  })

  it('should update according to `loadFormat` when in `multiple` mode', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'multiple',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    a.vm.update(['2020-12-24','2020-12-30'])

    expect(a.vm.value).toStrictEqual(['2020-12-24','2020-12-30'])

    a.vm.update(['24/12/2020','30/12/2020'])

    expect(a.vm.value).not.toStrictEqual(['2020-12-24','2020-12-30'])

    a.vm.loadFormat = 'DD/MM/YYYY'
    a.vm.update(['24/12/2020','30/12/2020'])

    expect(a.vm.value).toStrictEqual(['2020-12-24','2020-12-30'])
    
    done()
  })

  it('should set value according to `loadFormat` when in `multiple` mode', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'multiple',
          loadFormat: 'DD/MM/YYYY',
          valueFormat: 'YYYY-MM-DD',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    a.vm.value = ['24/12/2020', '30/12/2020']

    expect(a.vm.value).toStrictEqual(['2020-12-24', '2020-12-30'])
    
    done()
  })

  it('should set `default` value in `multiple` mode', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          loadFormat: 'YYYY-MM-DD',
          default: ['2020-12-25', '2020-12-30'],
          mode: 'multiple'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    expect(a.vm.value).toStrictEqual(['2020-12-25', '2020-12-30'])
    expect(a.vm.dirty).toBe(false)
    
    done()
  })
})

describe('Date Element Props', () => {
  it('should render `placeholder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          placeholder: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    expect(a.get('input').attributes().placeholder).toBe('aaa')

    done()
  })

  it('should set `placeholder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    expect(a.get('input').attributes().placeholder).toBe(undefined)

    a.vm.placeholder = 'aaa'

    LocalVue.nextTick(() => {
      expect(a.get('input').attributes().placeholder).toBe('aaa')

      done()
    })
  })

  it('should render `floating`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          floating: 'aaa'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(true)

    done()
  })

  it('should set `floating`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)

    expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(false)

    a.vm.floating = 'aaa'

    LocalVue.nextTick(() => {
      expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(true)

      done()
    })
  })

  it('should add `id` to input parent', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
        }
      }
    })

    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    expect(Flatpickr.vm.flatpickr$.input.parentElement.id).toBe(`flatpickr-a`)
    
    done()
  })

  it('should add `id` to input parent when `id` changes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    expect(Flatpickr.vm.flatpickr$.input.parentElement.id).toBe(`flatpickr-a`)

    a.vm.id = 'aaa'
    
    LocalVue.nextTick(() => {
      expect(Flatpickr.vm.flatpickr$.input.parentElement.id).toBe(`flatpickr-aaa`)

      done()
    })
  })
})

describe('Date Element Options', () => {
  it('should set min date if `min` is a Date object', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          valueFormat: 'YYYY-MM-DD',
          loadFormat: 'YYYY-MM-DD',
          min: moment('2020-12-25', 'YYYY-MM-DD', true).toDate()
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true)
    expect(a.vm.value).toBe('2020-12-30')

    flatpickr$.setDate('2020-12-25', true)
    expect(a.vm.value).toBe('2020-12-25')

    flatpickr$.setDate('2020-12-24', true)
    expect(a.vm.value).toBe(null)

    done()
  })

  it('should set min date if `min` is a date string formatted like `loadFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          valueFormat: 'YYYY-MM-DD',
          loadFormat: 'YYYY-MM-DD',
          min: '2020-12-25'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true)
    expect(a.vm.value).toBe('2020-12-30')

    flatpickr$.setDate('2020-12-25', true)
    expect(a.vm.value).toBe('2020-12-25')

    flatpickr$.setDate('2020-12-24', true)
    expect(a.vm.value).toBe(null)

    done()
  })

  it('should set max date if `max` is a Date object', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          valueFormat: 'YYYY-MM-DD',
          loadFormat: 'YYYY-MM-DD',
          max: moment('2020-12-25', 'YYYY-MM-DD', true).toDate()
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true)
    expect(a.vm.value).toBe(null)

    flatpickr$.setDate('2020-12-25', true)
    expect(a.vm.value).toBe('2020-12-25')

    flatpickr$.setDate('2020-12-24', true)
    expect(a.vm.value).toBe('2020-12-24')

    done()
  })

  it('should set max date if `max` is a date string formatted like `loadFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          valueFormat: 'YYYY-MM-DD',
          loadFormat: 'YYYY-MM-DD',
          max: '2020-12-25'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true)
    expect(a.vm.value).toBe(null)

    flatpickr$.setDate('2020-12-25', true)
    expect(a.vm.value).toBe('2020-12-25')

    flatpickr$.setDate('2020-12-24', true)
    expect(a.vm.value).toBe('2020-12-24')

    done()
  })

  it('should disable dates defined in `disables` as Date object', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          valueFormat: 'YYYY-MM-DD',
          loadFormat: 'YYYY-MM-DD',
          disables: [moment('2020-12-25', 'YYYY-MM-DD', true).toDate(), moment('2020-12-26', 'YYYY-MM-DD', true).toDate()]
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true)
    expect(a.vm.value).toBe('2020-12-30')

    flatpickr$.setDate('2020-12-25', true)
    expect(a.vm.value).toBe(null)

    flatpickr$.setDate('2020-12-26', true)
    expect(a.vm.value).toBe(null)

    flatpickr$.setDate('2020-12-24', true)
    expect(a.vm.value).toBe('2020-12-24')

    done()
  })

  it('should disable dates defined in `disables` as date string with `loadFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          valueFormat: 'YYYY-MM-DD',
          loadFormat: 'YYYY-MM-DD',
          disables: ['2020-12-25', '2020-12-26']
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true)
    expect(a.vm.value).toBe('2020-12-30')

    flatpickr$.setDate('2020-12-25', true)
    expect(a.vm.value).toBe(null)

    flatpickr$.setDate('2020-12-26', true)
    expect(a.vm.value).toBe(null)

    flatpickr$.setDate('2020-12-24', true)
    expect(a.vm.value).toBe('2020-12-24')

    done()
  })

  it('should be able to pass custom flatpickr options in `options`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          options: {
            altFormat: 'aaa'
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    expect(flatpickr$.config.altFormat).toBe('aaa')

    done()
  })

  it('should reinit flatpickr if any of its options changes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    a.vm.$set(a.vm.schema, 'options', { altFormat: 'aaa' })

    LocalVue.nextTick(() => {
      expect(flatpickr$.config.altFormat).toBe('aaa')

      done()
    })
  })
})