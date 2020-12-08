<template>
  <div class="multiselect-no-options" v-html="el$.noOptionsText"></div>
</template>

<script>
  import MultiselectSlotNoOptions from './../../../../../components/elements/slots/MultiselectSlotNoOptions'

  export default {
    name: 'MultiselectSlotNoOptions',
    mixins: [MultiselectSlotNoOptions],
}
</script>