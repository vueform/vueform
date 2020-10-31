import useChildrenObject from './useChildrenObject'

export default function useChildrenGroup (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const children = useChildrenObject(props, context, dependencies)

  return {
    ...children,
  }
}