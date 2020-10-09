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
    name: 'ElementMessage',
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