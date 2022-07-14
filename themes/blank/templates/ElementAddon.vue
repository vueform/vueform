<template>
  <!-- If addon is a component -->
  <div v-if="addon && isAddonComponent" :class="classes.container">
    <div :class="classes.wrapper">
      <component :is="addon"/>
    </div>
  </div>

  <!-- If addon is HTML -->
  <div v-else-if="addon" :class="classes.container">
    <div :class="classes.wrapper" v-html="addon"></div>
  </div>

  <!-- If addon is a slot -->
  <div v-else-if="isSlot" :class="classes.container">
    <div :class="classes.wrapper"><slot/></div>
  </div>
</template>

<script>
  export default {
    name: 'ElementAddon',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>