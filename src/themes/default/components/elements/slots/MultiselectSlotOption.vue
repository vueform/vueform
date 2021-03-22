<template>
  <span :class="classes.container">
    {{ option.label }}
  </span>
</template>

<script>
  export default {
    name: 'MultiselectSlotOption',
    data() {
      return {
        defaultClasses: {
          container: 'option'
        }
      }
    }
  }
</script>