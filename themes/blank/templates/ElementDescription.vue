<template>
  <!-- If description is HTML -->
  <div v-if="description" :class="classes.container" v-html="description"></div>

  <!-- If description is a slot -->
  <div v-else-if="isSlot" :class="classes.container"><slot/></div>
</template>

<script>
  export default {
    name: 'ElementDescription',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          container_sm: '',
          container_md: '',
          container_lg: '',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>