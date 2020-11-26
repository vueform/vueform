<template>
  <component :is="layout">
    
    <template v-slot:field>
      <slot name="prefix"></slot>
      
      <!-- Actual input field -->
      <input
        v-show="false"
        multiple
        type="file"
        @change="handleChange"
        :disabled="disabled"
        ref="input" 
      />

      <!-- Upload button -->
      <a
        href=""
        :class="classes.uploadButton"
        @click.prevent="handleClick"
      >{{ __('laraform.elements.multifile.uploadButton') }}</a>

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
          element: 'form-group',
          uploadButton: 'btn btn-light uploader-button',
          listRemove: 'list-remove',
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