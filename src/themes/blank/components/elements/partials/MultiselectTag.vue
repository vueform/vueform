<template>
  <span :class="classes.container">
    <slot :option="option" :disabled="disabled" :handleTagRemove="handleTagRemove" :classes="classes">
      <span v-text="option.label"></span>
      <span
        v-if="!disabled"
        :class="classes.remove"
        @mousedown.prevent="handleTagRemove(option, $event)"
      >
        <span :class="classes.removeIcon"></span>
      </span>
    </slot>
  </span>
</template>

<script>
  export default {
    name: 'MultiselectTag',
    data() {
      return {
        defaultClasses: {
          container: '',
          container_disabled: '',
          remove: '',
          removeIcon: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>