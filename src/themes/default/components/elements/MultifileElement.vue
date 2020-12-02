<template>
  <component :is="layout" @vnode-before-update="handleLayoutBeforeUpdate">
    
    <template v-slot:field>
      <slot name="prefix"></slot>

      <!-- Drag n drop -->
      <component
        v-if="drop && canDrop && !disabled"
        :is="components.DragAndDrop"
        :title="__(`laraform.elements.${type}.dndTitle`)"
        :description="__(`laraform.elements.${type}.dndDescription`)"
        @click="handleClick"
        @drop="handleDrop"
      />
      <!-- Upload button -->
      <a
        v-else-if="!disabled"
        href=""
        :class="classes.selectButton"
        @click.prevent="handleClick"
      >{{ __('laraform.elements.multifile.uploadButton') }}</a>
      
      <!-- Actual input field -->
      <input
        v-show="false"
        multiple
        type="file"
        @change="handleChange"
        :accept="accept"
        :disabled="disabled"
        ref="input" 
      />

      <div v-sortable="sortable" :class="classes.element">
        <component
          v-for="(element, i) in instances"
          :is="component(element)"
          :schema="element"
          :name="i"
          :parent="el$"
          :embed="true"
          :key="element.key"
          :ref="setRef(child$, i)"
          v-ref:child$
          @remove="remove"
        />
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
  import MultifileElement from './../../../../components/elements/MultifileElement'

  export default {
    name: 'MultifileElement',
    mixins: [MultifileElement],
    data() {
      return {
        defaultClasses: {
          container: 'lf-multifile',
          element: 'list-element-container',
          sortable: 'list-element-container-sortable',
          disabled: 'disabled',
          selectButton: 'btn btn-light btn-select-file',
        },
        containers: {
          sortable: 'element',
          add: 'add',
          remove: 'remove',
        }
      }
    }
  }
</script>