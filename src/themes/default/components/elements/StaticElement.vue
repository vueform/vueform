<template>
  <component v-if="wrap" :is="layout">

    <template v-slot:field>
      <component v-if="!isHtml" :is="content" :el$="el$" />
      <div v-else v-html="content"></div>
    </template>

    <template v-slot:info><slot name="info" :el$="el$"><component v-if="slots.info" :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component v-if="slots.before" :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component v-if="slots.label" :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component v-if="slots.between" :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component v-if="slots.description" :is="slots.description" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component v-if="slots.after" :is="slots.after" type="after" /></slot></template>
  </component>
  <component v-else-if="!isHtml" :is="content" :el$="el$" />
  <div v-else v-html="content"></div>

</template>

<script>
  import StaticElement from './../../../../components/elements/StaticElement'

  export default {
    name: 'StaticElement',
    mixins: [StaticElement],
    data() {
      return {
        defaultClasses: {
          container: 'lf-static'
        }
      }
    }
  }
</script>