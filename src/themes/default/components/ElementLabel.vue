<template>
  <label
    :for="name"
    v-html-if="{label: !isComponent}"
  >
    <slot>
      <component v-if="isComponent" :is="label" />
    </slot>
  </label>
</template>

<script>
  import ElementLabel from './../../../components/ElementLabel'

  export default {
    mixins: [ElementLabel],
  }
</script>