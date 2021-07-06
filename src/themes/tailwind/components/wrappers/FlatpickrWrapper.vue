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
    name: 'FlatpickrWrapper',
    data() {
      return {
        defaultClasses: {
          flatpickr: '',
          calendarContainer: 'flatpickr-calendar-container'
        }
      }
    }
  }
</script>

<style lang="scss">
</style>