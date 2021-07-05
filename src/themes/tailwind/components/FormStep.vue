<template>
  <li :class="classes.container" v-show="visible">
    <a
      v-if="isLabelComponent"
      href=""
      :class="classes.wrapper"
      @click.prevent="select"
    >
      <component :is="stepLabel" :form$="form$" />
    </a>
    <a
      v-else
      v-html="stepLabel"
      href=""
      :class="classes.wrapper"
      @click.prevent="select"
    ></a>
  </li>
</template>

<script>
  export default {
    name: 'FormStep',
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: '',
          container_active: '',
          container_inactive: '',
          container_invalid: '',
          container_valid: '',
          container_disabled: '',
          container_enabled: '',
          container_completed: '',
          container_incompleted: '',
          container_pending: '',
        },
      }
    }
  }
</script>

<style lang="scss">
</style>