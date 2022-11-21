<template>
  <li v-if="visible" :class="classes.container">
    <a
      href=""
      :class="classes.wrapper"
      :tabindex="isDisabled ? -1 : 0"
      role="tab"
      :aria-selected="active"
      @click.prevent="select"
      @keypress.enter.space.prevent="select"
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
        },
      }
    }
  }
</script>

<style lang="scss">
</style>