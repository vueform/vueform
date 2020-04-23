<template>
  <li
    v-if="visible"
    :class="classes"
  >
    <a
      href="#"
      @click.prevent="select"
    >
      {{ label }}
    </a>
  </li>
</template>

<script>
  import FormTab from './../../../components/FormTab'

  export default {
    mixins: [FormTab],
    computed: {
      classes() {
        return [
          this.theme.classes.formTab,
          this.active ? this.theme.classes.formTabActive : this.theme.classes.formTabInactive,
          this.invalid ? this.theme.classes.formTabInvalid : '',
        ]
          },
    }
  }
</script>