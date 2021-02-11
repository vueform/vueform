<template>
  <input
    type="hidden"
    v-model="model"
    :name="name"
    :id="fieldId"
    ref="input"
  />
</template>

<script>
  export default {
    name: 'HiddenElement',
    data() {
      return {
        defaultClasses: {}
      }
    },
  }
</script>