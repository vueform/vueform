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

    <template v-slot:info><slot name="info" :el$="el$"><component :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component :is="slots.description" /></slot></template>
    <template v-slot:error><slot name="error" :el$="el$"><component :is="slots.error" /></slot></template>
    <template v-slot:message><slot name="message" :el$="el$"><component :is="slots.message" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component :is="slots.after" type="after" /></slot></template>

  </component>
</template>

<script>
  export default {
    name: 'CheckboxgroupElement',
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