<template>
  <component :is="layout">

    <template v-slot:field>

      <slot name="prefix"></slot>

      <component :is="components.ElementLabelFloating"
        v-if="floating"
        :visible="!empty"
      >{{ floating }}</component>

      <span
        v-if="!options.multiple && !native"
        :class="classes.selectNativePlaceholder"
      >{{ placeholder }}</span>

      <select
        v-if="isNative"
        v-model="model"
        :class="classes.select"
        :name="name"
        :id="id"
        :multiple="options.multiple"
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
        v-model="model"
        v-bind="options"
        :id="id"
        :name="String(name)"
        :options="selectOptions"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="handleChange"
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
        
        <template v-slot:singleLabel="{ option }">
          <slot name="singleLabel" :el$="el$" :option="option">
            <component v-if="slots.singleLabel" :is="slots.singleLabel" :el$="el$" :option="option" />
          </slot>
        </template>
        
        <template v-slot:selection="{ values, search, remove }">
          <slot name="selection" :el$="el$" :values="values" :search="search" :remove="remove">
            <component :is="slots.selection" :el$="el$" :values="values" :search="search" :remove="remove">
              <template v-slot:tag="{ option, search, remove }">
                <slot v-if="selectOptions.length" name="tag" :el$="el$" :option="option" :search="search" :remove="remove">
                  <component v-if="slots.tag" :is="slots.tag" :el$="el$" :option="option" :search="search" :remove="remove" />
                </slot>
              </template>
            </component>
          </slot>
        </template>

        <template v-slot:beforeList><slot name="beforeList" :el$="el$"><component v-if="slots.beforeList" :is="slots.beforeList" :el$="el$" /></slot></template>
        <template v-slot:afterList><slot name="afterList" :el$="el$"><component v-if="slots.afterList" :is="slots.afterList" :el$="el$" /></slot></template>
        <template v-slot:noResult><slot name="noResult" :el$="el$"><component :is="slots.noResult" :el$="el$" /></slot></template>
        <template v-slot:noOptions><slot name="noOptions" :el$="el$"><component :is="slots.noOptions" :el$="el$" /></slot></template>

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

  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.min.css'

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