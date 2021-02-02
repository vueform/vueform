<template>
  <component :is="layout">
    <template v-slot:field>

      <slot name="prefix"></slot>

      <div :class="classes.buttonsContainer">
        <slot>
          <component
            v-for="(button, i) in children"
            :is="component(button)"
            :embed="true"
            :button="button"
            :name="i"
            :parent="el$"
            :key="i"
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
    <template v-slot:after><slot name="after" :el$="el$"><component :is="slots.after" type="after" /></slot></template>
  </component>
</template>

<script>
  import ButtonsElement from './../../../../components/elements/ButtonsElement'

  export default {
    name: 'ButtonsElement',
    mixins: [ButtonsElement],
    data() {
      return {
        defaultClasses: {
          container: 'lf-buttons',
          buttonsContainer: 'button-group',
        }
      }
    }
  }
</script>