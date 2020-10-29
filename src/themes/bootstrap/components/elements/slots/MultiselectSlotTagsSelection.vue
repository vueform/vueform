<template>
  <span
    class="multiselect__tags-wrap"
    v-show="values.length"
  >
    <!-- <template v-for="(option, index) in values" @mousedown.prevent :key="index">
      <slot name="tag" :option="option" :search="search" :remove="remove"></slot>
    </template> -->
  </span>
</template>

<script>
  import MultiselectSlotTagsSelection from './../../../../../components/elements/slots/MultiselectSlotTagsSelection'

  export default {
    name: 'MultiselectSlotTagsSelection',
    mixins: [MultiselectSlotTagsSelection],
}
</script>