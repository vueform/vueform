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
        }
      }
    }
  }
</script>

<style lang="scss">
</style>