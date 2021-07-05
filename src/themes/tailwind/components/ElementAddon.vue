<template>
  <div v-if="isAddonComponent" :class="classes.container">
    <component :is="addon" :el$="el$" />
  </div>

  <div v-else v-html="addon" :class="classes.container">
  </div>
</template>

<script>
  export default {
    name: 'ElementAddon',
    data() {
      return {
        defaultClasses: {
          container: '',
          container_before: '',
          container_after: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>