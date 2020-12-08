<template>
  <div class="multiselect-no-results" v-html="el$.noResultsText"></div>
</template>

<script>
  import MultiselectSlotNoResults from './../../../../../components/elements/slots/MultiselectSlotNoResults'

  export default {
    name: 'MultiselectSlotNoResults',
    mixins: [MultiselectSlotNoResults],
}
</script>