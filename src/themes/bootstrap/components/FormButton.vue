<template>
  <button
    v-if="isLabelComponent"
    :class="classes.button"
    :disabled="isDisabled"
    @click.prevent="handleClick"
  >
    <component :is="label" :el$="el$" />
  </button>
  <button
    v-else
    v-html="label"
    :class="classes.button"
    :disabled="isDisabled"
    @click.prevent="handleClick"
  >
  </button>
</template>

<script>
  export default {
    name: 'FormButton',
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