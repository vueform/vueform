import { createForm, findAllComponents } from 'test-helpers'
import defaultTheme from './../../src/themes/default'
import { mergeComponentClasses, mergeClass } from './../../src/utils/mergeClasses'

export default function (elementType, componentName, schema = {}, options = {}) {
  let defaultClasses = defaultTheme.components[componentName].data().defaultClasses
  let mainClass = _.keys(defaultClasses)[0]
  let mergeWith = options.mergeWith || {}
  let elementName = `${_.upperFirst(elementType)}Element`

  describe('form$', () => {
    it('should return form$', () => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      })

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.form$).toStrictEqual(form.vm)
    })
  })

  describe('el$', () => {
    it('should return el$', () => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      })

      let el = form.vm.el$('el')
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.el$).toStrictEqual(el)
    })
  })

  describe('theme', () => {
    it('should inject `theme`', () => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      })

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.theme).toStrictEqual(form.vm.extendedTheme)
    })
  })

  describe('components', () => {
    it('should equal to element components', () => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      })

      let el = form.vm.el$('el')
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.components).toStrictEqual(el.components)
    })
  })

  describe('mainClass', () => {
    it('should equal to first class name of defaultClasses', () => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      })

      let el = form.vm.el$('el')
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.mainClass).toStrictEqual(_.keys(Component.vm.defaultClasses)[0])
    })
  })

  describe('classes', () => {
    it('should `classes` equal to defaultClasses by default', () => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      })

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Component.vm.defaultClasses, mergeWith))
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
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      }, {
        themes: {
          default: Object.assign({}, defaultTheme, {
            classes: {
              [componentName]: overwriteClasses1
            }
          })
        }
      })

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

      // This also works but running tests with Vue2 fails for some reason
      // el.$laraform.themes.default.classes[elementName] = overwriteClasses2
      // expect(Component.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
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
          el: Object.assign({}, {
            type: elementType
          }, schema)
        },
        classes: {
          [componentName]: overwriteClasses1
        }
      })

      let el = form.vm.el$('el')
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

      el.form$.classes[componentName] = overwriteClasses2

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
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
          el: Object.assign({}, {
            type: elementType
          }, schema)
        },
        classes: {
          [componentName]: overwriteClasses1
        }
      }, {
        themes: {
          default: Object.assign({}, defaultTheme, {
            classes: {
              [componentName]: {
                [mainClass]: 'theme-overwrite-class'
              }
            }
          })
        }
      })

      let el = form.vm.el$('el')
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

      el.form$.classes[componentName] = overwriteClasses2

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
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
          el: Object.assign({}, {
            type: elementType
          }, schema)
        },
        addClasses: {
          [componentName]: addClasses1
        }
      })

      let el = form.vm.el$('el')
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass] + ' ' + addClasses1[mainClass], mergeWith[mainClass] || ''))

      el.form$.addClasses[componentName] = addClasses2

      expect(Component.vm.classes[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass] + ' ' + addClasses2[mainClass], mergeWith[mainClass] || ''))
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
          el: Object.assign({}, {
            type: elementType,
            classes: {
              [componentName]: overwriteClasses1
            }
          }, schema)
        },
      })

      let el = form.vm.el$('el')
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

      el.classes = {
        [componentName]: overwriteClasses2
      }

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
      expect(el.schema.classes).toStrictEqual({
        [componentName]: overwriteClasses2
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
          el: Object.assign({}, {
            type: elementType,
            classes: {
              [componentName]: overwriteClasses1
            }
          }, schema)
        },
      }, {
        themes: {
          default: Object.assign({}, defaultTheme, {
            classes: {
              [componentName]: {
                [mainClass]: 'theme-overwrite-class'
              }
            }
          })
        }
      })

      let el = form.vm.el$('el')
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

      el.classes = {
        [componentName]: overwriteClasses2
      }

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
      expect(el.schema.classes).toStrictEqual({
        [componentName]: overwriteClasses2
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
          el: Object.assign({}, {
            type: elementType,
            classes: {
              [componentName]: overwriteClasses1
            }
          }, schema)
        },
        classes: {
          [componentName]: {
            [mainClass]: 'form-overwrite-class'
          }
        }
      })

      let el = form.vm.el$('el')
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

      el.classes = {
        [componentName]: overwriteClasses2
      }

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
      expect(el.schema.classes).toStrictEqual({
        [componentName]: overwriteClasses2
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
          el: Object.assign({}, {
            type: elementType,
            addClasses: {
              [componentName]: addClasses1
            },
          }, schema)
        },
      })

      let el = form.vm.el$('el')
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass] + ' ' + addClasses1[mainClass], mergeWith[mainClass] || ''))

      el.addClasses[componentName] = addClasses2

      expect(Component.vm.classes[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass] + ' ' + addClasses2[mainClass], mergeWith[mainClass] || ''))
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
          el: Object.assign({}, {
            type: elementType,
            addClasses: {
              [componentName]: addClassesElement1
            },
          }, schema)
        },
        addClasses: {
          [componentName]: addClassesForm1
        }
      })

      let el = form.vm.el$('el')
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes[mainClass]).toStrictEqual(mergeClass(
        defaultClasses[mainClass] + ' ' + addClassesForm1[mainClass] + ' ' + addClassesElement1[mainClass],
        mergeWith[mainClass] || ''
      ))

      el.form$.addClasses[componentName] = addClassesForm2
      el.addClasses[componentName] = addClassesElement2

      expect(Component.vm.classes[mainClass]).toStrictEqual(mergeClass(
        defaultClasses[mainClass] + ' ' + addClassesForm2[mainClass] + ' ' + addClassesElement2[mainClass],
        mergeWith[mainClass] || ''
      ))
    })

    // Rendering
    it('should mainClass to the container DOM', async () => {
      let themeClasses = {
        [componentName]: {
          [mainClass]: 'theme-classes'
        }
      }

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType,
            classes: {
              [componentName]: {
                [mainClass]: 'element-classes'
              }
            },
            addClasses: {
              [componentName]: {
                [mainClass]: 'element-add-classes'
              }
            },
          }, schema)
        },
        classes: {
          [componentName]: {
            [mainClass]: 'form-classes'
          }
        },
        addClasses: {
          [componentName]: {
            [mainClass]: 'form-add-classes'
          }
        },
      }, {
        themes: {
          default: Object.assign({}, defaultTheme, {
            classes: themeClasses
          })
        }
      })

      let Component = findAllComponents(form, { name: componentName }).at(0)
      
      expect(Component.classes('element-classes')).toBe(true)
      expect(Component.classes('form-classes')).toBe(false)
      expect(Component.classes('theme-classes')).toBe(false)
      expect(Component.classes('element-add-classes')).toBe(true)
      expect(Component.classes('form-add-classes')).toBe(true)
    })
  })
}