<template>
  <component v-if="wrap" :is="elementLayout">

    <template v-slot:field>
      <slot>
        <component v-if="!isHtml" :is="content" :el$="el$" />
        <div v-else v-html="content"></div>
      </slot>
    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]>
      <slot :name="slot" :el$="el$">
        <component :is="component" v-bind="elementSlotProps[slot]" />
      </slot>
    </template>
  </component>
  <component v-else-if="!isHtml" :is="content" :el$="el$" />
  <div v-else v-html="content"></div>

</template>

<script>
  export default {
    name: 'StaticElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-static'
        }
      }
    }
  }
</script>