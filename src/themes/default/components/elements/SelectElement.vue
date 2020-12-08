<template>
  <component :is="layout">

    <template v-slot:field>

      <slot name="prefix"></slot>

      <component :is="components.ElementLabelFloating"
        v-if="floating"
        :visible="!empty"
      >{{ floating }}</component>

      <select
        v-if="isNative"
        v-model="model"
        :class="classes.select"
        :name="name"
        :id="id"
        :multiple="options.mode === 'multiple'"
        :disabled="disabled"
        @change="handleChange"
        ref="input"
      >
        <option
          v-for="(option, index) in selectOptions"
          :value="option.value"
          :key="index"
        >
          {{ option.label }}
          </option>
      </select>
      <multiselect
        v-else
        :value="model"
        v-bind="options"
        :id="id"
        :name="name"
        :options="selectOptions"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="handleInput"
        @select="handleSelect"
        @remove="handleDeselect"
        @search-change="handleSearchChange"
        @tag="handleTag"
        @open="handleOpen"
        @close="handleClose"
        ref="input"
      >
        <template v-slot:option="{ option, search }">
          <slot name="option" :el$="el$" :option="option" :search="search">
            <component :is="slots.option" :el$="el$" :option="option" :search="search" />
          </slot>
        </template>
        
        <template v-if="options.mode == 'single'" v-slot:singleLabel="{ value }">
          <slot name="singleLabel" :el$="el$" :value="value">
            <component v-if="slots.singleLabel" :is="slots.singleLabel" :el$="el$" :value="value" />
          </slot>
        </template>
        
        <template v-if="options.mode == 'multiple'" v-slot:multipleLabel="{ values }">
          <slot name="multipleLabel" :el$="el$" :values="values">
            <component :is="slots.multipleLabel" :el$="el$" :values="values" />
          </slot>
        </template>

        <template v-if="options.mode == 'tags'" v-slot:tag="{ option, remove, disabled }">
          <slot name="tag" :el$="el$" :option="option" :remove="remove" :disabled="disabled">
            <component :is="slots.tag" :el$="el$" :option="option" :remove="remove" :disabled="disabled" />
          </slot>
        </template>

        <template v-slot:noResults><slot name="noResults" :el$="el$"><component :is="slots.noResults" :el$="el$" /></slot></template>
        <template v-slot:noOptions><slot name="noOptions" :el$="el$"><component :is="slots.noOptions" :el$="el$" /></slot></template>
        <template v-slot:beforeList><slot name="beforeList" :el$="el$"><component v-if="slots.beforeList" :is="slots.beforeList" :el$="el$" /></slot></template>
        <template v-slot:afterList><slot name="afterList" :el$="el$"><component v-if="slots.afterList" :is="slots.afterList" :el$="el$" /></slot></template>

      </multiselect>

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
  import SelectElement from './../../../../components/elements/SelectElement'
  import Multiselect from 'vueform-multiselect/src/Multiselect'

  export default {
    name: 'SelectElement',
    mixins: [SelectElement],
    components: {
      Multiselect,
    },
    data() {
      return {
        defaultClasses: {
          container: 'lf-select',
          select: 'form-control',
          selectNativePlaceholder: 'native-select-placeholder',
        }
      }
    }
  }
</script>

<style>

</style>