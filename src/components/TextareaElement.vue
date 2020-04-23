<template>
  <div class="element">
    <label>{{ label }}</label> <textarea></textarea>
  </div>
</template>

<script>
  import BaseElement from './BaseElement'

  export default {
    name: 'TextElement',
    mixins: [BaseElement],
  }
</script>