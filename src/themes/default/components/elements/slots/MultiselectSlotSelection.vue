<template>
  <span
    class="multiselect__single"
    v-if="values.length"
  >
    {{ __('laraform.elements.multiselect.selection', {options: values.length}) }}
  </span>
</template>

<script>
  import MultiselectSlotSelection from './../../../../../components/elements/slots/MultiselectSlotSelection'

  export default {
    name: 'MultiselectSlotSelection',
    mixins: [MultiselectSlotSelection],
}
</script>