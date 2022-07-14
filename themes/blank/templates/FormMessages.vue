<template>
  <div :class="classes.container">
    <div
      v-for="(message, key, index) in messages"
      :class="classes.message"
      :key="index"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormMessages',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          message: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>