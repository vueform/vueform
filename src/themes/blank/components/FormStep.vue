<template>
  <li :class="classes.container" v-show="visible">
    <slot :classes="classes" :select="select" :disabled="disabled">
      <!-- If label is a component -->
      <a
        v-if="isLabelComponent"
        href=""
        :class="classes.wrapper"
        @click.prevent="select"
      >
        <component :is="stepLabel" :form$="form$"/>
      </a>

      <!-- If label is HTML -->
      <a
        v-else
        v-html="stepLabel"
        href=""
        :class="classes.wrapper"
        @click.prevent="select"
      ></a>
    </slot>
  </li>
</template>

<script>
  export default {
    name: 'FormStep',
    data() {
      return {
        defaultClasses: {
          container: '',
          container_active: '',
          container_inactive: '',
          container_invalid: '',
          container_valid: '',
          container_disabled: '',
          container_enabled: '',
          container_completed: '',
          container_incompleted: '',
          container_pending: '',
          wrapper: '',
        },
      }
    }
  }
</script>

<style lang="scss">
</style>