import { inject, reactive } from 'composition-api'

export default function useForm$(props, context, dependencies)
{
  // =============== INJECT ===============

  let form$ = reactive(inject('form$'))

  return {
    form$,
  }
}