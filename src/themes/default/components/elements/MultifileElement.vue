<template>
  <component :is="components.NestedElementLayout">
    <template slot="children">
      
      <!-- Actual input field -->
      <input
        v-show="false"
        multiple
        type="file"
        @change="handleFileSelected"
        :disabled="disabled"
        ref="input" 
      />

      <!-- Upload button -->
      <a
        href=""
        :class="classes.uploaderButton"
        @click.prevent="handleClick"
      >{{ __('laraform.elements.multifile.uploadButton') }}</a>

      <div v-sortable="sortable" :class="classes.element">
        <component
          v-for="(element, index) in instances"
          :is="component(element)"
          :schema="element"
          :name="index"
          :parent="el$"
          :embed="true"
          :key="element.key"
          ref="children$"
          @remove="remove"
        />
      </div>
    </template>
  </component>
</template>

<script>
  import MultifileElement from './../../../../components/elements/MultifileElement'

  export default {
    mixins: [MultifileElement],
    data() {
      return {
        defaultClasses: {
          element: 'form-group',
          uploaderButton: 'btn btn-light uploader-button',
          listRemove: 'list-remove',
        }
      }
    }
  }
</script>