import { computed, onMounted, ref } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'DragAndDrop',
  emits: ['click'],
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup(props, context)
  {
    // ============== DEPENDENCIES ==============

    const {
      el$,
      form$,
      classes: baseClasses,
      components,
      mainClass,
      theme
    } = useElementComponent(props, context)

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

    // ============== COMPUTED ==============

    const classes = computed(() => {
      let classes = _.clone(baseClasses.value)

      return mergeComponentClasses(classes, {
        [mainClass.value]: {
          [classes.active]: dragging.value,
        }
      })
    })

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
        context.emit('drop', e)
        dragging.value = false
      })

      area.value.addEventListener('dragover', (e) => {
        if (dragging.value !== true) {
          dragging.value = true
        }
      })

      area.value.addEventListener('dragleave', (e) => {
        dragging.value = false
      })

      area.value.addEventListener('dragend', (e) => {
        dragging.value = false
      })
    })

    return {
      el$,
      form$,
      classes,
      mainClass,
      components,
      theme,
      dragging,
      area,
      handleClick,
    }
  },
}