import useDisabled from './useDisabled'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const disabled = useDisabled(props, context, dependencies)

  return {
    ...disabled,
  }
}