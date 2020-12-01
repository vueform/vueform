import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES =============

  const update = dependencies.update
  
  // ============== COMPUTED ==============

  const drop = computedOption('drop', schema, false)

  const canDrop = computed(() => {
    let div = document.createElement('div')

    return ( ( 'draggable' in div )
            || ( 'ondragstart' in div && 'ondrop' in div ) )
            && 'FormData' in window
            && 'FileReader' in window
  })

  // =============== METHODS ==============

  const handleDrop = (e) => {
    let file = e.dataTransfer.files[0]

    update(file || null)
  }

  return {
    drop,
    canDrop,
    handleDrop,
  }
}

export default base