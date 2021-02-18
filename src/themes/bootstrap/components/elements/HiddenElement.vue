<template>
  <input
    v-if="!meta"
    v-model="model"
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