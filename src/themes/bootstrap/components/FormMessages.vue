<template>
  <div
    :class="classes.container"
  >
    <template
      v-for="(message, key, index) in messages"
    >
      <div
        :class="classes.message"
        :key="index"
      >
        {{ message }}
      </div>
    </template>
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