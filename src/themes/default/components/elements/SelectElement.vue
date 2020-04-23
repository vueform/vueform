<template>
  <component :is="theme.components.BaseElementLayout"
    :el$="el$"
  >
    <template slot="field">
      <slot name="prefix"></slot>

      <component :is="theme.components.ElementLabelFloating"
        v-if="floating"
        :visible="!empty"
      >{{ floating }}</component>

      <span
        v-if="placeholder && !(this.multiple && this.native)"
        :class="theme.classes.selectNativePlaceholder"
      >{{ placeholder }}</span>

      <select
        v-if="isNative"
        v-model="model"
        :class="theme.classes.select"
        :name="name"
        :id="id"
        :multiple="multiple"
        :disabled="disabled"
        @change="handleChange"
        ref="select$"
      >
        <option
          v-for="(option, index) in selectOptions"
          :value="option['value']"
          :key="index"
        >
          {{ option['label'] }}
        </option>
      </select>

      <multiselect
        v-else
        v-model="model"
        v-bind="options"
        :id="id"
        :name="name.toString()"
        :options="selectOptions"
        :placeholder="placeholder"
        :disabled="disabled"
        :multiple="multiple"
        :searchable="search"
        :taggable="taggable"
        :tagPlaceholder="tagPlaceholder"
        :label="'label'"
        :track-by="trackBy"
        :loading="loading"
        :optionsLimit="limit"
        @input="handleInput"
        @select="handleSelect"
        @remove="handleRemove"
        @search-change="handleSearchChange"
        @tag="handleTag"
        @open="handleOpen"
        @close="handleClose"
        ref="select$"
      >
        <slot name="beforeList" slot="beforeList" :el$="el$">
          <component v-if="slots.beforeList" :is="slots.beforeList" :el$="el$"/>
        </slot>
        <slot name="afterList" slot="afterList" :el$="el$">
          <component v-if="slots.afterList" :is="slots.afterList" :el$="el$"/>
        </slot>
        <slot name="singleLabel" slot="singleLabel" :el$="el$" :option="selectedOption">
          <component v-if="slots.singleLabel" :is="slots.singleLabel" :el$="el$" :option="selectedOption"/>
        </slot>
        <slot name="noResult" slot="noResult" :el$="el$">
          <component v-if="slots.noResult" :is="slots.noResult" :el$="el$"/>
        </slot>
        <slot name="noOptions" slot="noOptions" :el$="el$">
          <component v-if="slots.noOptions" :is="slots.noOptions" :el$="el$"/>
        </slot>
        <slot name="option" slot="option" slot-scope="{ option, search }" :el$="el$" :option="option" :search="search">
          <component v-if="slots.option" :is="slots.option" :el$="el$" :option="option" :search="search" />
        </slot>
        <slot name="selection" slot="selection" slot-scope="{ values, search, remove }" :el$="el$" :values="values" :search="search" :remove="remove">
          <component v-if="slots.selection" :is="slots.selection" :el$="el$" :values="values" :search="search" :remove="remove">
            <slot name="tag" slot="tag" slot-scope="{ option, search, remove }" :el$="el$" :option="option" :search="search" :remove="remove">
              <component v-if="slots.tag && selectOptions.length > 0" :is="slots.tag" :el$="el$" :option="option" :search="search" :remove="remove" />
            </slot>
          </component>
        </slot>
      </multiselect>

      <slot name="suffix"></slot>
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>
</template>

<script>
  import SelectElement from './../../../../components/elements/SelectElement'

  import Multiselect from 'vue-multiselect/src'

  export default {
    mixins: [SelectElement],
    components: {
      Multiselect,
    },
  }
</script>