import { reactive, ref, computed } from 'composition-api'

export default function useLaraform() {
  const formElements$ = ref(null)
  const inlineElements$ = reactive({})
  const elements$ = computed({
    get() {
      return formElements$.value
        ? formElements$.value.elements$
        : inlineElements$
    },
    set(value) {
      inlineElements$.value = value
    }
  })

  return {
    formElements$,
    elements$,
  }
}