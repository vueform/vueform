import { computed, toRefs, watchEffect } from 'composition-api'
import computedOption from './../../../utils/computedOption'
import { mergeComponentClasses } from './../../../utils/mergeClasses'
import useClasses from './useClasses'

export default function useListClasses(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const { class: class_, mainClass, mergedClasses, addClasses, defaultClasses } = useClasses(props, context, dependencies)

  const form$ = dependencies.form$
  const sort = dependencies.sort

  // ============== COMPUTED ==============

  /**
   * Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`.
   * 
   * @type {object}
   */
  const classes = computed({
    get() {
      let classes = mergedClasses.value

      classes = mergeComponentClasses(classes, {
        [mainClass.value]: {
          [classes.sortable]: sort.value
        },
      })

      return classes
    },
    set(val) {
      form$.value.$set(schema.value, 'classes', val)
    }
  })

  return {
    class: class_,
    classes,
    mainClass,
    addClasses,
    defaultClasses,
  }
}