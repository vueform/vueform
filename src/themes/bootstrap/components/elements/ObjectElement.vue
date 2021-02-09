<template>
  <component :is="layout">

    <template v-slot:field>
      
      <slot name="prefix"></slot>

      <div :class="classes.childrenContainer">
        <slot>
          <component
            v-for="(element, name, i) in children"
            :is="component(element)"
            :embed="embed"
            :schema="element"
            :name="name"
            :key="name"
            @remove="(e) => $emit('remove', e)"
          />
        </slot>
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
  export default {
    name: 'ObjectElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-object',
          childrenContainer: 'element-group',
        }
      }
    }
  }
</script>