<template>
  <a
    :class="classes.button"
    :href="href"
    :target="target"
    @click="handleClick"
    v-html-if="{label: !isLabelComponent}"
  >
    <component v-if="isLabelComponent" :is="label" :button="button" />
  </a>
</template>

<script>
  import FormButtonAnchor from './../../../components/FormButtonAnchor'

  export default {
    name: 'FormButtonAnchor',
    mixins: [FormButtonAnchor],
    data() {
      return {
        defaultClasses: {
          button: 'btn',
          loading: 'btn-loading',
          disabled: 'btn-disabled',
          left: 'align-left',
          center: 'align-center',
          right: 'align-right',
        }
      }
    }
  }
</script>