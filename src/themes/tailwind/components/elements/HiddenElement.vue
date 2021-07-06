<template>
  <input
    v-if="!meta"
    v-model="value"
    type="hidden"
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

<style lang="scss">
</style>