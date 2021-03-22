<template>
  <div :class="classes.container">
    {{ value.label }}
  </div>
</template>

<script>
  export default {
    name: 'MultiselectSlotSingleLabel',
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-single-label'
        }
      }
    }
  }
</script>