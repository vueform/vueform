import { createForm, findAllComponents, findAll, createElement, classesToArray } from 'test-helpers'
import defaultTheme from './../../themes/vueform'
import tailwindTheme from './../../themes/tailwind'
import { nextTick } from 'vue'
import flushPromises from 'flush-promises'

export default function (schema, componentName, options = {}) {
  let defaultClasses = defaultTheme.templates[componentName].data().defaultClasses
  let execute = options.execute || null

  describe('form$', () => {
    it('should return form$', async () => {
      let form = createForm(Object.assign({}, schema))

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

  describe('theme', () => {
    it('should inject `theme`', async () => {
      let form = createForm(Object.assign({}, schema))

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

  describe('Size', () => {
    it('should be injected from form', async () => {
      let form = createForm({
        ...schema,
        size: 'sm',
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.Size).toBe('sm')
    })
  })

  describe('View', () => {
    it('should not be injected from form', async () => {
      let form = createForm({
        ...schema,
        view: 'dark',
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.View).toBe(undefined)
    })

    it('should be overwritten by form views', async () => {
      let form = createForm({
        ...schema,
        view: 'dark',
        views: {
          [componentName]: 'light'
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.View).toBe('light')
    })

    it('should be overwritten by `view` prop', async () => {
      if (!options.withView) {
        return
      }

      let form = createForm({
        ...options.withView.schema,
        view: 'dark',
        views: {
          [componentName]: 'light'
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.View).toBe(options.withView.view)
    })
  })

  describe('Templates', () => {
    it('should equal to theme templates', async () => {
      let template = {
        ...defaultTheme.templates[componentName],
      }

      let form = createForm({
        ...schema,
      }, {
        config: {
          templates: {
            [componentName]: template
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

      expect(Component.vm.Templates).toEqual({
        ...defaultTheme.templates,
        [componentName]: template,
      })
    })
  })

  describe('template', () => {
    it('should be base template', async () => {
      let form = createForm({
        ...schema,
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.template).toEqual(defaultTheme.templates[componentName])
    })

    it('should be base template if view does not exist', async () => {
      let form = createForm({
        ...schema,
        views: {
          [componentName]: 'dark'
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.template).toEqual(defaultTheme.templates[componentName])
    })

    it('should be view template', async () => {
      let dark = {
        ...defaultTheme.templates[componentName],
      }

      let form = createForm({
        ...schema,
        views: {
          [componentName]: 'dark'
        }
      }, {
        config: {
          templates: {
            [`${componentName}_dark`]: dark
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

      expect(Component.vm.template).toEqual(dark)
    })
  })

  describe('classes', () => {
  //   // it('should merge template, theme, config presets, config, form presets, form, local singular', async () => {})

    let form = createForm({
      ...schema,
    })

    let mainClass = Object.keys(form.vm.Templates[componentName].data().defaultClasses)[0]

    it('should have template classes by default', async () => {
      let form = createForm({
        ...schema,
      }, {
        config: {
          classHelpers: false,
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)


      _.each(Component.vm.classesInstance.componentClasses, (c, k) => {
        if (!k.match(/^\$/) && !_.isPlainObject(c)) {
          expect(c).toEqual(classesToArray(defaultTheme.templates[componentName].data().defaultClasses)[k])
        }
      })
    })

    it('should override template classes with theme classes', async () => {
      let form = createForm({
        ...schema,
        theme: tailwindTheme,
      }, {
        config: {
          classHelpers: false,
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }

      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classesInstance.componentClasses).toEqual(
        classesToArray(tailwindTheme.classes[componentName])
      )
    })

    it('should merge base classes with config preset classes', async () => {
      let form = createForm({
        ...schema,
        theme: tailwindTheme,
      }, {
        config: {
          classHelpers: false,
          presets: {
            preset: {
              overrideClasses: {
                [componentName]: {
                  [mainClass]: 'not-empty'
                }
              }
            }
          },
          usePresets: ['preset'],
        }
      })

      let el = form.vm.el$('el')

      if (execute) {
        execute(el)
        await flushPromises()
        await nextTick()
      }
      
      let Component = findAllComponents(form, { name: componentName }).at(0)

      expect(Component.vm.classesInstance.componentClasses).toEqual(classesToArray({
        ...tailwindTheme.classes[componentName],
        [mainClass]: 'not-empty'
      }))
    })

    it('should merge base classes with config classes', async () => {
      let form = createForm({
        ...schema,
        theme: tailwindTheme,
      }, {
        config: {
          classHelpers: false,
          presets: {
            preset: {
              overrideClasses: {
                [componentName]: {
                  [mainClass]: 'not-empty'
                }
              }
            }
          },
          usePresets: ['preset'],
          overrideClasses: {
            [componentName]: {
              [mainClass]: 'not-empty2'
            }
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

      expect(Component.vm.classesInstance.componentClasses).toEqual(classesToArray({
        ...tailwindTheme.classes[componentName],
        [mainClass]: 'not-empty2'
      }))
    })

    it('should merge base classes with form preset classes', async () => {
      let form = createForm({
        ...schema,
        theme: tailwindTheme,
        presets: ['preset2']
      }, {
        config: {
          classHelpers: false,
          presets: {
            preset: {
              overrideClasses: {
                [componentName]: {
                  [mainClass]: 'not-empty'
                }
              }
            },
            preset2: {
              overrideClasses: {
                [componentName]: {
                  [mainClass]: 'not-empty3'
                }
              }
            }
          },
          usePresets: ['preset'],
          overrideClasses: {
            [componentName]: {
              [mainClass]: 'not-empty2'
            }
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

      expect(Component.vm.classesInstance.componentClasses).toEqual(classesToArray({
        ...tailwindTheme.classes[componentName],
        [mainClass]: 'not-empty3'
      }))
    })

    it('should merge base classes with form classes', async () => {
      let form = createForm({
        ...schema,
        theme: tailwindTheme,
        presets: ['preset2'],
        overrideClasses: {
          [componentName]: {
            [mainClass]: 'not-empty4'
          }
        }
      }, {
        config: {
          classHelpers: false,
          presets: {
            preset: {
              overrideClasses: {
                [componentName]: {
                  [mainClass]: 'not-empty'
                }
              }
            },
            preset2: {
              overrideClasses: {
                [componentName]: {
                  [mainClass]: 'not-empty3'
                }
              }
            }
          },
          usePresets: ['preset'],
          overrideClasses: {
            [componentName]: {
              [mainClass]: 'not-empty2'
            }
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

      expect(Component.vm.classesInstance.componentClasses).toEqual(classesToArray({
        ...tailwindTheme.classes[componentName],
        [mainClass]: 'not-empty4'
      }))
    })

    it('should merge base classes with local singular classes', async () => {
      if (!options.withLocals) {
        return
      }

      let form = createForm({
        ...options.withLocals.schema,
        theme: tailwindTheme,
        presets: ['preset2'],
        overrideClasses: {
          [componentName]: {
            [mainClass]: 'not-empty4'
          }
        }
      }, {
        config: {
          classHelpers: false,
          presets: {
            preset: {
              overrideClasses: {
                [componentName]: {
                  [mainClass]: 'not-empty'
                }
              }
            },
            preset2: {
              overrideClasses: {
                [componentName]: {
                  [mainClass]: 'not-empty3'
                }
              }
            },
            preset3: {
              overrideClasses: {
                [componentName]: {
                  [mainClass]: 'not-empty5'
                }
              }
            },
          },
          usePresets: ['preset'],
          overrideClasses: {
            [componentName]: {
              [mainClass]: 'not-empty2'
            }
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

      expect(Component.vm.classesInstance.componentClasses).toEqual(classesToArray({
        ...tailwindTheme.classes[componentName],
        [mainClass]: options.withLocals.class,
      }))
    })
  })
}