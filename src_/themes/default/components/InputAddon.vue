<template>
  <span
    :class="classes"
    v-html="addon"
  ></span>
</template>

<script>
  import InputAddon from './../../../components/InputAddon'

  export default {
    mixins: [InputAddon],
    computed: {
      classes() {
        return this.type == 'before'
          ? this.theme.classes.addonBefore
          : this.theme.classes.addonAfter
      }
    }
  }
</script>