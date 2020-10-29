<template>
  <span
  >
    {{ __('laraform.elements.multiselect.noResult') }}
  </span>
</template>

<script>
  import MultiselectSlotNoResult from './../../../../../components/elements/slots/MultiselectSlotNoResult'

  export default {
    name: 'MultiselectSlotNoResult',
    mixins: [MultiselectSlotNoResult],
}
</script>