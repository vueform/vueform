<template>
  <div :class="classes.container" v-html="el$.noResultsText"></div>
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