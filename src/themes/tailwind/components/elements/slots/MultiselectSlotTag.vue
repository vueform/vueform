<template>
  <span :class="classes.container">
    <span v-text="option.label"></span>
    <span
      v-if="!disabled"
      :class="classes.remove"
      @mousedown.prevent="handleTagRemove(option, $event)"
    >
      <span :class="classes.removeIcon"></span>
    </span>
  </span>
</template>

<script>
  export default {
    name: 'MultiselectSlotTag',
    data() {
      return {
        defaultClasses: {
          container: '',
          disabled: '',
          remove: '',
          removeIcon: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>