<template>
  <div
    :class="outerClass"
  >
    <span :class="theme.classes.addonInner" v-html="addon"></span>
  </div>
</template>

<script>
  import InputAddon from './../../../components/InputAddon'

  export default {
    mixins: [InputAddon],
    computed: {
      outerClass() {
        return this.type == 'before'
          ? this.theme.classes.addonBefore
          : this.theme.classes.addonAfter
      }
    }
  }
</script>