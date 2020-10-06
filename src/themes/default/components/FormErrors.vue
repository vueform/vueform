<template>
  <div
    :class="classes.container"
  >
    <div  
      v-for="(error, key, index) in errors"
      :key="index"
      :class="classes.error"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>
  import FormErrors from './../../../components/FormErrors'

  export default {
    mixins: [FormErrors],
    data() {
      return {
        defaultClasses: {
          container: 'alert alert-danger',
          error: '',
        }
      }
    }
  }
</script>