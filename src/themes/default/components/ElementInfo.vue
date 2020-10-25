<template>
  <i :class="classes.info" :title="info">[i]</i>
</template>

<script>
  import ElementInfo from './../../../components/ElementInfo'

  export default {
    name: 'ElementInfo',
    mixins: [ElementInfo],
    data() {
      return {
        defaultClasses: {
          info: 'element-info',
        }
      }
    }
  }
</script>