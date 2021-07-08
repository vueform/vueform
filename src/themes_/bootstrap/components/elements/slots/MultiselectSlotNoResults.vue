<template>
  <div :class="classes.container" v-html="el$.fieldOptions.noResultsText"></div>
</template>

<script>
  export default {
    name: 'MultiselectSlotNoResults',
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-no-results'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .multiselect-no-results {
    display: flex;
    padding: $input-padding-y $input-padding-x;
    color: $text-muted;
    min-height: $input-height;
    align-items: center;
  }
</style>