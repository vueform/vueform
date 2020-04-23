<template>
  <li
    v-if="visible"
    :class="theme.classes.formTabContainer"
  >
    <a
      href="#"
      :class="classes"
      @click.prevent="select"
    >
      {{ label }}
    </a>
  </li>
</template>


<script>
  import FormTab from './../../default/components/FormTab'

  export default {
    mixins: [FormTab],
  }
</script>