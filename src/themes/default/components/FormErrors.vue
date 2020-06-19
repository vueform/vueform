<template>
  <div
    :class="classes.container"
  >
    <template
      v-for="(error, key, index) in errors"
    >
      <div
        :class="classes.error"
        :key="index"
      >
        {{ error }}
      </div>
    </template>
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