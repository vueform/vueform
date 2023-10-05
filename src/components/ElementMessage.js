import { computed } from 'vue'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementMessage',
  setup(props, context)
  {
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * The first message of the element.
     *
     * @type {string}
     */
    const message = computed(() => {
      return el$.value.messageBag ? el$.value.messageBag.message : /* istanbul ignore next: messageBag itself will always be defined */ null
    })

    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      message,
    }
  },
}