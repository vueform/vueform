<template>
  <label
    v-if="isAddonComponent"
    :class="classes.container"
  >
    <component :is="addon" :el$="el$" />
  </label>
  <label
    v-else
    v-html="addon"
    :class="classes.container"
  >
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
          container: 'input-addon',
          addonBefore: 'input-group-addon',
          addonAfter: 'input-group-addon',
        }
      }
    }
  }
</script>