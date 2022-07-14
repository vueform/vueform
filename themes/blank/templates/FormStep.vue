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
        },
      }
    }
  }
</script>

<style lang="scss">
</style>