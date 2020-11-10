import { nextTick } from 'vue'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import defaultTheme from './../../src/themes/default'
import { addClasses, class_, mainClass, rendering, classes as baseClasses } from './classes'
import { mergeComponentClasses } from './../../src/utils/mergeClasses'

export {
  addClasses,
  class_,
  mainClass,
  rendering,
}

export const classes = function (elementType, elementName, options) {
  let form = createForm({
    schema: {
      el: {
        type: elementType,
      }
    },
  })

  let el = form.vm.el$('el')

  baseClasses(elementType, elementName, Object.assign({}, options, {
    mergeWith: {
      [el.containers.sortable]: {
        [el.classes.sortable]: el.sort
      },
      [el.containers.add]: {
        [el.classes.disabled]: el.disabled
      },
      [el.containers.remove]: {
        [el.classes.disabled]: el.disabled
      },
    }
  }))

  // it('should set default `childrenContainer` class on the container of child elements', () => {
  //   let form = createForm({
  //     schema: {
  //       el: {
  //         type: elementType,
  //       }
  //     }
  //   })

  //   let el = findAllComponents(form, { name: elementName }).at(0)
  //   let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    
  //   expect(child1.element.parentElement.className.split(' ').indexOf(el.vm.classes.childrenContainer) !== -1).toBe(true)
  // })
}

export default function (elementType, options) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName, options)
    })
  }
}