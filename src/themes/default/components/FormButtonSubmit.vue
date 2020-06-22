<template>
  <button
    :class="classes.button"
    :disabled="disabled"
    @click.prevent="handleClick"
  >{{ label }}</button>
</template>

<script>
  import FormButtonSubmit from './../../../components/FormButtonSubmit'

  export default {
    mixins: [FormButtonSubmit],
    data() {
      return {
        defaultClasses: {
          button: 'btn',
          loading: 'btn-loading',
          disabled: 'btn-disabled',
        }
      }
    }
  }
</script>