<template>
  <div v-if="addon && isAddonComponent" :class="classes.container">
    <div :class="classes.wrapper">
      <component :is="addon" :el$="el$" />
    </div>
  </div>

  <div v-else-if="addon" :class="classes.container">
    <div :class="classes.wrapper" v-html="addon"></div>
  </div>

  <div v-else-if="isSlot" :class="classes.container">
    <div :class="classes.wrapper"><slot><component :is="slotComponent" /></slot></div>
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