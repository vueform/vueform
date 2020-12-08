<template>
  <span class="multiselect-tag">
    <span v-text="option.label"></span>
    <i
      v-if="!disabled"
      @click.prevent
      @mousedown.prevent="remove(option)"
    ></i>
  </span>
</template>

<script>
  import MultiselectSlotTag from './../../../../../components/elements/slots/MultiselectSlotTag'

  export default {
    name: 'MultiselectSlotTag',
    mixins: [MultiselectSlotTag],
}
</script>