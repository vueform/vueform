<template>
  <span>
    {{ option.label }}
  </span>
</template>

<script>
  import MultiselectSlotOption from './../../../../../components/elements/slots/MultiselectSlotOption'

  export default {
    name: 'MultiselectSlotOption',
    mixins: [MultiselectSlotOption],
}
</script>