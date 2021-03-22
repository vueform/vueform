import { createForm, findAllComponents, findAll } from 'test-helpers'
import useElementComponent from './../../composables/useElementComponent'
import { nextTick } from 'composition-api'

describe('FlatpickrWrapper', () => {
  // useElementComponent('date', 'FlatpickrWrapper')

  describe('flatpickr$', () => {
    it('should be equal to flatpickr instance', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')
      let FlatpickrWrapper = el.input

      expect(FlatpickrWrapper.flatpickr$.calendarContainer).not.toBe(undefined)
    })
  })

  describe('input', () => {
    it('should be equal to date input', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')
      let FlatpickrWrapper = el.input

      expect(FlatpickrWrapper.$el).toStrictEqual(findAll(form, 'input').at(0).element)
    })
  })

  describe('mode', () => {
    it('should be single by default', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')
      let FlatpickrWrapper = el.input

      expect(FlatpickrWrapper.mode).toBe('single')
    })

    it('should be range if range', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'dates',
            mode: 'range',
          }
        }
      })

      let el = form.vm.el$('el')
      let FlatpickrWrapper = el.input

      expect(FlatpickrWrapper.mode).toBe('range')
    })
  })

  describe('config', () => {
    it('should be single by default', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')
      let FlatpickrWrapper = el.input

      expect(FlatpickrWrapper.config).toStrictEqual({
        dateFormat: el.fieldOptions.dateFormat,
        disable: [],
        clickOpens: true,
        time_24hr: true,
        enableTime: false,
        enableSeconds: false,
        noCalendar: false,
        static: true
      })
    })
  })

  describe('update', () => {
    it('should emit first array value or null if single', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')
      let FlatpickrWrapper = findAllComponents(form, { name: 'FlatpickrWrapper' }).at(0)
      
      FlatpickrWrapper.vm.update([1,2])
      expect(FlatpickrWrapper.emitted('change')[0][0]).toBe(1)
      
      FlatpickrWrapper.vm.update([])
      expect(FlatpickrWrapper.emitted('change')[1][0]).toBe(null)
    })

    it('should emit value or if not single', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'dates',
          }
        }
      })

      let el = form.vm.el$('el')
      let FlatpickrWrapper = findAllComponents(form, { name: 'FlatpickrWrapper' }).at(0)
      
      FlatpickrWrapper.vm.update([1,2])
      expect(FlatpickrWrapper.emitted('change')[0][0]).toStrictEqual([1,2])
    })
  })

  describe('watchers', () => {
    it('should set date to flatpickr when value changes', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.input.flatpickr$.selectedDates.length).toBe(0)

      el.update('2020-11-20')

      await nextTick()

      expect(el.input.flatpickr$.selectedDates[0]).toStrictEqual(moment('2020-11-20').toDate())
    })

    it('should set flatpickr id when id changes', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
            id: 'el'
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.input.flatpickr$.input.parentElement.id).toBe('flatpickr-el')

      form.vm.laraform.schema.el.id = 'not-el'

      await nextTick()

      expect(el.input.flatpickr$.input.parentElement.id).toBe('flatpickr-not-el')
    })

    it('should update flatpickr options when options change', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'dates',
            mode: 'multiple'
          }
        }
      })

      let el = form.vm.el$('el')


      expect(el.input.flatpickr$.config.mode).toBe('multiple')

      form.vm.laraform.schema.el.mode = 'range'

      await nextTick()

      expect(el.input.flatpickr$.config.mode).toBe('range')
    })
  })
  
  describe('onMounted', () => {
    it('should set flatpickr id', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.input.flatpickr$.input.parentElement.id).toBe('flatpickr-el')
    })

    it('should set date flatpickr date if has value', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
            default: '2020-11-20'
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.input.flatpickr$.selectedDates[0]).toStrictEqual(moment('2020-11-20').toDate())
    })

    it('should add calendarContainer class to flatpickr$ calendarContainer', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')
      let FlatpickrWrapper = findAllComponents(form, { name: 'FlatpickrWrapper' }).at(0)

      expect(el.input.flatpickr$.calendarContainer.className).toContain(FlatpickrWrapper.vm.defaultClasses.calendarContainer)
    })

    it('should update value if flatpickr value changes', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')
      let FlatpickrWrapper = findAllComponents(form, { name: 'FlatpickrWrapper' }).at(0)

      el.input.flatpickr$.setDate('2020-11-20', true)

      await nextTick()

      expect(el.value).toBe('2020-11-20')
    })

    it('should update value on close', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')
      let FlatpickrWrapper = findAllComponents(form, { name: 'FlatpickrWrapper' }).at(0)

      el.input.flatpickr$.open()
      el.input.flatpickr$.setDate('2020-11-20')
      el.input.flatpickr$.close()

      await nextTick()

      expect(el.value).toBe('2020-11-20')
    })

    it('should clear value on close if range and only has 1 value', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'dates',
            mode: 'range'
          }
        }
      })

      let el = form.vm.el$('el')
      let FlatpickrWrapper = findAllComponents(form, { name: 'FlatpickrWrapper' }).at(0)

      el.input.flatpickr$.open()
      el.input.flatpickr$.setDate(['2020-11-20'])
      el.input.flatpickr$.close()

      await nextTick()

      expect(el.value).toStrictEqual([])

      el.input.flatpickr$.open()
      el.input.flatpickr$.setDate(['2020-11-20', '2020-11-22'])
      el.input.flatpickr$.close()

      await nextTick()

      expect(el.value).toStrictEqual(['2020-11-20', '2020-11-22'])
    })
  })
})