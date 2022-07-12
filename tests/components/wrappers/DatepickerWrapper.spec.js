import { createForm, findAllComponents, findAll } from 'test-helpers'
import useElementComponent from './../../composables/useElementComponent'
import { nextTick } from 'vue'
import moment from 'moment'

describe('DatepickerWrapper', () => {
  useElementComponent('date', 'DatepickerWrapper')

  describe('datepicker$', () => {
    it('should be equal to datepicker instance', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')
      let DatepickerWrapper = el.input

      expect(DatepickerWrapper.datepicker$.calendarContainer).not.toBe(undefined)
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
      let DatepickerWrapper = el.input

      expect(DatepickerWrapper.$el).toStrictEqual(findAll(form, 'input').at(0).element)
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
      let DatepickerWrapper = el.input

      expect(DatepickerWrapper.mode).toBe('single')
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
      let DatepickerWrapper = el.input

      expect(DatepickerWrapper.mode).toBe('range')
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
      let DatepickerWrapper = el.input

      expect(DatepickerWrapper.config).toStrictEqual({
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
      let DatepickerWrapper = findAllComponents(form, { name: 'DatepickerWrapper' }).at(0)
      
      DatepickerWrapper.vm.update([1,2])
      expect(DatepickerWrapper.emitted('change')[0][0]).toBe(1)
      
      DatepickerWrapper.vm.update([])
      expect(DatepickerWrapper.emitted('change')[1][0]).toBe(null)
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
      let DatepickerWrapper = findAllComponents(form, { name: 'DatepickerWrapper' }).at(0)
      
      DatepickerWrapper.vm.update([1,2])
      expect(DatepickerWrapper.emitted('change')[0][0]).toStrictEqual([1,2])
    })
  })

  describe('watchers', () => {
    it('should set date to datepicker when value changes', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.input.datepicker$.selectedDates.length).toBe(0)

      el.update('2020-11-20')

      await nextTick()

      expect(el.input.datepicker$.selectedDates[0]).toStrictEqual(moment('2020-11-20').toDate())
    })

    it('should set datepicker id when id changes', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
            id: 'el'
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.input.datepicker$.input.parentElement.id).toBe('datepicker-el')

      form.vm.vueform.schema.el.id = 'not-el'

      await nextTick()

      expect(el.input.datepicker$.input.parentElement.id).toBe('datepicker-not-el')
    })

    it('should update datepicker options when options change', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'dates',
            mode: 'multiple'
          }
        }
      })

      let el = form.vm.el$('el')


      expect(el.input.datepicker$.config.mode).toBe('multiple')

      form.vm.vueform.schema.el.mode = 'range'

      await nextTick()

      expect(el.input.datepicker$.config.mode).toBe('range')
    })
  })
  
  describe('onMounted', () => {
    it('should set datepicker id', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.input.datepicker$.input.parentElement.id).toBe('datepicker-el')
    })

    it('should set date datepicker date if has value', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
            default: '2020-11-20'
          }
        }
      })

      let el = form.vm.el$('el')

      expect(el.input.datepicker$.selectedDates[0]).toStrictEqual(moment('2020-11-20').toDate())
    })

    it('should add calendarContainer class to datepicker$ calendarContainer', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')
      let DatepickerWrapper = findAllComponents(form, { name: 'DatepickerWrapper' }).at(0)

      DatepickerWrapper.vm.classesInstance.classes.calendarContainer.forEach((c) => {
        expect(el.input.datepicker$.calendarContainer.className).toContain(c)
      })
    })

    it('should update value if datepicker value changes', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'date',
          }
        }
      })

      let el = form.vm.el$('el')
      let DatepickerWrapper = findAllComponents(form, { name: 'DatepickerWrapper' }).at(0)

      el.input.datepicker$.setDate('2020-11-20', true)

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
      let DatepickerWrapper = findAllComponents(form, { name: 'DatepickerWrapper' }).at(0)

      el.input.datepicker$.open()
      el.input.datepicker$.setDate('2020-11-20')
      el.input.datepicker$.close()

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
      let DatepickerWrapper = findAllComponents(form, { name: 'DatepickerWrapper' }).at(0)

      el.input.datepicker$.open()
      el.input.datepicker$.setDate(['2020-11-20'])
      el.input.datepicker$.close()

      await nextTick()

      expect(el.value).toStrictEqual([])

      el.input.datepicker$.open()
      el.input.datepicker$.setDate(['2020-11-20', '2020-11-22'])
      el.input.datepicker$.close()

      await nextTick()

      expect(el.value).toStrictEqual(['2020-11-20', '2020-11-22'])
    })
  })
})