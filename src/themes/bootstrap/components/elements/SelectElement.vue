<template>
  <component :is="layout">

    <template v-slot:field>

      <slot name="prefix"></slot>

      <component
        :is="components.ElementLabelFloating"
        v-if="floating"
        :visible="!empty"
      />

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
          v-for="(option, index) in nativeItems"
          :value="option.value"
          :key="index"
        >
          {{ option.label }}
          </option>
      </select>
      <multiselect
        v-else
        v-bind="options"
        :value="model"
        :modelValue="model"
        :id="id"
        :name="name"
        :options="items"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="handleInput"
        @select="handleSelect"
        @deselect="handleDeselect"
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
        
        <template v-if="options.mode == 'single'" v-slot:singlelabel="{ value }">
          <slot name="singlelabel" :el$="el$" :value="value">
            <component v-if="slots.singlelabel" :is="slots.singlelabel" :el$="el$" :value="value" />
          </slot>
        </template>
        
        <template v-if="options.mode == 'multiple'" v-slot:multiplelabel="{ values }">
          <slot name="multiplelabel" :el$="el$" :values="values">
            <component :is="slots.multiplelabel" :el$="el$" :values="values" />
          </slot>
        </template>

        <template v-if="options.mode == 'tags'" v-slot:tag="{ option, remove, disabled }">
          <slot name="tag" :el$="el$" :option="option" :remove="remove" :disabled="disabled">
            <component :is="slots.tag" :el$="el$" :option="option" :remove="remove" :disabled="disabled" />
          </slot>
        </template>

        <template v-slot:noresults><slot name="noresults" :el$="el$"><component :is="slots.noresults" :el$="el$" /></slot></template>
        <template v-slot:nooptions><slot name="nooptions" :el$="el$"><component :is="slots.nooptions" :el$="el$" /></slot></template>
        <template v-slot:beforelist><slot name="beforelist" :el$="el$"><component v-if="slots.beforelist" :is="slots.beforelist" :el$="el$" /></slot></template>
        <template v-slot:afterlist><slot name="afterlist" :el$="el$"><component v-if="slots.afterlist" :is="slots.afterlist" :el$="el$" /></slot></template>

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
  import Multiselect from '@vueform/multiselect/src/Multiselect'
  import '@vueform/multiselect/themes/default.scss'

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