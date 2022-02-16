<template>
  <!-- If content is HTML -->
  <div v-if="content" :class="classes.container" v-html="content"></div>

  <!-- If content is a slot -->
  <div v-else-if="isSlot" :class="classes.container"><slot/></div>
</template>

<script>
  export default {
    name: 'ElementText',
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