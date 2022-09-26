<template>
  <input
    type="text"
    :class="classes.datepicker"
    :id="id"
    :placeholder="placeholder"
    v-bind="attrs"
    ref="input"
 />
</template>

<script>
  export default {
    name: 'DatepickerWrapper',
    data() {
      return {
        merge: true,
        defaultClasses: {
          datepicker: '',
          calendarContainer: ''
        }
      }
    }
  }
</script>

<style lang="scss">
</style>