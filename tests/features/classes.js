import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import defaultTheme from './../../src/themes/default'

export default function classes (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    let defaultClasses = defaultTheme.elements[elementName].data().defaultClasses
    let mainClass = _.keys(defaultClasses)[0]

    testComputedOption(it, elementType, 'addClasses', {}, {
      ElementLabel: {
        label: 'my-label'
      }
    })

    // testComputedOption(it, elementType, 'class', '', 'my-class')
    
    // it('should the first property name of defaultClasses as `mainClass`', () => {
    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //       }
    //     }
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.vm.mainClass).toStrictEqual(_.keys(el.vm.defaultClasses)[0])
    // })

    // // Theme classes
    // it('should `classes` equal to defaultClasses by default', () => {
    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //       }
    //     }
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.vm.classes).toStrictEqual(el.vm.defaultClasses)
    // })

    // it('should `classes` in theme overwrite defaultClasses, even when changes', () => {
    //   let overwriteClasses1 = {
    //     [mainClass]: 'theme-overwrite-class'
    //   }
    //   let overwriteClasses2 = {
    //     [mainClass]: 'theme-overwrite-class2'
    //   }

    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //       }
    //     }
    //   }, {
    //     themes: {
    //       default: Object.assign({}, defaultTheme, {
    //         classes: {
    //           [elementName]: overwriteClasses1
    //         }
    //       })
    //     }
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

    //   el.vm.$laraform.themes.default.classes[elementName] = overwriteClasses2

    //   expect(el.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    // })

    // // Form classes
    // it('should `classes` in form overwrite defaultClasses, even when changes', () => {
    //   let overwriteClasses1 = {
    //     [mainClass]: 'form-overwrite-class'
    //   }
    //   let overwriteClasses2 = {
    //     [mainClass]: 'form-overwrite-class2'
    //   }

    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //       }
    //     },
    //     classes: {
    //       [elementName]: overwriteClasses1
    //     }
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

    //   el.vm.form$.classes[elementName] = overwriteClasses2

    //   expect(el.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    // })

    // it('should `classes` in form overwrite theme classes, even when changes', () => {
    //   let overwriteClasses1 = {
    //     [mainClass]: 'form-overwrite-class'
    //   }
    //   let overwriteClasses2 = {
    //     [mainClass]: 'form-overwrite-class2'
    //   }

    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //       }
    //     },
    //     classes: {
    //       [elementName]: overwriteClasses1
    //     }
    //   }, {
    //     themes: {
    //       default: Object.assign({}, defaultTheme, {
    //         classes: {
    //           [elementName]: {
    //             [mainClass]: 'theme-overwrite-class'
    //           }
    //         }
    //       })
    //     }
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

    //   el.vm.form$.classes[elementName] = overwriteClasses2

    //   expect(el.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    // })

    // it('should `addClasses` in form add classes, even when changes', () => {
    //   let addClasses1 = {
    //     [mainClass]: 'form-add-class'
    //   }
    //   let addClasses2 = {
    //     [mainClass]: 'form-add-class2'
    //   }

    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //       }
    //     },
    //     addClasses: {
    //       [elementName]: addClasses1
    //     }
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.vm.classes[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses1[mainClass])

    //   el.vm.form$.addClasses[elementName] = addClasses2

    //   expect(el.vm.classes[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses2[mainClass])
    // })

    // // Element classes
    // it('should `classes` in element overwrite defaultClasses, even when changes', () => {
    //   let overwriteClasses1 = {
    //     [mainClass]: 'element-overwrite-class'
    //   }
    //   let overwriteClasses2 = {
    //     [mainClass]: 'element-overwrite-class2'
    //   }

    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //         classes: {
    //           [elementName]: overwriteClasses1
    //         }
    //       }
    //     },
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

    //   el.vm.classes = {
    //     [elementName]: overwriteClasses2
    //   }

    //   expect(el.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    //   expect(el.vm.schema.classes).toStrictEqual({
    //     [elementName]: overwriteClasses2
    //   })
    // })

    // it('should `classes` in element overwrite theme classes, even when changes', () => {
    //   let overwriteClasses1 = {
    //     [mainClass]: 'element-overwrite-class'
    //   }
    //   let overwriteClasses2 = {
    //     [mainClass]: 'element-overwrite-class2'
    //   }

    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //         classes: {
    //           [elementName]: overwriteClasses1
    //         }
    //       }
    //     },
    //   }, {
    //     themes: {
    //       default: Object.assign({}, defaultTheme, {
    //         classes: {
    //           [elementName]: {
    //             [mainClass]: 'theme-overwrite-class'
    //           }
    //         }
    //       })
    //     }
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

    //   el.vm.classes = {
    //     [elementName]: overwriteClasses2
    //   }

    //   expect(el.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    //   expect(el.vm.schema.classes).toStrictEqual({
    //     [elementName]: overwriteClasses2
    //   })
    // })

    // it('should `classes` in element overwrite form classes, even when changes', () => {
    //   let overwriteClasses1 = {
    //     [mainClass]: 'element-overwrite-class'
    //   }
    //   let overwriteClasses2 = {
    //     [mainClass]: 'element-overwrite-class2'
    //   }

    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //         classes: {
    //           [elementName]: overwriteClasses1
    //         }
    //       }
    //     },
    //     classes: {
    //       [elementName]: {
    //         [mainClass]: 'form-overwrite-class'
    //       }
    //     }
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

    //   el.vm.classes = {
    //     [elementName]: overwriteClasses2
    //   }

    //   expect(el.vm.classes).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    //   expect(el.vm.schema.classes).toStrictEqual({
    //     [elementName]: overwriteClasses2
    //   })
    // })

    // it('should `addClasses` in element add classes, even when changes', () => {
    //   let addClasses1 = {
    //     [mainClass]: 'element-add-class'
    //   }
    //   let addClasses2 = {
    //     [mainClass]: 'element-add-class2'
    //   }

    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //         addClasses: {
    //           [elementName]: addClasses1
    //         },
    //       }
    //     },
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.vm.classes[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses1[mainClass])

    //   el.vm.addClasses[elementName] = addClasses2

    //   expect(el.vm.classes[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses2[mainClass])
    // })

    // it('should `addClasses` in both form and element add classes, even when changes', () => {
    //   let addClassesElement1 = {
    //     [mainClass]: 'element-add-class'
    //   }
    //   let addClassesElement2 = {
    //     [mainClass]: 'element-add-class2'
    //   }
    //   let addClassesForm1 = {
    //     [mainClass]: 'form-add-class'
    //   }
    //   let addClassesForm2 = {
    //     [mainClass]: 'form-add-class2'
    //   }

    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //         addClasses: {
    //           [elementName]: addClassesElement1
    //         },
    //       }
    //     },
    //     addClasses: {
    //       [elementName]: addClassesForm1
    //     }
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.vm.classes[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClassesForm1[mainClass] + ' ' + addClassesElement1[mainClass])

    //   el.vm.form$.addClasses[elementName] = addClassesForm2
    //   el.vm.addClasses[elementName] = addClassesElement2

    //   expect(el.vm.classes[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClassesForm2[mainClass] + ' ' + addClassesElement2[mainClass])
    // })

    // // Element class
    // it('should `class` in element add classes to the outer-most DOM, even when changes', async () => {
    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //         class: 'element-add-class'
    //       }
    //     },
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.classes('element-add-class')).toBe(true)

    //   el.vm.class = 'element-add-class2'

    //   await nextTick()

    //   expect(el.classes('element-add-class2')).toBe(true)
    // })

    // it('should `class` in element add classes to the outer-most DOM even if form `classes` is defined, even when changes', async () => {
    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //         class: 'element-add-class'
    //       }
    //     },
    //     classes: {
    //       [elementName]: {
    //         [mainClass]: 'form-add-class'
    //       }
    //     }
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.classes('element-add-class')).toBe(true)
    //   expect(el.classes('form-add-class')).toBe(true)

    //   el.vm.class = 'element-add-class2'
    //   form.vm.classes[elementName][mainClass] = 'form-add-class2'

    //   await nextTick()

    //   expect(el.classes('element-add-class2')).toBe(true)
    //   expect(el.classes('form-add-class2')).toBe(true)
    // })

    // it('should `class` in element add classes to the outer-most DOM even if element `classes` is defined, even when changes', async () => {
    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //         class: 'element-add-class',
    //         classes: {
    //           [elementName]: {
    //             [mainClass]: 'element-add-classes'
    //           }
    //         }
    //       }
    //     },
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.classes('element-add-class')).toBe(true)
    //   expect(el.classes('element-add-classes')).toBe(true)

    //   el.vm.class = 'element-add-class2'
    //   el.vm.classes = {
    //     [elementName]: {
    //       [mainClass]: 'element-add-classes2'
    //     }
    //   }

    //   await nextTick()

    //   expect(el.classes('element-add-class2')).toBe(true)
    //   expect(el.classes('element-add-classes2')).toBe(true)
    // })

    // it('should `class` in element add classes to the outer-most DOM even if form `addClasses` is defined, even when changes', async () => {
    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //         class: 'element-add-class'
    //       }
    //     },
    //     addClasses: {
    //       [elementName]: {
    //         [mainClass]: 'form-add-class'
    //       }
    //     }
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.classes('element-add-class')).toBe(true)
    //   expect(el.classes('form-add-class')).toBe(true)

    //   el.vm.class = 'element-add-class2'
    //   form.vm.addClasses[elementName][mainClass] = 'form-add-class2'

    //   await nextTick()

    //   expect(el.classes('element-add-class2')).toBe(true)
    //   expect(el.classes('form-add-class2')).toBe(true)
    // })

    // it('should `class` in element add classes to the outer-most DOM even if element `addClasses` is defined, even when changes', async () => {
    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //         class: 'element-add-class',
    //         addClasses: {
    //           [elementName]: {
    //             [mainClass]: 'element-add-classes'
    //           }
    //         }
    //       }
    //     },
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.classes('element-add-class')).toBe(true)
    //   expect(el.classes('element-add-classes')).toBe(true)

    //   el.vm.class = 'element-add-class2'
    //   el.vm.addClasses = {
    //     [elementName]: {
    //       [mainClass]: 'element-add-classes2'
    //     }
    //   }

    //   await nextTick()

    //   expect(el.classes('element-add-class2')).toBe(true)
    //   expect(el.classes('element-add-classes2')).toBe(true)
    // })

    // it('should `class` in element add classes to the outer-most DOM even if both form and element `addClasses` are defined, even when changes', async () => {
    //   let form = createForm({
    //     schema: {
    //       el: {
    //         type: elementType,
    //         class: 'element-add-class',
    //         addClasses: {
    //           [elementName]: {
    //             [mainClass]: 'element-add-classes'
    //           }
    //         }
    //       }
    //     },
    //     addClasses: {
    //       [elementName]: {
    //         [mainClass]: 'form-add-classes'
    //       }
    //     }
    //   })

    //   let el = findAllComponents(form, { name: elementName }).at(0)

    //   expect(el.classes('element-add-class')).toBe(true)
    //   expect(el.classes('element-add-classes')).toBe(true)
    //   expect(el.classes('form-add-classes')).toBe(true)

    //   el.vm.class = 'element-add-class2'
    //   el.vm.addClasses = {
    //     [elementName]: {
    //       [mainClass]: 'element-add-classes2'
    //     }
    //   }
    //   form.vm.addClasses = {
    //     [elementName]: {
    //       [mainClass]: 'form-add-classes2'
    //     }
    //   }

    //   await nextTick()

    //   expect(el.classes('element-add-class2')).toBe(true)
    //   expect(el.classes('element-add-classes2')).toBe(true)
    //   expect(el.classes('form-add-classes2')).toBe(true)
    // })
  }
}