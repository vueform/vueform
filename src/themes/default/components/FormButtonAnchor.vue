<template>
  <a
    v-if="isLabelComponent"
    :class="classes.button"
    :href="href"
    :target="target"
    @click="handleClick"
  >
    <component :is="label" :el$="el$" />
  </a>
  <a
    v-else
    v-html="label"
    :class="classes.button"
    :href="href"
    :target="target"
    @click="handleClick"
  >
  </a>
</template>

<script>
  export default {
    name: 'FormButtonAnchor',
    data() {
      return {
        defaultClasses: {
          button: 'btn',
          loading: 'btn-loading',
          disabled: 'btn-disabled',
          left: 'align-left',
          center: 'align-center',
          right: 'align-right',
        }
      }
    }
  }
</script>