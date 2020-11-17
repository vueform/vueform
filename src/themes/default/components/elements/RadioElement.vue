<template>
  <component :is="layout">
    <template v-slot:field>
      <slot name="prefix"></slot>
      
      <div
        :class="classes.radioContainer"
      >
        <label 
          :class="classes.radioLabel"
          :for="name"
        >
          <input
            type="radio"
            :checked="model"
            :value="radioValue"
            :class="classes.radio"
            :name="fieldName"
            :id="id"
            :disabled="disabled"
            @change="handleChange"
            ref="input"
          />
        
          <span :class="classes.text" v-html="text"></span>
        </label>
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
  import RadioElement from './../../../../components/elements/RadioElement'

  export default {
    name: 'RadioElement',
    mixins: [RadioElement],
    data() {
      return {
        defaultClasses: {
          container: 'lf-radio',
          radioContainer: 'radio',
          radioLabel: '',
          radio: '',
          text: 'checkbox-text',
        }
      }
    }
  }
</script>