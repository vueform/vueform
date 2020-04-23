<template>
  <div
    :class="theme.classes.formErrors"
  >
    <template
      v-for="(error, key, index) in errors"
    >
      <div
        :class="theme.classes.formError"
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
  }
</script>