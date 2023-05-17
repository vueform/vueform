import { createForm, findAllComponents, findAll, destroy } from 'test-helpers'
import flushPromises from 'flush-promises'

export const columnsClassesService = function (elementType, elementName, options) {

  it('should equal default columns settings', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(JSON.stringify(el.columnsClassesService)).toStrictEqual(JSON.stringify({
      defaultBreakpoint: 'default',
      presets: {},
      configPresetColumns: {},
      configColumns: {},
      formPresetColumns: {},
      formColumns: {},
      presetColumns: {},
      columns: {},
      hasLabel: false,
      getClass: function _default() {},
      cols: {default: {container: 12, label: 12, wrapper: 12}}
    }))
  })
}

export const columnsClasses = function (elementType, elementName, options) {

  it('should equal default columns settings', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-12' ],
      label: [ 'vf-col-0' ],
      innerContainer: [ 'vf-col-12' ],
      wrapper: [ 'vf-col-12' ]
    })
  })

  it('should equal set columns settings', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Something',
          columns: {
            container: 4,
            label: 8,
            wrapper: 11,
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-4' ],
      label: [ 'vf-col-8' ],
      innerContainer: [ 'vf-col-4' ],
      wrapper: [ 'vf-col-11' ]
    })
  })
}

export const cols = function (elementType, elementName, options) {

  it('should equal default columns settings', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.columnsClassesService.cols).toStrictEqual({
      default: {
        container: 12,
        label: 12,
        wrapper: 12,
      }
    })
  })

  it('should equal set columns', async () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          columns: {
            container: 2,
            label: 6,
            wrapper: 9
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.columnsClassesService.cols).toStrictEqual({
      default: {
        container: 2,
        label: 6,
        wrapper: 9,
      }
    })
  })
}


export const updateColumns = function (elementType, elementName, options) {

  it('should update columns', () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Something',
        }
      }
    })

    let el = form.vm.el$('el')

    el.updateColumns({ label: 7 })

    //@flag How to set other columns?

    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-12' ],
      label: [ 'vf-col-7' ],
      innerContainer: [ 'vf-col-5' ],
      wrapper: [ 'vf-col-12' ]
    })
  })
}