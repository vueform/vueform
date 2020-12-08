<template>
  <div class="multiselect-multiple-label" v-html="el$.multipleLabel"></div>
</template>

<script>
  import MultiselectSlotMultipleLabel from './../../../../../components/elements/slots/MultiselectSlotMultipleLabel'

  export default {
    name: 'MultiselectSlotMultipleLabel',
    mixins: [MultiselectSlotMultipleLabel],
}
</script>