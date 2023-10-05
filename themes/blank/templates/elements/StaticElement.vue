<template>
  <component v-if="wrap" :is="elementLayout" ref="container">
    <template #element>
      <!-- If content is HTML -->
      <div v-if="content && isHtml" :class="classes.content" v-html="content"></div>

      <!-- If content is component -->
      <component v-else-if="content" :is="componentContent" :el$="el$" />

      <!-- If content is a slot -->
      <slot v-else :el$="el$"><component :is="slotContent" :el$="el$"/></slot>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>

  <div v-else-if="content && isHtml" :class="classes.content" v-html="content"></div>

  <component v-else-if="content" :is="componentContent" ref="container" />

  <div v-else :class="classes.container" ref="container">
    <slot :el$="el$"><component :is="slotContent" :el$="el$"/></slot>
  </div>
</template>

<script>
  export default {
    name: 'StaticElement',
    data() {
      return {
        merge: true,
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