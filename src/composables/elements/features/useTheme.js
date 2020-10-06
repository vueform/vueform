import { inject } from 'composition-api'

export default function useTheme(props, context, dependencies)
{
  // =============== INJECT ===============

  let theme = inject('theme')

  return {
    theme,
  }
}