<template>
  <div v-if="isAddonComponent" :class="classes.container">
    <div :class="classes.wrapper">
      <component :is="addon" :el$="el$" />
    </div>
  </div>

  <div v-else :class="classes.container">
    <div :class="classes.wrapper" v-html="addon"></div>
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
          wrapper: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>