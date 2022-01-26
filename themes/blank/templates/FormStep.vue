<template>
  <li :class="classes.container" v-show="visible">
    <a
      href=""
      :class="classes.wrapper"
      @click.prevent="select"
    >
      <slot>
        <!-- If label is a component -->
        <span v-if="isLabelComponent">
          <component :is="stepLabel" :form$="form$"/>
        </span>
        
        <!-- If label is HTML -->
        <span v-else v-html="stepLabel"></span>
      </slot>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'FormStep',
    data() {
      return {
        merge: true,
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
          $container: (classes, { active, isDisabled, completed, invalid, pending }) => ([
            classes.container,
            active ? classes.container_active : classes.container_inactive,
            isDisabled ? classes.container_disabled : classes.container_enabled,
            completed ? classes.container_completed : classes.container_incompleted,
            invalid ? classes.container_invalid : classes.container_valid,
            pending ? classes.container_pending : null,
          ]),
        },
      }
    }
  }
</script>

<style lang="scss">
</style>