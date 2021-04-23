<template>
  <div :class="classes.container" v-html="el$.fieldOptions.noOptionsText"></div>
</template>

<script>
  export default {
    name: 'MultiselectSlotNoOptions',
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-no-options'
        }
      }
    }
  }
</script>

<style lang="scss">

  .multiselect-no-options {
    display: flex;
    padding: $input-padding-y $input-padding-x;
    color: $text-muted;
    min-height: $input-height;
    align-items: center;
  }
</style>