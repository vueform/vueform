import { reactive, ref, computed } from 'composition-api'

export default function useLaraform(props, context) {
  const formElements$ = ref(null)
  const element$ = ref([])

  /**
   * Object of tab$ components.
   * 
   * @type {object}
   * @default {}
   */
  const tabs$ = ref({})
  const wizard$ = ref({})

  return {
    formElements$,
    element$,
    tabs$,
    wizard$,
  }
}