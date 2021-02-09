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

  export default {
    name: 'FormErrors',
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