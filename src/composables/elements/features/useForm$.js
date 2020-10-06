import { inject } from 'composition-api'

export default function useForm$(props, context, dependencies)
{
  // =============== INJECT ===============

  let form$ = inject('form$')

  return {
    form$,
  }
}