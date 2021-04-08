<template>
  <component :is="elementLayout">

    <template v-slot:field>

      <ElementLabelFloating
        v-if="floating"
        :visible="!empty"
      />

      <div v-if="isNative" :class="classes.native">
        <select
          v-model="value"
          :class="classes.select"
          :name="name"
          :id="fieldId"
          :multiple="fieldOptions.mode === 'multiple'"
          :disabled="isDisabled"
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
        <span v-if="placeholder && empty" :class="classes.placeholder">{{ placeholder }}</span>
      </div>
      <Multiselect
        v-else
        v-bind="fieldOptions"
        v-model="value"
        :id="fieldId"
        :name="name"
        :options="items"
        :disabled="isDisabled"
        :placeholder="placeholder"
        @select="handleSelect"
        @deselect="handleDeselect"
        @search-change="handleSearchChange"
        @tag="handleTag"
        @open="handleOpen"
        @close="handleClose"
        ref="input"
      >
        <template v-slot:option="{ option, search }">
          <slot name="option" :option="option" :search="search" :el$="el$">
            <component :is="fieldSlots.option" :option="option" :search="search" />
          </slot>
        </template>
        
        <template v-if="fieldOptions.mode == 'single'" v-slot:singlelabel="{ value }">
          <slot name="singlelabel" :value="value" :el$="el$">
            <component v-if="fieldSlots.singlelabel" :is="fieldSlots.singlelabel" :value="value" />
          </slot>
        </template>
        
        <template v-if="fieldOptions.mode == 'multiple'" v-slot:multiplelabel="{ values }">
          <slot name="multiplelabel" :values="values" :el$="el$">
            <component :is="fieldSlots.multiplelabel" :values="values" />
          </slot>
        </template>

        <template v-if="fieldOptions.mode == 'tags'" v-slot:tag="{ option, handleTagRemove, disabled }">
          <slot name="tag" :option="option" :handleTagRemove="handleTagRemove" :disabled="disabled" :el$="el$">
            <component :is="fieldSlots.tag" :option="option" :handleTagRemove="handleTagRemove" :disabled="disabled" />
          </slot>
        </template>

        <template v-slot:noresults><slot name="noresults"><component :is="fieldSlots.noresults" /></slot></template>
        <template v-slot:nooptions><slot name="nooptions"><component :is="fieldSlots.nooptions" /></slot></template>
        <template v-slot:beforelist><slot name="beforelist"><component v-if="fieldSlots.beforelist" :is="fieldSlots.beforelist" /></slot></template>
        <template v-slot:afterlist><slot name="afterlist"><component v-if="fieldSlots.afterlist" :is="fieldSlots.afterlist" /></slot></template>

      </Multiselect>

    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]>
      <slot :name="slot" :el$="el$">
        <component :is="component" v-bind="elementSlotProps[slot]" />
      </slot>
    </template>
  </component>
</template>

<script>
  import Multiselect from '@vueform/multiselect/src/Multiselect'

  export default {
    name: 'SelectElement',
    components: {
      Multiselect: Multiselect,
    },
    data() {
      return {
        defaultClasses: {
          container: '',
          select: 'form-control',
          native: 'native-select',
          placeholder: 'native-select-placeholder',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .native-select {
    position: relative;
  }

  .native-select-placeholder {
    position: absolute;
    top: $input-padding-y;
    left: calc(#{$input-padding-x} + 3px);
    font-family: $input-font-family;
    @include font-size($input-font-size);
    font-weight: $input-font-weight;
    line-height: $input-line-height;
    color: $input-placeholder-color;
    cursor: default;
    pointer-events: none;
  }

  .multiselect {
    position: relative;
    margin: 0 auto;
    font-size: 0;
  }

  .multiselect > * {
    font-size: initial;
  }

  .multiselect.is-searchable {
      cursor: auto;
  }

  .is-tags > .multiselect-input,
  :not(.is-searchable) > .multiselect-input,
  :not(.is-tags) > .multiselect-input .multiselect-search input  {
    display: block;
    width: 100%;
    min-height: $input-height;
    padding: $input-padding-y $input-padding-x;
    font-family: $input-font-family;
    @include font-size($input-font-size);
    font-weight: $input-font-weight;
    line-height: $input-line-height;
    color: $input-color;
    background-color: $input-bg;
    background-clip: padding-box;
    border: $input-border-width solid $input-border-color;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    outline: none;

    // Note: This has no effect on <select>s in some browsers, due to the limited stylability of `<select>`s in CSS.
    @include border-radius($input-border-radius, 0);

    @include box-shadow($input-box-shadow);
    @include transition($input-transition);

    // Unstyle the caret on `<select>`s in IE10+.
    &::-ms-expand {
      background-color: transparent;
      border: 0;
    }

    // Remove select outline from select box in FF
    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 $input-color;
    }

    // Customize the `:focus` state to imitate native WebKit styles.
    @include form-control-focus($ignore-warning: true);
  }

  :not(.is-tags).is-searchable > .multiselect-input {
    background-color: $input-bg;
    @include border-radius($input-border-radius, 0);
  }

  .is-searchable > .multiselect-input .multiselect-search input {
    cursor: text;
    background: transparent;

    &:focus {
      background: transparent;
    }
  }

  .is-tags {
    .multiselect-input {
      padding: calc(#{$input-padding-y} - 5px) $input-padding-y;
    }

    .multiselect-search {
      flex-grow: 1;
      padding-left: calc(#{$input-padding-x} - #{$input-padding-y} - 2px);

      input {
        outline: none;
        border: 0;
        margin: 0 0 5px 2px;
        flex-grow: 1;
        min-width: 100%;
        font-family: $input-font-family;
        @include font-size($input-font-size);
        font-weight: $input-font-weight;
        line-height: $input-line-height;
        color: $input-color;
        padding: 0;
      }
    }

    span + .multiselect-search {
      padding-left: 0;
    }
  }

  .is-disabled .multiselect-input {
    background-color: $input-disabled-bg;
    opacity: 1;
    cursor: default;

    &:focus {
      color: $input-color;
      background-color: $input-disabled-bg;
      opacity: 1;
      border-color: $input-border-color;
      outline: 0;
      box-shadow: none;
    }
  }

  .is-open .multiselect-input {
    border-radius: 3px 3px 0 0;
  }

  .is-open .multiselect-caret {
    transform: translateY(-50%) rotate(180deg);
  }

  .multiselect-placeholder,
  .multiselect-single-label,
  .multiselect-multiple-label {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: calc(#{$input-padding-x} + 5px);
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
  }

  .multiselect-placeholder {
    padding-left: calc(#{$input-padding-x} + 3px);
  }

  .multiselect-placeholder {
    color: $input-placeholder-color;
  }

  .multiselect-tags {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    margin-top: 5px;
    flex-wrap: wrap;
    padding-right: $input-padding-x;
  }

  .no-caret .multiselect-tags {
    padding-right: 9px;
  }

  .multiselect-tag {
    background: $primary;
    color: $input-bg;
    font-size: 14px;
    font-weight: 600;
    padding: 0 0 0 8px;
    border-radius: 3px;
    margin-right: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    cursor: text;
    white-space: nowrap;
  }

  .multiselect-tag i {
    cursor: pointer;
  }

  .multiselect-tag i:before {
    content: "\D7";
    color: darken($primary, 25%);
    font-size: 14px;
    font-weight: 700;
    padding: 1px 5px 1px 5px;
    margin-left: 3px;
    display: flex;
    font-style: normal;
  }

  .multiselect-tag i:hover:before {
    color: #ffffff;
    background: rgba(255,255,255,0.2);
  }

  .is-disabled .multiselect-tag {
    background: darken($input-disabled-bg, 37.5%);
    padding: 1px 8px 1px 8px;
  }

  .multiselect-fake-input {
    background: transparent;
    width: 100%;
    height: 1px;
    border: 0;
    padding: 0;
    font-size: 0;
    margin-top: -1px;
    outline: none;

    &:active, &:focus {
      outline: none;
    }
  }

  .multiselect-options {
    position: absolute;
    left: 0;
    right: 0px;
    border: 1px solid $input-border-color;
    margin-top: -1px;
    max-height: 160px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 100;
    background: #ffffff;
  }

  .multiselect-option {
    display: flex;
    box-sizing: border-box;
    text-decoration: none;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    cursor: pointer;
    min-height: $input-height;
    padding: $input-padding-y $input-padding-x;
    font-family: $input-font-family;
    @include font-size($input-font-size);
    font-weight: $input-font-weight;
    line-height: $input-line-height;
    color: $input-color;
    background-color: $input-bg;
  }

  .multiselect-option.is-pointed {
    background: $gray-200;
  }

  .multiselect-option.is-disabled {
    background: $gray-100;
    color: $gray-500;
    cursor: not-allowed;
  }

  .multiselect-option.is-selected {
    background: $primary;
    color: #ffffff;
  }

  .multiselect-option.is-selected.is-pointed {
    background: lighten($primary, 5%);
  }

  .is-multiple .multiselect-option.is-selected,
  .is-tags .multiselect-option.is-selected {
    color: lighten($input-color, 25%);
    background: transparent;
  }

  .is-multiple .multiselect-option.is-selected.is-pointed,
  .is-tags .multiselect-option.is-selected.is-pointed {
    background: $gray-200;
  }

  .multiselect-no-options,
  .multiselect-no-results {
    display: flex;
    padding: $input-padding-y $input-padding-x;
    color: $text-muted;
    min-height: $input-height;
    align-items: center;
  }

  .multiselect-caret {
    position: absolute;
    right: 12px;
    top: 50%;
    border-style: solid;
    border-width: 5px 5px 0;
    content: "";
    transform: translateY(-50%);
    transition: .3s transform;
    color: $gray-500;
    border-color: $gray-500 transparent transparent;
  }

  .multiselect-clear {
    right: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: $input-height;
    height: $input-height;
    cursor: pointer;

    &:before, &:after {
      content: " ";
      height: 12px;
      width: 2px;
      background-color: $gray-500;
      position: relative;
      display: block;
      left: 0;
      top: 0;
    }

    &:before {
      left: 2px;
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:hover {
      &:before, &:after {
        background-color: $gray-700;
      }
    }
  }

  .multiselect-spinner {
    position: absolute;
    width: 16px;
    height: 16px;
    background: #fff;
    display: block;

    right: $input-padding-x;
    top: 50%;
    transform: translateY(-50%);

    &:before, &:after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      margin: -8px 0 0 -8px;
      width: 16px;
      height: 16px;
      border-radius: 100%;
      border-color: $primary transparent transparent;
      border-style: solid;
      border-width: 2px;
      box-shadow: 0 0 0 1px transparent;
    }
  }

  .is-disabled .multiselect-spinner {
    background: #f9f9f9;
  }

  .is-disabled .multiselect-spinner:before,
  .is-disabled .multiselect-spinner:after {
    border-color: #999999 transparent transparent;
  }

  .multiselect-spinner:before {
    animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);
    animation-iteration-count: infinite;
  }
  .multiselect-spinner:after {
    animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);
    animation-iteration-count: infinite;
  }

  .multiselect-enter-active {
    transition: all 0.15s ease;
  }

  .multiselect-leave-active {
    transition: all 0s;
  }

  .multiselect-enter,
  .multiselect-leave-active {
    opacity: 0;
  }

  .multiselect-loading-enter-active,
  .multiselect-loading-leave-active {
    transition: opacity 0.4s ease-in-out;
    opacity: 1;
  }
  .multiselect-loading-enter,
  .multiselect-loading-leave-active {
    opacity: 0;
  }

  @keyframes spinning {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(2turn);
    }
  }
</style>