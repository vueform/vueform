import useData from './useData'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES =============

  const input = dependencies.input

  const {
    submit, formatData, formatLoad, data, filtered, changed,
    load, update, clear, reset, updated, prepare
  } = useData(props, context, dependencies, {
    setValue: (val) => {
      input.value.update(val)
    }
  })

  return {
    // Computed
    data,
    filtered,
    formatData,
    formatLoad,
    submit,
    changed,

    // Mehtods
    load,
    update,
    updated,
    clear,
    reset,
    prepare,
  }
}