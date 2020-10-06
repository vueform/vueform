<template>
  <div
    :class="classes.container"
  >
    <div
      v-for="(message, key, index) in messages"
      :key="index"
      :class="classes.message">
      {{ message }}
    </div>
  </div>
</template>

<script>
  import FormMessages from './../../../components/FormMessages'

  export default {
    mixins: [FormMessages],
    data() {
      return {
        defaultClasses: {
          container: 'alert alert-success',
          message: '',
        }
      }
    }
  }
</script>