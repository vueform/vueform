<template>
  <label
    :class="[this.type == 'before' ? classes.addonBefore : classes.addonAfter]"
    v-html-if="{addon: !isAddonComponent}"
  >
    <component v-if="isAddonComponent" :is="addon" :el$="el$" />
  </label>
</template>

<script>
  import InputAddon from './../../../components/InputAddon'

  export default {
    name: 'InputAddon',
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