import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../../src/utils/testHelpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

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
          displayFormat: 'd/m/Y'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate('20201230', false, 'Ymd')

    expect(a.get('input').element.value).toBe('30/12/2020')
    
    done()
  })
})

describe('Date Element Model', () => {
  it('should have value in format defined in `valueFormat`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          valueFormat: 'Y-m-d'
        }
      }
    })

    let a = form.findAllComponents({ name: 'DateElement' }).at(0)
    let Flatpickr = form.findAllComponents({ name: 'Flatpickr' }).at(0)

    Flatpickr.vm.flatpickr$.setDate('20201230', true, 'Ymd')

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

    Flatpickr.vm.flatpickr$.setDate('20201230', true, 'Ymd')

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

    a.vm.loadFormat = 'd/m/Y'
    a.vm.load({
      a: '30/12/2020'
    })

    expect(a.vm.value).toBe('2020-12-30')
    
    done()
  })
})