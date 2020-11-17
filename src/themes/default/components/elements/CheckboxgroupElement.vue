<template>
  <component :is="layout">

    <template v-slot:field>

      <slot name="prefix"></slot>

      <div :class="classes.checkboxGroup">
        
        <div v-for="(item, value, key) in items" :key="key">
          <slot name="checkbox" :el$="el$" :item="item" :value="value">
            <component
              :is="slots.checkbox"
              :el$="el$"
              :item="item"
              :value="value"
            />
          </slot>
        </div>

      </div>

      <slot name="suffix"></slot>

    </template>

    <template v-slot:info><slot name="info" :el$="el$"><component v-if="slots.info" :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component v-if="slots.before" :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component v-if="slots.label" :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component v-if="slots.between" :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component v-if="slots.description" :is="slots.description" /></slot></template>
    <template v-slot:error><slot name="error" :el$="el$"><component v-if="slots.error" :is="slots.error" /></slot></template>
    <template v-slot:message><slot name="message" :el$="el$"><component v-if="slots.message" :is="slots.message" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component v-if="slots.after" :is="slots.after" type="after" /></slot></template>

  </component>
</template>

<script>
  import CheckboxgroupElement from './../../../../components/elements/CheckboxgroupElement'

  export default {
    name: 'CheckboxgroupElement',
    mixins: [CheckboxgroupElement],
    data() {
      return {
        defaultClasses: {
          container: 'lf-checkboxgroup',
          checkboxGroup: 'checkbox-group',
        }
      }
    }
  }
</script>