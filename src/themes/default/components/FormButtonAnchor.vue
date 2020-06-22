<template>
  <a
    :class="classes.button"
    :href="href"
    :target="target"
    v-html-if="{label: !isLabelComponent}"
  >
    <component v-if="isLabelComponent" :is="label" :button="button" />
  </a>
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