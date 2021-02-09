<template>
  <i v-if="info" :class="classes.info" :title="info">[i]</i>
</template>

<script>
  export default {
    name: 'ElementInfo',
    data() {
      return {
        defaultClasses: {
          info: 'element-info',
        }
      }
    }
  }
</script>