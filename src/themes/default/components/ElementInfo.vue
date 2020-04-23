<template>
  <a href=""
    :class="theme.classes.info"
    @click.prevent
  >
    <i></i>
    <span :class="theme.classes.tooltip" v-html="el$.info"></span>
  </a>
</template>

<script>
  import ElementInfo from './../../../components/ElementInfo'

  export default {
    mixins: [ElementInfo],
  }
</script>