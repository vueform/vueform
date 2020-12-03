<template>
  <div></div>
</template>

<script>
  import { ref, watch } from 'composition-api'

  export default {
    name: 'TrixEditor',
    setup(props, context) {
      const value = ref(null)

      const editor = ref({
        loadHTML: (val) => {
          value.value = /<\/?[a-z][\s\S]*>/i.test(val) ? val : `<div>${val}</div>`
        }
      })

      watch(value, (newValue, oldValue) => {
        if (newValue == oldValue) {
          return
        }

        context.emit('trix-change')
      }, { flush: 'sync' })

      return {
        value,
        editor,
      }
    },
  }
</script>