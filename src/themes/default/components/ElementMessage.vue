<template>
  <small
    :class="classes.container"
  >
    {{ message }}
  </small>
</template>

<script>
  import ElementMessage from './../../../components/ElementMessage'

  export default {
    mixins: [ElementMessage],
    data() {
      return {
        defaultClasses: {
          container: 'text-success'
        }
      }
    }
  }
</script>