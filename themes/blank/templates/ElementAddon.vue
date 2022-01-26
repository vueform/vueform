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
          container_before: '',
          container_after: '',
          container_sm: '',
          container_md: '',
          container_lg: '',
          container_before_sm: '',
          container_before_md: '',
          container_before_lg: '',
          container_after_sm: '',
          container_after_md: '',
          container_after_lg: '',
          wrapper: '',
          $container: (classes, { type, Size }) => ([
            classes.container,
            classes[`container_${Size}`],
            classes[`container_${type}`],
            classes[`container_${type}_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>