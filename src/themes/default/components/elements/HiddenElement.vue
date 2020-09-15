<template>
  <input
    type="hidden"
    v-model="model"
    :name="name"
    :id="id"
    @change="handleChange"
    ref="input"
  />
</template>

<script>
  import HiddenElement from './../../../../components/elements/HiddenElement'

  export default {
    mixins: [HiddenElement],
    data() {
      return {
        defaultClasses: {}
      }
    },
  }
</script>