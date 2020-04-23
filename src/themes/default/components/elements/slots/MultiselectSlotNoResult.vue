<template>
  <span
  >
    {{ __('elements.multiselect.noResult') }}
  </span>
</template>

<script>
  import MultiselectSlotNoResult from './../../../../../components/elements/slots/MultiselectSlotNoResult'

  export default {
    mixins: [MultiselectSlotNoResult],
}
</script>