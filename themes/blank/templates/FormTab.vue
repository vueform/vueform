<template>
  <li v-show="visible" :class="classes.container">
    <a
      href=""
      :class="classes.wrapper"
      @click.prevent="select"
    >
      <slot>
        <!-- If label is a component -->
        <span v-if="isLabelComponent">
          <component :is="tabLabel" :form$="form$"/>
        </span>
        
        <!-- If label is HTML -->
        <span v-else v-html="tabLabel"></span>
      </slot>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'FormTab',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          wrapper_active: '',
          wrapper_inactive: '',
          wrapper_valid: '',
          wrapper_invalid: '',
          wrapper_sm: '',
          wrapper_md: '',
          wrapper_lg: '',
          $container: (classes, {}) => ([
            classes.container,
          ]),
          $wrapper: (classes, { active, invalid, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            active ? classes.wrapper_active : classes.wrapper_inactive,
            invalid ? classes.wrapper_invalid : classes.wrapper_valid,
          ]),
        },
      }
    }
  }
</script>

<style lang="scss">
</style>