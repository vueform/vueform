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
          v-ref:child$
          :ref="setRef(child$, i)"
        />
      </div>

      <slot name="suffix"></slot>

    </template>
    
    <template v-slot:info><slot name="info" :el$="el$"><component v-if="slots.info" :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component v-if="slots.before" :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component v-if="slots.label" :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component v-if="slots.between" :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component v-if="slots.description" :is="slots.description" /></slot></template>
    <template v-slot:message><slot name="message" :el$="el$"><component v-if="slots.message" :is="slots.message" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component v-if="slots.after" :is="slots.after" type="after" /></slot></template>
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