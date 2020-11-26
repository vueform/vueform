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