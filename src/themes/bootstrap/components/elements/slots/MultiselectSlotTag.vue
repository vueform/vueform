<template>
  <span class="multiselect__tag">
    <span v-text="option.label"></span>
    <i aria-hidden="true" tabindex="1" @keypress.enter.prevent="remove(option)"  @mousedown.prevent="remove(option)" class="multiselect__tag-icon"></i>
  </span>
</template>

<script>
  import MultiselectSlotTag from './../../../../../components/elements/slots/MultiselectSlotTag'

  export default {
    mixins: [MultiselectSlotTag],
}
</script>