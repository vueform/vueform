<template>
  <input
    type="hidden"
    v-model="model"
    :name="name"
    :id="id"
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