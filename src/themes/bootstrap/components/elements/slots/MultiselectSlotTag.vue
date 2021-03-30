<template>
  <span :class="classes.container">
    <span v-text="option.label"></span>
    <i
      v-if="!disabled"
      @click.prevent
      @mousedown.prevent="handleTagRemove(option)"
    ></i>
  </span>
</template>

<script>
  export default {
    name: 'MultiselectSlotTag',
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-tag'
        }
      }
    }
  }
</script>