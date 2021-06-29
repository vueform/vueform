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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    border: var(--ms-border-width, 1px) solid var(--ms-border-color, #D1D5DB);
    border-radius: var(--ms-radius, 4px);
    background: var(--ms-bg, #FFFFFF);
    font-size: var(--ms-font-size, 1rem);
    min-height: calc(2 * var(--ms-border-width, 1px) + var(--ms-font-size, 1rem) * var(--ms-line-height, 1.375) + 2 * var(--ms-py, 0.5rem));

    &.is-open {
      border-radius: var(--ms-radius, 4px) var(--ms-radius, 4px) 0 0;
    }

    &.is-open-top {
      border-radius: 0 0 var(--ms-radius, 4px) var(--ms-radius, 4px);
    }

    &.is-disabled {
      cursor: default;
      background: var(--ms-bg-disabled, #F3F4F6);
    }

    &.is-active {
      box-shadow: 0 0 0 var(--ms-ring-width, 3px) var(--ms-ring-color, #10B98130);
    }
  }

  .multiselect-multiple-label,
  .multiselect-placeholder {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
    line-height: var(--ms-line-height, 1.375);
    padding-left: var(--ms-px, 0.875rem);
  }

  .multiselect-placeholder {
    color: var(--ms-placeholder-color, #9CA3AF);
  }

  .multiselect-search {
    width: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    outline: none;
    box-sizing: border-box;
    border: 0;
    appearance: none;
    font-size: inherit;
    font-family: inherit;
    background: var(--ms-bg, #FFFFFF);
    border-radius: var(--ms-radius, 4px);
    padding-left: var(--ms-px, 0.875rem);
  }

  .multiselect-tags {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-wrap: wrap;
    margin: var(--ms-tag-my, 0.25rem) 0 0;
    padding-left: var(--ms-py, 0.5rem);
  }

  .multiselect-tag {
    background: var(--ms-tag-bg, #10B981);
    color: var(--ms-tag-color, #FFFFFF);
    font-size: var(--ms-tag-font-size, 0.875rem);
    line-height: var(--ms-tag-line-height, 1.25rem);
    font-weight: var(--ms-tag-font-weight, 600);
    padding: var(--ms-tag-py, 0.125rem) 0 var(--ms-tag-py, 0.125rem) var(--ms-tag-px, 0.5rem);
    border-radius: var(--ms-tag-radius, 4px);
    margin-right: var(--ms-tag-mx, 0.25rem);
    margin-bottom: var(--ms-tag-my, 0.25rem);
    display: flex;
    align-items: center;
    white-space: nowrap;

    &.is-disabled {
      padding-right: var(--ms-tag-px, 0.5rem);
      background: var(--ms-tag-bg-disabled, #9CA3AF);
      color: var(--ms-tag-color-disabled, #FFFFFF);
    }
  }

  .multiselect-tag-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--ms-tag-remove-py, 0.25rem) var(--ms-tag-remove-px, 0.25rem);
    margin: var(--ms-tag-remove-my, 0rem) var(--ms-tag-remove-mx, 0.125rem);
    border-radius: var(--ms-tag-remove-radius, 4px);
    
    &:hover {
      background: #00000010;
    }
  }

  .multiselect-tag-remove-icon {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3;
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
  }

  .multiselect-tags-search {
    height: 100%;
    border: 0;
    appearance: none;
    outline: none;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    margin: 0 var(--ms-tag-mx, 4px) var(--ms-tag-my, 4px);
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 1;
  }

  .multiselect-spinner {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' fill='%2310B981' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3E%3C/path%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    width: 1rem;
    height: 1rem;
    z-index: 10;
    margin: 0 var(--ms-px, 0.875rem) 0 0;
    animation: multiselect-spin 1s linear infinite;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .multiselect-clear {
    padding: 0 var(--ms-px, 0.875rem) 0 0px;
    position: relative;
    z-index: 10;
    opacity: 0.4;
    transition: .3s;
    flex-shrink: 0;
    flex-grow: 0;
    display: flex;

    &:hover {
      opacity: 1;
    }
  }

  .multiselect-clear-icon {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    width: 0.625rem;
    height: 1.125rem;
    display: inline-block;
  }

  .multiselect-caret {
    transform: rotate(0deg);
    transition: .3s transform;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    width: 0.625rem;
    height: 1.125rem;
    margin: 0 var(--ms-px, 0.875rem) 0 0;
    position: relative;
    z-index: 10;
    opacity: 0.4;
    flex-shrink: 0;
    flex-grow: 0;

    &.is-open {
      transform: rotate(180deg);
    }
  }

  .multiselect-dropdown {
    position: absolute;
    left: calc(var(--ms-border-width, 1px) * -1);
    right: calc(var(--ms-border-width, 1px) * -1);
    bottom: 0;
    transform: translateY(100%);
    border: var(--ms-dropdown-border-width, 1px) solid var(--ms-dropdown-border-color, #D1D5DB);
    margin-top: calc(var(--ms-border-width, 1px) * -1);
    max-height: 10rem;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 100;
    background: var(--ms-dropdown-bg, #FFFFFF);
    display: flex;
    flex-direction: column;
    border-radius: 0 0 var(--ms-dropdown-radius, 4px) var(--ms-dropdown-radius, 4px);

    &.is-top {
      transform: translateY(-100%);
      top: var(--ms-border-width, 1px);
      bottom: auto;
      flex-direction: column-reverse;
      border-radius: var(--ms-dropdown-radius, 4px) var(--ms-dropdown-radius, 4px) 0 0;
    }
  }

  .multiselect-options {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    &.is-top {
      flex-direction: column-reverse;
    }
  }

  .multiselect-option {
    display: flex;
    box-sizing: border-box;
    text-decoration: none;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    cursor: pointer;
    font-size: var(--ms-option-font-size, 1rem);
    line-height: var(--ms-option-line-height, 1.375);
    padding: var(--ms-option-py, 0.5rem) var(--ms-option-px, 0.75rem);

    &.is-pointed {
      background: var(--ms-option-bg-pointed, #F3F4F6);
      color: var(--ms-option-color-pointed, #1F2937);
    }

    &.is-disabled {
      background: var(--ms-option-bg-disabled, #FFFFFF);
      color: var(--ms-option-color-disabled, #D1D5DB);
      cursor: not-allowed;
    }

    &.is-selected {
      background: var(--ms-option-bg-selected, #10B981);
      color: var(--ms-option-color-selected, #FFFFFF);
    }

    &.is-selected.is-pointed {
      background: var(--ms-option-bg-selected-pointed, #26c08e);
      color: var(--ms-option-color-selected-pointed, #FFFFFF);
    }

    &.is-selected.is-disabled {
      background: var(--ms-option-bg-selected-disabled, #87dcc0);
      color: var(--ms-option-color-selected-disabled, #D1FAE5);
    }
  }

  .multiselect-no-options,
  .multiselect-no-results {
    padding: var(--ms-option-py, 0.5rem) var(--ms-option-px, 0.75rem);
    color: var(--ms-empty-color, #4B5563);
  }

  .multiselect-fake-input {
    background: transparent;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    border: 0;
    padding: 0;
    font-size: 0;
    outline: none;

    &:active, &:focus {
      outline: none;
    }
  }

  .multiselect-spacer {
    display: none;
  }

  @keyframes multiselect-spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>