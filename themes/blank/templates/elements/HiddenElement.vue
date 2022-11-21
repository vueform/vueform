<template>
  <span v-if="!meta" ref="container">
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
        merge: true,
        defaultClasses: {}
      }
    },
  }
</script>

<style lang="scss">
</style>