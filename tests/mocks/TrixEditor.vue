<template>
  <div></div>
</template>

<script>
  import { ref, watch } from 'vue'

  export default {
    name: 'TrixEditor',
    emits: ['trix-change'],
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

      const addEventListener = (evt, cb) => {
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
      }
    },
  }
</script>