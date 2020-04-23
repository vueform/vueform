<template>
  <span
  >
    {{ __('elements.multiselect.noOptions') }}
  </span>
</template>

<script>
  import MultiselectSlotNoOptions from './../../../../../components/elements/slots/MultiselectSlotNoOptions'

  export default {
    mixins: [MultiselectSlotNoOptions],
}
</script>