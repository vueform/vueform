<template>
  <input
    type="text"
    :class="classes.flatpickr"
    ref="input"
  />
</template>

<script>
  import Flatpickr from './../../../../components/wrappers/Flatpickr'

  export default {
    mixins: [Flatpickr],
    data() {
      return {
        defaultClasses: {
          flatpickr: 'laraform-flatpickr'
        }
      }
    }
  }
</script>