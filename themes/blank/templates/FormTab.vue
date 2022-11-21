<template>
  <li v-show="visible" :class="classes.container">
    <div
      :class="classes.wrapper"
      tabindex="0"
      role="tab"
      :aria-selected="active"
      @click.prevent="select"
      @keypress.enter.space.prevent="select"
    >
      <slot>
        <!-- If label is a component -->
        <span v-if="isLabelComponent">
          <component :is="tabLabel" :form$="form$"/>
        </span>
        
        <!-- If label is HTML -->
        <span v-else v-html="tabLabel"></span>
      </slot>
    </div>
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
        },
      }
    }
  }
</script>

<style lang="scss">
</style>