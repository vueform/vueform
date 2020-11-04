import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import defaultTheme from './../../src/themes/default'
import { mergeComponentClasses } from './../../src/utils/mergeClasses'

export const addClasses = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'addClasses', {}, {
    ElementLabel: {
      label: 'my-label'
    }
  })
}

export const class_ = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'class', '', 'my-class')
}

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
  })
}

export const classes = function (elementType, elementName, options) {
  let defaultClasses = defaultTheme.elements[elementName].data().defaultClasses
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
      themes: {
        default: Object.assign({}, defaultTheme, {
          classes: {
            [elementName]: overwriteClasses1
          }
        })
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

    // @todo: This also works but running tests with Vue2 fails for some reason
    // el.$laraform.themes.default.classes[elementName] = overwriteClasses2
    // expect(el.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
  })

  // Form classes
  it('should classes in form overwrite defaultClasses in `classes`, even when changes', () => {
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
      classes: {
        [elementName]: overwriteClasses1
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

    el.form$.classes[elementName] = overwriteClasses2

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
  })

  it('should classes in form overwrite theme classes in `classes`, even when changes', () => {
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
      classes: {
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

    el.form$.classes[elementName] = overwriteClasses2

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
  })

  it('should `addClasses` in form add classes in `classes`, even when changes', () => {
    let addClasses1 = {
      [mainClass]: 'form-add-class'
    }
    let addClasses2 = {
      [mainClass]: 'form-add-class2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      },
      addClasses: {
        [elementName]: addClasses1
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses1[mainClass])

    el.form$.addClasses[elementName] = addClasses2

    expect(el.classes[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses2[mainClass])
  })

  // Element classes
  it('should classes in element overwrite defaultClasses in `classes`, even when changes', () => {
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
          classes: {
            [elementName]: overwriteClasses1
          }
        }
      },
    })

    let el = form.vm.el$('el')

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

    el.classes = {
      [elementName]: overwriteClasses2
    }

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
    expect(el.schema.classes).toStrictEqual({
      [elementName]: overwriteClasses2
    })
  })

  it('should classes in element overwrite theme classes in `classes`, even when changes', () => {
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
          classes: {
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

    el.classes = {
      [elementName]: overwriteClasses2
    }

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
    expect(el.schema.classes).toStrictEqual({
      [elementName]: overwriteClasses2
    })
  })

  it('should classes in element overwrite form classes in `classes`, even when changes', () => {
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
          classes: {
            [elementName]: overwriteClasses1
          }
        }
      },
      classes: {
        [elementName]: {
          [mainClass]: 'form-overwrite-class'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

    el.classes = {
      [elementName]: overwriteClasses2
    }

    expect(el.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
    expect(el.schema.classes).toStrictEqual({
      [elementName]: overwriteClasses2
    })
  })

  it('should addClasses in element add classes in `classes`, even when changes', () => {
    let addClasses1 = {
      [mainClass]: 'element-add-class'
    }
    let addClasses2 = {
      [mainClass]: 'element-add-class2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addClasses: {
            [elementName]: addClasses1
          },
        }
      },
    })

    let el = form.vm.el$('el')

    expect(el.classes[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses1[mainClass])

    el.addClasses[elementName] = addClasses2

    expect(el.classes[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses2[mainClass])
  })

  it('should addClasses in both form and element add classes in `classes`, even when changes', () => {
    let addClassesElement1 = {
      [mainClass]: 'element-add-class'
    }
    let addClassesElement2 = {
      [mainClass]: 'element-add-class2'
    }
    let addClassesForm1 = {
      [mainClass]: 'form-add-class'
    }
    let addClassesForm2 = {
      [mainClass]: 'form-add-class2'
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addClasses: {
            [elementName]: addClassesElement1
          },
        }
      },
      addClasses: {
        [elementName]: addClassesForm1
      }
    })

    let el = form.vm.el$('el')

    expect(el.classes[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClassesForm1[mainClass] + ' ' + addClassesElement1[mainClass])

    el.form$.addClasses[elementName] = addClassesForm2
    el.addClasses[elementName] = addClassesElement2

    expect(el.classes[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClassesForm2[mainClass] + ' ' + addClassesElement2[mainClass])
  })
}

export const rendering = function (elementType, elementName, options) {
  let defaultClasses = defaultTheme.elements[elementName].data().defaultClasses
  let mainClass = _.keys(defaultClasses)[0]
  
  // Element class
  it('should `class` in element add classes to the outer-most DOM, even when changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          class: 'element-add-class'
        }
      },
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.classes('element-add-class')).toBe(true)

    el.class = 'element-add-class2'

    await nextTick()

    expect(elWrapper.classes('element-add-class2')).toBe(true)
  })

  it('should `class` in element add classes to the outer-most DOM even if form `classes` is defined, even when changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          class: 'element-add-class'
        }
      },
      classes: {
        [elementName]: {
          [mainClass]: 'form-add-class'
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.classes('element-add-class')).toBe(true)
    expect(elWrapper.classes('form-add-class')).toBe(true)

    el.class = 'element-add-class2'
    form.vm.classes[elementName][mainClass] = 'form-add-class2'

    await nextTick()

    expect(elWrapper.classes('element-add-class2')).toBe(true)
    expect(elWrapper.classes('form-add-class2')).toBe(true)
  })

  it('should `class` in element add classes to the outer-most DOM even if element `classes` is defined, even when changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          class: 'element-add-class',
          classes: {
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

    el.class = 'element-add-class2'
    el.classes = {
      [elementName]: {
        [mainClass]: 'element-add-classes2'
      }
    }

    await nextTick()

    expect(elWrapper.classes('element-add-class2')).toBe(true)
    expect(elWrapper.classes('element-add-classes2')).toBe(true)
  })

  it('should `class` in element add classes to the outer-most DOM even if form `addClasses` is defined, even when changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          class: 'element-add-class'
        }
      },
      addClasses: {
        [elementName]: {
          [mainClass]: 'form-add-class'
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(elWrapper.classes('element-add-class')).toBe(true)
    expect(elWrapper.classes('form-add-class')).toBe(true)

    el.class = 'element-add-class2'
    form.vm.addClasses[elementName][mainClass] = 'form-add-class2'

    await nextTick()

    expect(elWrapper.classes('element-add-class2')).toBe(true)
    expect(elWrapper.classes('form-add-class2')).toBe(true)
  })

  it('should `class` in element add classes to the outer-most DOM even if element `addClasses` is defined, even when changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          class: 'element-add-class',
          addClasses: {
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

    el.class = 'element-add-class2'
    el.addClasses = {
      [elementName]: {
        [mainClass]: 'element-add-classes2'
      }
    }

    await nextTick()

    expect(elWrapper.classes('element-add-class2')).toBe(true)
    expect(elWrapper.classes('element-add-classes2')).toBe(true)
  })

  it('should `class` in element add classes to the outer-most DOM even if both form and element `addClasses` are defined, even when changes', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          class: 'element-add-class',
          addClasses: {
            [elementName]: {
              [mainClass]: 'element-add-classes'
            }
          }
        }
      },
      addClasses: {
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

    el.class = 'element-add-class2'
    el.addClasses = {
      [elementName]: {
        [mainClass]: 'element-add-classes2'
      }
    }
    form.vm.addClasses = {
      [elementName]: {
        [mainClass]: 'form-add-classes2'
      }
    }

    await nextTick()

    expect(elWrapper.classes('element-add-class2')).toBe(true)
    expect(elWrapper.classes('element-add-classes2')).toBe(true)
    expect(elWrapper.classes('form-add-classes2')).toBe(true)
  })
}

export default function (elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName, options)
    })
  }
}