import { nextTick } from 'vue'
import { createForm, findAllComponents, testPropDefault, destroy } from 'test-helpers'
import defaultTheme from './../../src/themes/default'
import { mergeComponentClasses, mergeClass } from './../../src/utils/mergeClasses'

export const mainClass = function (elementType, elementName, options) {
  it('should have the first property name of defaultClasses as `mainClass`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.mainClass).toStrictEqual(_.keys(el.defaultClasses)[0])
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const classes = function (elementType, elementName, options) {
  let defaultClasses = defaultTheme.templates[elementName].data().defaultClasses
  let mainClass = _.keys(defaultClasses)[0]
  let mergeWith = options.mergeWith || {}

  // Theme classes
  it('should `classes` equal to defaultClasses by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes).toStrictEqual(mergeComponentClasses(el.defaultClasses, mergeWith))    
    
    // destroy(form) // teardown
  })

  it('should classes in theme overwrite defaultClasses in `classes`, even when changes', () => {
    let overwriteClasses1 = {
      [mainClass]: 'theme-overwrite-class'
    }
    let overwriteClasses2 = {
      [mainClass]: 'theme-overwrite-class2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    }, {
      theme: Object.assign({}, defaultTheme, {
        classes: {
          [elementName]: overwriteClasses1
        }
      })
    })

    let el = form.vm.el$('el')

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

    // This also works but running tests with Vue2 fails for some reason
    // el.$vueform.config.themes.default.classes[elementName] = overwriteClasses2
    // expect(el.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    
    // destroy(form) // teardown
  })

  // Form classes
  it('should replaceClasses in form overwrite defaultClasses in `classes`, even when changes', () => {
    let overwriteClasses1 = {
      [mainClass]: 'form-overwrite-class'
    }
    let overwriteClasses2 = {
      [mainClass]: 'form-overwrite-class2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      },
      replaceClasses: {
        [elementName]: overwriteClasses1
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

    el.form$.options.replaceClasses[elementName] = overwriteClasses2

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))    
    
    // destroy(form) // teardown
  })

  it('should replaceClasses in form overwrite theme classes in `classes`, even when changes', () => {
    let overwriteClasses1 = {
      [mainClass]: 'form-overwrite-class'
    }
    let overwriteClasses2 = {
      [mainClass]: 'form-overwrite-class2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      },
      replaceClasses: {
        [elementName]: overwriteClasses1
      }
    }, {
      themes: {
        default: Object.assign({}, defaultTheme, {
          classes: {
            [elementName]: {
              [mainClass]: 'theme-overwrite-class'
            }
          }
        })
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

    el.form$.options.replaceClasses[elementName] = overwriteClasses2

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))    
    
    // destroy(form) // teardown
  })

  it('should `extendClasses` in form add classes in `classes`, even when changes', () => {
    let extendClasses1 = {
      [mainClass]: 'form-add-class'
    }
    let extendClasses2 = {
      [mainClass]: 'form-add-class2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      },
      extendClasses: {
        [elementName]: extendClasses1
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], mergeClass(mergeWith[mainClass], extendClasses1[mainClass])))

    el.form$.options.extendClasses[elementName] = extendClasses2

    expect(el.classes[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], mergeClass(mergeWith[mainClass], extendClasses2[mainClass])))
    
    // destroy(form) // teardown
  })

  // Element classes
  it('should replaceClasses in element overwrite defaultClasses in `classes`, even when changes', async () => {
    let overwriteClasses1 = {
      [mainClass]: 'element-overwrite-class'
    }
    let overwriteClasses2 = {
      [mainClass]: 'element-overwrite-class2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          replaceClasses: {
            [elementName]: overwriteClasses1
          }
        }
      },
    })

    let el = form.vm.el$('el')

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

    form.vm.$set(form.vm.vueform.schema.el.replaceClasses, elementName, overwriteClasses2)
    await nextTick()

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))    
    
    // destroy(form) // teardown
  })

  it('should replaceClasses in element overwrite theme classes in `classes`, even when changes', async () => {
    let overwriteClasses1 = {
      [mainClass]: 'element-overwrite-class'
    }
    let overwriteClasses2 = {
      [mainClass]: 'element-overwrite-class2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          replaceClasses: {
            [elementName]: overwriteClasses1
          }
        }
      },
    }, {
      themes: {
        default: Object.assign({}, defaultTheme, {
          classes: {
            [elementName]: {
              [mainClass]: 'theme-overwrite-class'
            }
          }
        })
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

    form.vm.$set(form.vm.vueform.schema.el.replaceClasses, elementName, overwriteClasses2)
    await nextTick()

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))    
    
    // destroy(form) // teardown
  })

  it('should replaceClasses in element overwrite form classes in `classes`, even when changes', async () => {
    let overwriteClasses1 = {
      [mainClass]: 'element-overwrite-class'
    }
    let overwriteClasses2 = {
      [mainClass]: 'element-overwrite-class2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          replaceClasses: {
            [elementName]: overwriteClasses1
          }
        }
      },
      replaceClasses: {
        [elementName]: {
          [mainClass]: 'form-overwrite-class'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

    form.vm.$set(form.vm.vueform.schema.el.replaceClasses, elementName, overwriteClasses2)
    await nextTick()

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))    
    
    // destroy(form) // teardown
  })

  it('should extendClasses in element add classes in `classes`, even when changes', async () => {
    let extendClasses1 = {
      [mainClass]: 'element-add-class'
    }
    let extendClasses2 = {
      [mainClass]: 'element-add-class2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          extendClasses: {
            [elementName]: extendClasses1
          },
        }
      },
    })

    let el = form.vm.el$('el')

    expect(el.classes[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], mergeClass(mergeWith[mainClass], extendClasses1[mainClass])))

    form.vm.$set(form.vm.vueform.schema.el.extendClasses, elementName, extendClasses2)
    await nextTick()

    expect(el.classes[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], mergeClass(mergeWith[mainClass], extendClasses2[mainClass])))
    
    // destroy(form) // teardown
  })

  it('should extendClasses in both form and element add classes in `classes`, even when changes', () => {
    let extendClassesElement1 = {
      [mainClass]: 'element-add-class'
    }
    let extendClassesElement2 = {
      [mainClass]: 'element-add-class2'
    }
    let extendClassesForm1 = {
      [mainClass]: 'form-add-class'
    }
    let extendClassesForm2 = {
      [mainClass]: 'form-add-class2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          extendClasses: {
            [elementName]: extendClassesElement1
          },
        }
      },
      extendClasses: {
        [elementName]: extendClassesForm1
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes[mainClass]).toStrictEqual(mergeClass(
      defaultClasses[mainClass], mergeClass(mergeWith[mainClass], mergeClass(extendClassesForm1[mainClass], extendClassesElement1[mainClass]))
    ))

    el.form$.options.extendClasses[elementName] = extendClassesForm2
    el.extendClasses[elementName] = extendClassesElement2



    expect(el.classes[mainClass]).toStrictEqual(mergeClass(
      defaultClasses[mainClass], mergeClass(mergeWith[mainClass], mergeClass(extendClassesForm2[mainClass], extendClassesElement2[mainClass]))
    ))
    
    // destroy(form) // teardown
  })
}

export const rendering = function (elementType, elementName, options) {
  let defaultClasses = defaultTheme.templates[elementName].data().defaultClasses
  let mainClass = _.keys(defaultClasses)[0]
  
  // Element class
  it('should `addClass` in element add classes to the outer-most DOM', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addClass: 'element-add-class'
        }
      },
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.classes('element-add-class')).toBe(true)    
    
    // destroy(form) // teardown
  })

  it('should `addClass` in element add classes to the outer-most DOM even if form `replaceClasses` is defined, even when changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addClass: 'element-add-class'
        }
      },
      replaceClasses: {
        [elementName]: {
          [mainClass]: 'form-add-class'
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.classes('element-add-class')).toBe(true)
    expect(elWrapper.classes('form-add-class')).toBe(true)

    form.vm.$set(form.vm.options.replaceClasses[elementName], mainClass, 'form-add-class2')

    await nextTick()

    expect(elWrapper.classes('form-add-class2')).toBe(true)    
    
    // destroy(form) // teardown
  })

  it('should `addClass` in element add classes to the outer-most DOM even if element `replaceClasses` is defined, even when changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addClass: 'element-add-class',
          replaceClasses: {
            [elementName]: {
              [mainClass]: 'element-add-classes'
            }
          }
        }
      },
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.classes('element-add-class')).toBe(true)
    expect(elWrapper.classes('element-add-classes')).toBe(true)

    form.vm.$set(form.vm.vueform.schema.el.replaceClasses[elementName], mainClass, 'element-add-classes2')

    await nextTick()

    expect(elWrapper.classes('element-add-classes2')).toBe(true)    
    
    // destroy(form) // teardown
  })

  it('should `addClass` in element add classes to the outer-most DOM even if form `extendClasses` is defined, even when changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addClass: 'element-add-class'
        }
      },
      extendClasses: {
        [elementName]: {
          [mainClass]: 'form-add-class'
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.classes('element-add-class')).toBe(true)
    expect(elWrapper.classes('form-add-class')).toBe(true)

    form.vm.options.extendClasses[elementName][mainClass] = 'form-add-class2'

    await nextTick()

    expect(elWrapper.classes('form-add-class2')).toBe(true)    
    
    // destroy(form) // teardown
  })

  it('should `addClass` in element add classes to the outer-most DOM even if element `extendClasses` is defined, even when changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addClass: 'element-add-class',
          extendClasses: {
            [elementName]: {
              [mainClass]: 'element-add-classes'
            }
          }
        }
      },
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.classes('element-add-class')).toBe(true)
    expect(elWrapper.classes('element-add-classes')).toBe(true)

    form.vm.$set(form.vm.vueform.schema.el.extendClasses[elementName], mainClass, 'element-add-classes2')

    await nextTick()

    expect(elWrapper.classes('element-add-classes2')).toBe(true)    
    
    // destroy(form) // teardown
  })

  it('should `addClass` in element add classes to the outer-most DOM even if both form and element `extendClasses` are defined, even when changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addClass: 'element-add-class',
          extendClasses: {
            [elementName]: {
              [mainClass]: 'element-add-classes'
            }
          }
        }
      },
      extendClasses: {
        [elementName]: {
          [mainClass]: 'form-add-classes'
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.classes('element-add-class')).toBe(true)
    expect(elWrapper.classes('element-add-classes')).toBe(true)
    expect(elWrapper.classes('form-add-classes')).toBe(true)

    el.extendClasses[elementName] = {
      [mainClass]: 'element-add-classes2'
    }

    form.vm.options.extendClasses[elementName] = {
      [mainClass]: 'form-add-classes2'
    }

    await nextTick()

    expect(elWrapper.classes('element-add-classes2')).toBe(true)
    expect(elWrapper.classes('form-add-classes2')).toBe(true)
    
    // destroy(form) // teardown
  })
}