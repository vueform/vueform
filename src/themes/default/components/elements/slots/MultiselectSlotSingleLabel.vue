<template>
  <span>
    {{ option.label }} yoko ono
  </span>
</template>

<script>
  import MultiselectSlotSingleLabel from './../../../../../components/elements/slots/MultiselectSlotSingleLabel'

  export default {
    name: 'MultiselectSlotSingleLabel',
    mixins: [MultiselectSlotSingleLabel],
}
</script>