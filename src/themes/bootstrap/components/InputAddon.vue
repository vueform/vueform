<template>
  <label
    :class="[this.type == 'before' ? classes.addonBefore : classes.addonAfter]"
    v-html="addon"
  >
  </label>
</template>

<script>
  import InputAddon from './../../../components/InputAddon'

  export default {
    mixins: [InputAddon],
    data() {
      return {
        defaultClasses: {
          addonBefore: 'input-group-addon',
          addonAfter: 'input-group-addon',
        }
      }
    }
  }
</script>