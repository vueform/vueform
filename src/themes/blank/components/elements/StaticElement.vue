<template>
  <component v-if="wrap" :is="elementLayout">

    <template v-slot:field>
      <div v-if="content && isHtml" :class="classes.content" v-html="content"></div>
      <component v-else-if="content" :is="content" />
      <slot v-else :el$="el$"><component :is="fieldSlots.default" :el$="el$" /></slot>
    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$" /></slot></template>
  </component>

  <div v-else-if="content && isHtml" :class="classes.content" v-html="content"></div>

  <component v-else-if="content" :is="content" />

  <div v-else>
    <slot :el$="el$"><component :is="fieldSlots.default" :el$="el$" /></slot>
  </div>

</template>

<script>
  export default {
    name: 'StaticElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          content: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>