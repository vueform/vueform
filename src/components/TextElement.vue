<template>
  <div class="element">
    <label>{{ label }}</label> <input /> <button @click.prevent="remove">Remove</button>
  </div>
</template>

<script>
  import BaseElement from './BaseElement'

  export default {
    name: 'TextElement',
    mixins: [BaseElement],
  }
</script>