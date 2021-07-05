import { onMounted, ref, computed, toRefs, } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'DragAndDrop',
  emits: ['click', 'drop'],
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup(props, context)
  {
    const { disabled } = toRefs(props)

    // ============== DEPENDENCIES ==============

    const {
      el$,
      form$,
      classes,
      components,
      mainClass,
      theme,
      defaultClasses,
    } = useElementComponent(props, context, {}, {
      addClasses: [
        ['container', 'containerActive', computed(() => dragging.value)],
        ['container', 'containerInactive', computed(() => !dragging.value)],
        ['container', 'containerEnabled', computed(() => !disabled.value)],
        ['container', 'containerDisabled', computed(() => disabled.value)],
      ],
    })

    // ================ DATA ================

    /**
     * 
     * 
     * @private
     */
    const dragging = ref(false)

    /**
     * 
     * 
     * @private
     */
    const area = ref(null)

    // =============== METHODS ==============

    /**
     * 
     * 
     * @private
     */
    const handleClick = () => {
      context.emit('click')
    }

    // ================ HOOKS ===============

    onMounted(() => {
      // cancelling all default events
      _.each(['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'], (event) => {
        area.value.addEventListener(event, (e) => {
          e.preventDefault()
          e.stopPropagation()
        })
      })

      // listening for the actual drop event
      area.value.addEventListener('drop', (e) => {
        if (disabled.value) {
          return
        }

        context.emit('drop', e)
        dragging.value = false
      })

      area.value.addEventListener('dragover', (e) => {
        if (disabled.value) {
          return
        }
        
        if (dragging.value !== true) {
          dragging.value = true
        }
      })

      area.value.addEventListener('dragleave', (e) => {
        if (disabled.value) {
          return
        }

        dragging.value = false
      })

      area.value.addEventListener('dragend', (e) => {
        if (disabled.value) {
          return
        }

        dragging.value = false
      })
    })

    return {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
      dragging,
      area,
      handleClick,
    }
  },
}