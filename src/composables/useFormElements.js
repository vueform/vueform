import { reactive, onBeforeUpdate } from 'composition-api'

export default function useFormElements() {
  const elements$ = reactive({})
  
  onBeforeUpdate(() => {
    elements$.value = {}
  })

  return {
    elements$,
  }
}