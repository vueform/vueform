<template>
  <component :is="layout">

    <template v-slot:field>
      
      <slot name="prefix"></slot>

      <div :class="classes.childrenContainer">
        <component
          v-for="(element, name, i) in children"
          :is="component(element)"
          :schema="element"
          :name="name"
          :parent="el$"
          :key="i"
        />
      </div>

      <slot name="suffix"></slot>

    </template>
    
    <template v-slot:info><slot name="info" :el$="el$"><component :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component :is="slots.description" /></slot></template>
    <template v-slot:message><slot name="message" :el$="el$"><component :is="slots.message" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component :is="slots.after" type="after" /></slot></template>
	</component>
</template>

<script>
  import GroupElement from './../../../../components/elements/GroupElement'

  export default {
    name: 'GroupElement',
    mixins: [GroupElement],
    data() {
      return {
        defaultClasses: {
          container: 'lf-group',
          childrenContainer: 'element-group',
        }
      }
    },
  }
</script>