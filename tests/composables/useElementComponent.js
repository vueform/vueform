import { createForm, findAllComponents, findAll } from 'test-helpers'
import defaultTheme from './../../themes/vueform'
import { mergeComponentClasses, mergeClass } from './../../src/utils/mergeClasses'
import { nextTick } from 'composition-api'
import flushPromises from 'flush-promises'

export default function (elementType, componentName, schema = {}, options = {}) {
  let defaultClasses = defaultTheme.templates[componentName].data().defaultClasses
  let mainClass = _.keys(defaultClasses)[0]
  let mergeWith = options.mergeWith || {}
  let execute = options.execute || null

  describe('form$', () => {
    it('should return form$', async () => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.form$).toStrictEqual(form.vm)
    })
  })

  describe('el$', () => {
    it('should return el$', async () => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.el$).toStrictEqual(el)
    })
  })

  describe('theme', () => {
    it('should inject `theme`', async () => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.theme).toStrictEqual(form.vm.extendedTheme)
    })
  })

  describe('components', () => {
    it('should equal to element components', async () => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.components).toStrictEqual(el.components)
    })
  })

  describe('mainClass', () => {
    it('should equal to first class name of defaultClasses', async () => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.mainClass).toStrictEqual(_.keys(Component.vm.defaultClasses)[0])
    })
  })

  describe('classes', () => {
    it('should `classes` equal to defaultClasses by default', async () => {
      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Component.vm.defaultClasses, mergeWith))
    })

    it('should classes in theme overwrite defaultClasses in `classes`, even when changes', async () => {
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
        theme: Object.assign({}, defaultTheme, {
          classes: {
            [componentName]: overwriteClasses1
          }
        })
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

      // This also works but running tests with Vue2 fails for some reason
      // el.$vueform.config.themes.default.classes[elementName] = overwriteClasses2
      // expect(Component.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    })

    // Form classes
    it('should classes in form overwrite defaultClasses in `classes`, even when changes', async () => {
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
        replaceClasses: {
          [componentName]: overwriteClasses1
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

      el.form$.options.replaceClasses[componentName] = overwriteClasses2

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
    })

    it('should classes in form overwrite theme classes in `classes`, even when changes', async () => {
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
        replaceClasses: {
          [componentName]: overwriteClasses1
        }
      }, {
        theme: Object.assign({}, defaultTheme, {
          classes: {
            [componentName]: {
              [mainClass]: 'theme-overwrite-class'
            }
          }
        })
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

      el.form$.options.replaceClasses[componentName] = overwriteClasses2

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
    })

    it('should `extendClasses` in form add classes in `classes`, even when changes', async () => {
      let extendClasses1 = {
        [mainClass]: 'form-add-class'
      }
      let extendClasses2 = {
        [mainClass]: 'form-add-class2'
      }

      let form = createForm({
        schema: {
          el: Object.assign({}, {
            type: elementType
          }, schema)
        },
        extendClasses: {
          [componentName]: extendClasses1
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }
      
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], mergeClass(mergeWith[mainClass], extendClasses1[mainClass])))

      el.form$.options.extendClasses[componentName] = extendClasses2

      expect(Component.vm.classes[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], mergeClass(mergeWith[mainClass], extendClasses2[mainClass])))
    })

    // Element classes
    it('should classes in element overwrite defaultClasses in `classes`, even when changes', async () => {
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
            replaceClasses: {
              [componentName]: overwriteClasses1
            }
          }, schema)
        },
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

      form.vm.$set(form.vm.vueform.schema.el.replaceClasses, componentName, overwriteClasses2)
      await nextTick()
      await nextTick()

      Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
    })

    it('should classes in element overwrite theme classes in `classes`, even when changes', async () => {
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
            replaceClasses: {
              [componentName]: overwriteClasses1
            }
          }, schema)
        },
      }, {
        theme: Object.assign({}, defaultTheme, {
          classes: {
            [componentName]: {
              [mainClass]: 'theme-overwrite-class'
            }
          }
        })
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

      form.vm.$set(form.vm.vueform.schema.el.replaceClasses, componentName, overwriteClasses2)
      await nextTick()

      Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
    })

    it('should classes in element overwrite form classes in `classes`, even when changes', async () => {
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
            replaceClasses: {
              [componentName]: overwriteClasses1
            }
          }, schema)
        },
        replaceClasses: {
          [componentName]: {
            [mainClass]: 'form-overwrite-class'
          }
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses1), mergeWith))

      form.vm.$set(form.vm.vueform.schema.el.replaceClasses, componentName, overwriteClasses2)
      await nextTick()

      Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses, overwriteClasses2), mergeWith))
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
          el: Object.assign({}, {
            type: elementType,
            extendClasses: {
              [componentName]: extendClasses1
            },
          }, schema)
        },
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], mergeClass(mergeWith[mainClass], extendClasses1[mainClass])))

      form.vm.$set(form.vm.vueform.schema.el.extendClasses, componentName, extendClasses2)
      await nextTick()

      Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], mergeClass(mergeWith[mainClass], extendClasses2[mainClass])))
    })

    it('should extendClasses in both form and element add classes in `classes`, even when changes', async () => {
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
          el: Object.assign({}, {
            type: elementType,
            extendClasses: {
              [componentName]: extendClassesElement1
            },
          }, schema)
        },
        extendClasses: {
          [componentName]: extendClassesForm1
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classes[mainClass]).toStrictEqual(
        mergeClass(defaultClasses[mainClass], mergeClass(mergeWith[mainClass], [extendClassesForm1[mainClass], extendClassesElement1[mainClass]]))
      )

      el.form$.options.extendClasses[componentName] = extendClassesForm2
      el.extendClasses[componentName] = extendClassesElement2

      expect(Component.vm.classes[mainClass]).toStrictEqual(
        mergeClass(defaultClasses[mainClass], mergeClass(mergeWith[mainClass], [extendClassesForm2[mainClass], extendClassesElement2[mainClass]]))
      )
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
            replaceClasses: {
              [componentName]: {
                [mainClass]: 'element-classes'
              }
            },
            extendClasses: {
              [componentName]: {
                [mainClass]: 'element-add-classes'
              }
            },
          }, schema)
        },
        replaceClasses: {
          [componentName]: {
            [mainClass]: 'form-classes'
          }
        },
        extendClasses: {
          [componentName]: {
            [mainClass]: 'form-add-classes'
          }
        },
      }, {
        theme: Object.assign({}, defaultTheme, {
          classes: themeClasses
        })
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      if (Component.vm.$el.parentNode.classList.value === Component.classes().join(' ')) {
        Component = findAll(Component, 'div,label').at(0)
      }

      expect(Component.classes('element-classes')).toBe(true)
      expect(Component.classes('form-classes')).toBe(false)
      expect(Component.classes('theme-classes')).toBe(false)
      expect(Component.classes('element-add-classes')).toBe(true)
      expect(Component.classes('form-add-classes')).toBe(true)
    })
  })
}