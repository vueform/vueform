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
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .multiselect-no-options {
    display: flex;
    padding: $input-padding-y $input-padding-x;
    color: $text-muted;
    min-height: $input-height;
    align-items: center;
  }
</style>