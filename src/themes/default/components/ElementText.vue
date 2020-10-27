<template>
  <span :class="classes[type]" v-html="content"></span>
</template>

<script>
  import ElementText from './../../../components/ElementText'

  export default {
    name: 'ElementText',
    mixins: [ElementText],
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