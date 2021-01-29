<template>
  <component
    :is="theme.elements.TextElement"
    :name="name"
    :schema="schema"
  />
</template>

<script>
  import { computed, inject } from 'composition-api'

  export default {
    name: 'TextField',
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      addons: {
        
      }
    },
    setup(props, context) {
      const theme = inject('theme')

      const schema = computed(() => {
        return {
          type: 'text',
        }
      })

      return {
        theme,
        schema,
      } 
    },
  }
</script>