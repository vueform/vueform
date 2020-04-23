<template>
  <form>
    <FormElements
      :schema="schema"
      @updateSchema="updateSchema"
    />
  </form>
</template>

<script>
  import { reactive, computed, watchEffect, watch, ref } from '@vue/composition-api'
  import FormElements from './FormElements'

  export default {
    name: 'Laraform',
    components: {
      FormElements,
    },
    provide() {
      return {
        form$: {
          schema: this.schema,
        }
      }
    },
    data() {
      return {
        schema: {
          text1: {
            type: 'text',
            label: 'Text1'
          },
          text2: {
            type: 'text',
            label: 'Text2'
          },
          text3: {
            type: 'text',
            label: 'Text3'
          },
          text4: {
            type: 'text',
            label: 'Text4'
          },
        }
      }
    },
    methods: {
      updateSchema(schema) {
        this.$set(this, 'schema', schema)
      }
    }
  }
</script>