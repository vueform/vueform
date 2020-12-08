<template>
  <div class="multiselect-single-label">
    {{ value.label }}
  </div>
</template>

<script>
  import MultiselectSlotSingleLabel from './../../../../../components/elements/slots/MultiselectSlotSingleLabel'

  export default {
    name: 'MultiselectSlotSingleLabel',
    mixins: [MultiselectSlotSingleLabel],
}
</script>