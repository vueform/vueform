<template>
  <a
    :class="classes.button"
    :href="href"
    :target="target"
  >{{ label }}</a>
</template>

<script>
  import FormButtonAnchor from './../../../components/FormButtonAnchor'

  export default {
    mixins: [FormButtonAnchor],
    data() {
      return {
        defaultClasses: {
          button: 'btn'
        }
      }
    }
  }
</script>