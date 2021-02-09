<template>
  <span class="multiselect-tag">
    <span v-text="option.label"></span>
    <i
      v-if="!disabled"
      @click.prevent
      @mousedown.prevent="remove(option)"
    ></i>
  </span>
</template>

<script>
  export default {
    name: 'MultiselectSlotTag',
  }
</script>