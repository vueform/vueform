<template>
  <div :class="classes.container" v-html="el$.multipleLabel(values)"></div>
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