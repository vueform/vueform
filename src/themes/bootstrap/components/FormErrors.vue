<template>
  <div
    :class="classes.container"
  >
    <div  
      v-for="(error, key, index) in errors"
      :class="classes.error"
      :key="index"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>
  import FormErrors from './../../../components/FormErrors'

  export default {
    name: 'FormErrors',
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