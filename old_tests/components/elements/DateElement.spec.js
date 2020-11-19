import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'
import { current } from 'locutus/php/array'
import { nextTick } from 'composition-api'

expect.extend({toBeVisible})

describe('Date Element Rendering', () => {
  it('should render date element with flatpickr', () => {
    let form = createForm({
      schema: {
        el: {
          type: 'date'
        }
      }
    })

    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    expect(Flatpickr.exists()).toBe(true)
  })

  it('should render format according to `displayFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          displayFormat: 'DD/MM/YYYY'
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate('20201230', true, 'YYYYMMDD')

    expect(a.get('input').element.value).toBe('30/12/2020')
  })

  it('should add `calendarContainer` class to calendar container', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    expect(Flatpickr.vm.flatpickr$.calendarContainer.classList).toContain(form.vm.selectedTheme.components.Flatpickr.data().defaultClasses.calendarContainer)
  })
})

describe('Date Element Model Single Mode', () => {
  it('should have value in format defined in `valueFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD'
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate('20201230', true, 'YYYYMMDD')

    expect(el.value).toBe('2020-12-30')
  })

  it('should have a Date object as value if `valueFormat` is false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: false
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate('20201230', true, 'YYYYMMDD')

    expect(el.value instanceof Date).toBe(true)
  })

  it('should load date according to `loadFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.load({
      a: '2020-12-30'
    })

    expect(el.value).toBe('2020-12-30')

    el.load({
      a: '30/12/2020'
    })

    expect(el.value).not.toBe('2020-12-30')

    el.loadFormat = 'DD/MM/YYYY'
    el.load({
      a: '30/12/2020'
    })

    expect(el.value).toBe('2020-12-30')
  })

  it('should update according to `loadFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('2020-12-30')

    expect(el.value).toBe('2020-12-30')

    el.update('30/12/2020')

    expect(el.value).not.toBe('2020-12-30')

    el.loadFormat = 'DD/MM/YYYY'
    el.update('30/12/2020')

    expect(el.value).toBe('2020-12-30')
  })

  it('should set value according to `loadFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = '2020-12-30'

    expect(el.value).toBe('2020-12-30')

    el.value = '30/12/2020'

    expect(el.value).not.toBe('2020-12-30')

    el.loadFormat = 'DD/MM/YYYY'
    el.value = '30/12/2020'

    expect(el.value).toBe('2020-12-30')
  })

  it('should have null value if calendar is closed before selecting a date', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.open()

    expect(el.value).toBe(null)

    flatpickr$.close()

    expect(el.value).toBe(null)
  })

  it('should throw an error when trying to set array data in single mode', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      el.value = ['2020-12-24', '2020-12-25']
    }).toThrow(TypeError)
    
    console.error = originalConsoleError
  })

  it('should set a `default` value', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          loadFormat: 'YYYY-MM-DD',
          default: "2020-12-30"
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toBe('2020-12-30')
  })

  it('should not update model if `disabled`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          disabled: true
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true, 'YYYY-MM-DD')

    expect(el.value).toBe(null)
  })

  it('should not update model if `readonly`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          readonly: true
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true, 'YYYY-MM-DD')

    expect(el.value).toBe(null)
  })
})

describe('Date Element Model Range Mode', () => {
  it('should be able to select date range if `mode` is `range`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'range'
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate(['2020-12-24', '2020-12-30'], true, 'YYYY-MM-DD')

    expect(el.value).toStrictEqual(['2020-12-24', '2020-12-30'])
  })

  it('should convert dates to `valueFormat` if `mode` is `range`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'range',
          valueFormat: 'DD/MM/YYYY'
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate(['2020-12-24', '2020-12-30'], true, 'YYYY-MM-DD')

    expect(el.value).toStrictEqual(['24/12/2020', '30/12/2020'])
  })

  it('should have Date objects in the value array if `mode` is `range` and `valueFormat` is false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'range',
          valueFormat: false
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate(['2020-12-24', '2020-12-30'], true, 'YYYY-MM-DD')

    expect(el.value[0] instanceof Date).toBe(true)
    expect(el.value[1] instanceof Date).toBe(true)
  })

  it('should null value if `mode` is `range` and only one date is selected before closing', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'range'
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.open()

    flatpickr$.setDate(['2020-12-24'], true, 'YYYY-MM-DD')

    expect(el.value).toStrictEqual(['2020-12-24'])

    flatpickr$.close()

    expect(el.value).toStrictEqual([])
  })

  it('should load date according to `loadFormat` when in `range` mode', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'range',
        }
      }
    })

    let el = form.vm.el$('el')

    el.load({
      a: ['2020-12-24', '2020-12-30']
    })

    expect(el.value).toStrictEqual(['2020-12-24', '2020-12-30'])

    el.load({
      a: ['25/12/2020', '30/12/2020']
    })

    expect(el.value).not.toStrictEqual(['2020-12-25', '2020-12-30'])

    el.loadFormat = 'DD/MM/YYYY'
    el.load({
      a: ['25/12/2020', '30/12/2020']
    })

    expect(el.value).toStrictEqual(['2020-12-25', '2020-12-30'])
  })

  it('should update according to `loadFormat` when in `range` mode', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'range',
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(['2020-12-24','2020-12-30'])

    expect(el.value).toStrictEqual(['2020-12-24','2020-12-30'])

    el.update(['24/12/2020','30/12/2020'])

    expect(el.value).not.toStrictEqual(['2020-12-24','2020-12-30'])

    el.loadFormat = 'DD/MM/YYYY'
    el.update(['24/12/2020','30/12/2020'])

    expect(el.value).toStrictEqual(['2020-12-24','2020-12-30'])
  })

  it('should set value according to `loadFormat` when in `range` mode', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'range',
          loadFormat: 'DD/MM/YYYY',
          valueFormat: 'YYYY-MM-DD',
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = ['24/12/2020', '30/12/2020']

    expect(el.value).toStrictEqual(['2020-12-24', '2020-12-30'])
  })

  it('should set `default` value in `range` mode', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          loadFormat: 'YYYY-MM-DD',
          default: ['2020-12-25', '2020-12-30'],
          mode: 'range'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual(['2020-12-25', '2020-12-30'])
    expect(el.dirty).toBe(false)
  })
})

describe('Date Element Model Multiple Mode', () => {
  it('should be able to select multiple dates if `mode` is `multiple`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'multiple'
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate(['2020-12-24', '2020-12-25', '2020-12-30'], true, 'YYYY-MM-DD')

    expect(el.value).toStrictEqual(['2020-12-24', '2020-12-25', '2020-12-30'])
  })

  it('should convert dates to `valueFormat` if `mode` is `multiple`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'multiple',
          valueFormat: 'DD/MM/YYYY'
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate(['2020-12-24', '2020-12-25', '2020-12-30'], true, 'YYYY-MM-DD')

    expect(el.value).toStrictEqual(['24/12/2020', '25/12/2020', '30/12/2020'])
  })

  it('should have Date objects in the value array if `mode` is `multiple` and `valueFormat` is false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'multiple',
          valueFormat: false
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate(['2020-12-24', '2020-12-25', '2020-12-30'], true, 'YYYY-MM-DD')

    expect(el.value[0] instanceof Date).toBe(true)
    expect(el.value[1] instanceof Date).toBe(true)
    expect(el.value[2] instanceof Date).toBe(true)
  })

  it('should load date according to `loadFormat` when in `multiple` mode', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'multiple',
        }
      }
    })

    let el = form.vm.el$('el')

    el.load({
      a: ['2020-12-24', '2020-12-30']
    })

    expect(el.value).toStrictEqual(['2020-12-24', '2020-12-30'])

    el.load({
      a: ['25/12/2020', '30/12/2020']
    })

    expect(el.value).not.toStrictEqual(['2020-12-25', '2020-12-30'])

    el.loadFormat = 'DD/MM/YYYY'
    el.load({
      a: ['25/12/2020', '30/12/2020']
    })

    expect(el.value).toStrictEqual(['2020-12-25', '2020-12-30'])
  })

  it('should update according to `loadFormat` when in `multiple` mode', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'multiple',
        }
      }
    })

    let el = form.vm.el$('el')

    el.update(['2020-12-24','2020-12-30'])

    expect(el.value).toStrictEqual(['2020-12-24','2020-12-30'])

    el.update(['24/12/2020','30/12/2020'])

    expect(el.value).not.toStrictEqual(['2020-12-24','2020-12-30'])

    el.loadFormat = 'DD/MM/YYYY'
    el.update(['24/12/2020','30/12/2020'])

    expect(el.value).toStrictEqual(['2020-12-24','2020-12-30'])
  })

  it('should set value according to `loadFormat` when in `multiple` mode', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'multiple',
          loadFormat: 'DD/MM/YYYY',
          valueFormat: 'YYYY-MM-DD',
        }
      }
    })

    let el = form.vm.el$('el')

    el.value = ['24/12/2020', '30/12/2020']

    expect(el.value).toStrictEqual(['2020-12-24', '2020-12-30'])
  })

  it('should set `default` value in `multiple` mode', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          loadFormat: 'YYYY-MM-DD',
          default: ['2020-12-25', '2020-12-30'],
          mode: 'multiple'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual(['2020-12-25', '2020-12-30'])
    expect(el.dirty).toBe(false)
  })
})

describe('Date Element Props', () => {
  it('should have `displayFormat` as in config if not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.displayFormat).toBe(el.__('laraform.elements.date.displayFormat'))
  })

  it('should have `displayFormat` as defined in schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          displayFormat: 'DD/MM/YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.displayFormat).toBe('DD/MM/YYYY')
  })

  it('should set `displayFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.displayFormat).toBe(el.__('laraform.elements.date.displayFormat'))

    el.displayFormat = 'DD/MM/YYYY'

    expect(el.displayFormat).toBe('DD/MM/YYYY')
  })

  it('should have default "YYYY-MM-DD" `valueFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.valueFormat).toBe('YYYY-MM-DD')
  })

  it('should have `valueFormat` as defined in schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'DD/MM/YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.valueFormat).toBe('DD/MM/YYYY')
  })

  it('should set `valueFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.valueFormat).toBe('YYYY-MM-DD')

    el.valueFormat = 'DD/MM/YYYY'

    expect(el.valueFormat).toBe('DD/MM/YYYY')
  })

  it('should have default "YYYY-MM-DD" `loadFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.loadFormat).toBe('YYYY-MM-DD')
  })

  it('should have `loadFormat` as defined in schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          loadFormat: 'DD/MM/YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.loadFormat).toBe('DD/MM/YYYY')
  })

  it('should set `loadFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.loadFormat).toBe('YYYY-MM-DD')

    el.loadFormat = 'DD/MM/YYYY'

    expect(el.loadFormat).toBe('DD/MM/YYYY')
  })

  it('should have "single" as default `mode`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.mode).toBe('single')
  })

  it('should have `mode` as defined in schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          mode: 'range'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.mode).toBe('range')
  })

  it('should set `mode`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.mode).toBe('single')

    el.mode = 'range'

    expect(el.mode).toBe('range')
  })

  it('should render `placeholder`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          placeholder: 'aaa'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(a.get('input').attributes().placeholder).toBe('aaa')
  })

  it('should set `placeholder`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(a.get('input').attributes().placeholder).toBe(undefined)

    el.placeholder = 'aaa'

    await nextTick()

    expect(a.get('input').attributes().placeholder).toBe('aaa')
  })

  it('should render `floating`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          floating: 'aaa'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(true)
  })

  it('should set `floating`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(false)

    el.floating = 'aaa'

    await nextTick()

    expect(a.findComponent({ name: 'ElementLabelFloating' }).exists()).toBe(true)
  })

  it('should add `id` to input parent', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    expect(Flatpickr.vm.flatpickr$.input.parentElement.id).toBe(`flatpickr-a`)
  })

  it('should add `id` to input parent when `id` changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)

    expect(Flatpickr.vm.flatpickr$.input.parentElement.id).toBe(`flatpickr-a`)

    el.id = 'aaa'

    await nextTick()
    
    expect(Flatpickr.vm.flatpickr$.input.parentElement.id).toBe(`flatpickr-aaa`)
  })

  it('should `hasDate` to be `true`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.hasDate).toBe(true)
  })

  it('should `hasTime` to be `false`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.hasTime).toBe(false)
  })
})

describe('Date Element Options', () => {
  it('should set min date if `min` is a Date object', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
          loadFormat: 'YYYY-MM-DD',
          min: moment('2020-12-25', 'YYYY-MM-DD', true).toDate()
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true)
    expect(el.value).toBe('2020-12-30')

    flatpickr$.setDate('2020-12-25', true)
    expect(el.value).toBe('2020-12-25')

    flatpickr$.setDate('2020-12-24', true)
    expect(el.value).toBe(null)
  })

  it('should set min date if `min` is a date string formatted like `loadFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
          loadFormat: 'YYYY-MM-DD',
          min: '2020-12-25'
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true)
    expect(el.value).toBe('2020-12-30')

    flatpickr$.setDate('2020-12-25', true)
    expect(el.value).toBe('2020-12-25')

    flatpickr$.setDate('2020-12-24', true)
    expect(el.value).toBe(null)
  })

  it('should set max date if `max` is a Date object', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
          loadFormat: 'YYYY-MM-DD',
          max: moment('2020-12-25', 'YYYY-MM-DD', true).toDate()
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true)
    expect(el.value).toBe(null)

    flatpickr$.setDate('2020-12-25', true)
    expect(el.value).toBe('2020-12-25')

    flatpickr$.setDate('2020-12-24', true)
    expect(el.value).toBe('2020-12-24')
  })

  it('should set max date if `max` is a date string formatted like `loadFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
          loadFormat: 'YYYY-MM-DD',
          max: '2020-12-25'
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true)
    expect(el.value).toBe(null)

    flatpickr$.setDate('2020-12-25', true)
    expect(el.value).toBe('2020-12-25')

    flatpickr$.setDate('2020-12-24', true)
    expect(el.value).toBe('2020-12-24')
  })

  it('should disable dates defined in `disables` as Date object', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
          loadFormat: 'YYYY-MM-DD',
          disables: [moment('2020-12-25', 'YYYY-MM-DD', true).toDate(), moment('2020-12-26', 'YYYY-MM-DD', true).toDate()]
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true)
    expect(el.value).toBe('2020-12-30')

    flatpickr$.setDate('2020-12-25', true)
    expect(el.value).toBe(null)

    flatpickr$.setDate('2020-12-26', true)
    expect(el.value).toBe(null)

    flatpickr$.setDate('2020-12-24', true)
    expect(el.value).toBe('2020-12-24')
  })

  it('should disable dates defined in `disables` as date string with `loadFormat`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'YYYY-MM-DD',
          loadFormat: 'YYYY-MM-DD',
          disables: ['2020-12-25', '2020-12-26']
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    flatpickr$.setDate('2020-12-30', true)
    expect(el.value).toBe('2020-12-30')

    flatpickr$.setDate('2020-12-25', true)
    expect(el.value).toBe(null)

    flatpickr$.setDate('2020-12-26', true)
    expect(el.value).toBe(null)

    flatpickr$.setDate('2020-12-24', true)
    expect(el.value).toBe('2020-12-24')
  })

  it('should be able to pass custom flatpickr options in `options`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          options: {
            altFormat: 'aaa'
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    expect(flatpickr$.config.altFormat).toBe('aaa')
  })

  it('should reinit flatpickr if any of its options changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let Flatpickr = findAllComponents(form, { name: 'Flatpickr' }).at(0)
    let flatpickr$ = Flatpickr.vm.flatpickr$

    el.$set(el.schema, 'options', { altFormat: 'aaa' })

    await nextTick()

    expect(flatpickr$.config.altFormat).toBe('aaa')
  })
})