<template>
  <button
    :class="classes.button"
    :disabled="disabled"
    @click="handleClick"
  >{{ label }}</button>  
</template>

<script>
  import FormButton from './../../../components/FormButton'

  export default {
    mixins: [FormButton],
    data() {
      return {
        defaultClasses: {
          button: 'btn'
        }
      }
    }
  }
</script>