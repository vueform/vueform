<template>
  <div :class="classes.container" v-html="label(values)"></div>
</template>

<script>
  export default {
    name: 'MultiselectSlotMultipleLabel',
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-multiple-label'
        }
      }
    }
  }
</script>

<style lang="scss">
  
  .multiselect-multiple-label {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: calc(#{$input-padding-x} + 5px);
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
  }
</style>