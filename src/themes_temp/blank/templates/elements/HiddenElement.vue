<template>
  <span v-if="!meta">
    <input
      v-model="value"
      type="hidden"
      :name="name"
      :id="fieldId"
      ref="input"
    />
 </span>
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