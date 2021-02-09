<template>
  <span v-if="content" :class="classes[type]" v-html="content"></span>
</template>

<script>
  export default {
    name: 'ElementText',
    data() {
      return {
        defaultClasses: {
          before: 'lf-before',
          between: 'lf-between',
          after: 'lf-after',
        }
      }
    }
  }
</script>