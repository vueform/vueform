import { onMounted } from 'composition-api'
import useAutogrow from './useAutogrow'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ================ BASE ================

  const { autogrow, rows, autosize } = useAutogrow(props, context, dependencies)

  // =============== HOOKS ================

  onMounted(() => {
    form$.value.on('language', () => {
      autosize()
    })
  })

  return {
    autogrow,
    rows,

    autosize,
  }
}