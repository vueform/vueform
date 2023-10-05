<template>
  <div data-mock tabindex="0"></div>
</template>

<script>
  import { ref, watch } from 'vue'

  export default {
    name: 'TrixEditor',
    emits: ['trix-change', 'trix-focus', 'trix-focus-hook', 'trix-blur-hook'],
    setup(props, context) {
      const value = ref(null)

      const contentEditable = ref(true)

      const option = ref(null)

      const listeners = ref({})

      const setOption = (v) => {
        option.value = v
      }

      const editor = ref({
        loadHTML: (val) => {
          if (val === null || value === undefined) {
            val = ''
          }

          value.value = /<\/?[a-z][\s\S]*>/i.test(val) || !val.length ? val : `<div>${val}</div>`
        }
      })
      
      // const addEventListener = () => {}
      
      const addEventListener = (e) => {
        context.emit(`trix-${e}-hook`)

        if (!listeners.value[evt]) {
          listeners.value[evt] = []
        }

        listeners.value[evt].push(cb)
      }

      const removeEventListener = (evt, cb) => {
        delete listeners.value[evt]
        if (!listeners.value[evt]) {
          listeners.value[evt] = []
        }

        listeners.value[evt].push(cb)
      }

      const focus = () => {
        context.emit('trix-focus')
      }      
      
      watch(value, (newValue, oldValue) => {
        if (newValue == oldValue) {
          return
        }

        listeners.value['trix-change'].forEach(e=>e(newValue))
      }, { flush: 'sync' })

      return {
        value,
        editor,
        contentEditable,
        option,
        setOption,
        addEventListener,
        removeEventListener,
        focus,
      }
    },
  }
</script>