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
  import FormButton from './../../../components/FormButton'

  export default {
    mixins: [FormButton],
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