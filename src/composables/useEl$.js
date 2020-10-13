import { inject } from 'composition-api'

export default function useEl$(props, context, dependencies)
{
  // =============== INJECT ===============

  let el$ = inject('el$')

  return {
    el$,
  }
}