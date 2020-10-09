<template>
  <button
    :class="classes.button"
    :disabled="disabled"
    @click.prevent="handleClick"
    v-html-if="{label: !isLabelComponent}"
  >
    <component v-if="isLabelComponent" :is="label" :button="button" />
  </button>
</template>

<script>
  import FormButtonSubmit from './../../../components/FormButtonSubmit'

  export default {
    name: 'FormButtonSubmit',
    mixins: [FormButtonSubmit],
    data() {
      return {
        defaultClasses: {
          button: 'btn',
          loading: 'btn-loading',
          disabled: 'btn-disabled',
        }
      }
    }
  }
</script>