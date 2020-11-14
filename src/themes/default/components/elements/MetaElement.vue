<template>
  <div v-show="false"><!-- Meta element --></div>
</template>

<script>
  import MetaElement from './../../../../components/elements/MetaElement'

  export default {
    name: 'MetaElement',
    mixins: [MetaElement],
  }
</script>