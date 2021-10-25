import { createForm, testPropDefault, destroy } from 'test-helpers'

export const search = function (elementType, elementName, options) {
  it('should have `search` "true" when "create" is "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          create: true,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.fieldOptions.searchable).toBe(true)

    // destroy() // teardown
  })
}

export const native = function (elementType, elementName, options) {
  it('should always have "false" for `native`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.native).toBe(false)

    // destroy() // teardown
  })
}

export const isNative = function (elementType, elementName, options) {
  it('should always have `isNative` "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.isNative).toBe(false)

    // destroy() // teardown
  })
}

export const fieldOptions = function (elementType, elementName, options) {
  it('should have default `options`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.fieldOptions).toStrictEqual({ 
      mode: 'tags',
      searchable: el.search || el.create,
      createTag: el.create,
      noOptionsText: el.form$.__('laraform.multiselect.noOptions'),
      noResultsText: el.form$.__('laraform.multiselect.noResults'),
    })
  })
  
  it('should extend `options` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          extendOptions: {
            custom: 'option'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.fieldOptions).toStrictEqual({ 
      mode: 'tags',
      searchable: el.search || el.create,
      createTag: el.create,
      noOptionsText: el.form$.__('laraform.multiselect.noOptions'),
      noResultsText: el.form$.__('laraform.multiselect.noResults'),
      custom: 'option'
    })
  })
  
  it('should bind `options` to Multiselect when not native', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Multiselect = findAllComponents(elWrapper, { name: 'Multiselect' }).at(0)
    
    _.each(el.fieldOptions, (value, key) => {
      expect(Multiselect.props(key)).toStrictEqual(value)
    })

    // destroy() // teardown
  })
}