<template>
  <input
    type="text"
    :class="classes.flatpickr"
    :id="id"
    :placeholder="placeholder"
    ref="input"
  />
</template>

<script>
  export default {
    name: 'Flatpickr',
    data() {
      return {
        defaultClasses: {
          flatpickr: 'laraform-flatpickr',
          calendarContainer: 'lf-flatpickr'
        }
      }
    }
  }
</script>