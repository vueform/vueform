import each from 'lodash/each'
import { onMounted, ref, toRefs, } from 'vue'
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
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
    } = useElementComponent(props, context)

    // ================ DATA ================

    /**
     * Whether the user is currently dragging a file over the drag and drop area.
     * 
     * @type {boolean}
     * @default falyse
     */
    const dragging = ref(false)

    /**
     * The DOM element of the drag and drop area.
     * 
     * @type {HTMLElement}
     * @default null
     */
    const area = ref(null)

    // =============== METHODS ==============

    /**
     * Handles `click` event.
     * 
     * @returns {void}
     * @private
     */
    const handleClick = () => {
      context.emit('click')
    }

    // ================ HOOKS ===============

    onMounted(() => {
      // cancelling all default events
      each(['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'], (event) => {
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
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
      dragging,
      area,
      handleClick,
    }
  },
}