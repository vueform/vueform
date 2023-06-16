import { createForm } from 'test-helpers'
import { nextTick } from 'vue'

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
  
  it('should update columns container with a single integer', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Something',
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.updateColumns(5)
    
    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-5' ],
      label: [ 'vf-col-12' ],
      innerContainer: [ 'vf-col-12' ],
      wrapper: [ 'vf-col-12' ]
    })
  })
  
  it('should update columns container', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Something',
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    el.updateColumns({ container: 9 })
    
    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-9' ],
      label: [ 'vf-col-12' ],
      innerContainer: [ 'vf-col-12' ],
      wrapper: [ 'vf-col-12' ]
    })
  })
  
  it('should update columns label', () => {

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

    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-12' ],
      label: [ 'vf-col-7' ],
      innerContainer: [ 'vf-col-5' ],
      wrapper: [ 'vf-col-12' ]
    })
  })
  
  it('should update columns wrapper', () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Something',
        }
      }
    })

    let el = form.vm.el$('el')

    el.updateColumns({ wrapper: 4 })

    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-12' ],
      label: [ 'vf-col-12' ],
      innerContainer: [ 'vf-col-12' ],
      wrapper: [ 'vf-col-4' ]
    })
  })
  
  it('should update columns container and label', () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Something',
        }
      }
    })

    let el = form.vm.el$('el')

    el.updateColumns({ container: 2, label: 8 })

    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-2' ],
      label: [ 'vf-col-8' ],
      innerContainer: [ 'vf-col-4' ],
      wrapper: [ 'vf-col-12' ]
    })
  })
  
  it('should update columns wrapper and label', () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Something',
        }
      }
    })

    let el = form.vm.el$('el')

    el.updateColumns({ wrapper: 11, label: 1 })

    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-12' ],
      label: [ 'vf-col-1' ],
      innerContainer: [ 'vf-col-11' ],
      wrapper: [ 'vf-col-11' ]
    })
  })
  
  it('should update columns wrapper and container', () => {

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Something',
        }
      }
    })

    let el = form.vm.el$('el')

    el.updateColumns({ wrapper: 2, container: 3 })

    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-3' ],
      label: [ 'vf-col-12' ],
      innerContainer: [ 'vf-col-12' ],
      wrapper: [ 'vf-col-2' ]
    })
  })
  
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

    el.updateColumns({ wrapper: 3, container: 6, label: 9 })

    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-6' ],
      label: [ 'vf-col-9' ],
      innerContainer: [ 'vf-col-3' ],
      wrapper: [ 'vf-col-3' ]
    })
  })
}

export const watchers = function (elementType, elementName, options) {
  
  it('should refresh class service as columns change', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Something',
          columns: {
            container: 1,
            label: 4,
            wrapper: 11
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-1' ],
      label: [ 'vf-col-4' ],
      innerContainer: [ 'vf-col-8' ],
      wrapper: [ 'vf-col-11' ]
    })
    
    el.$set(form.vm.vueform.schema.el.columns, 'container', 8)
    el.$set(form.vm.vueform.schema.el.columns, 'label', 9)
    el.$set(form.vm.vueform.schema.el.columns, 'wrapper', 3)
    
    await nextTick()
    
    expect(el.columnsClassesService.classes).toStrictEqual({
      container: [ 'vf-col-8' ],
      label: [ 'vf-col-9' ],
      innerContainer: [ 'vf-col-3' ],
      wrapper: [ 'vf-col-3' ]
    })
  })
}