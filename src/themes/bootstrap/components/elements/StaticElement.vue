<template>
  <component v-if="wrap" :is="layout">

    <template v-slot:field>
      <component v-if="!isHtml" :is="content" :el$="el$" />
      <div v-else v-html="content"></div>
    </template>

    <template v-slot:info><slot name="info" :el$="el$"><component :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component :is="slots.description" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component :is="slots.after" type="after" /></slot></template>
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