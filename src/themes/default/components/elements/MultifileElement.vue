<template>
  <component :is="theme.components.NestedElementLayout"
    :el$="el$"
  >
    <template slot="children">
      
      <!-- Actual input field -->
      <input
        multiple
        type="file"
        @change="handleFileSelected"
        :disabled="disabled"
        ref="input" 
      />

      <!-- Upload button -->
      <a
        v-if="uploader == 'button'"
        href=""
        :class="theme.classes.uploaderButton"
        @click.prevent="handleClick"
      >{{ __('elements.multifile.uploadButton') }}</a>

       <!-- Drag n drop area -->
      <component :is="theme.components.DragAndDrop"
        v-if="uploader == 'drop'"
        :class="theme.classes.uploaderDragndrop"
        :draggingClass="theme.classes.uploaderDragndropOver"
        :title="__('elements.multifile.dndTitle')"
        :description="__('elements.multifile.dndDescription')"
        @click="handleClick"
        @drop="handleFileDropped"
      />

      <div
        v-sortable="sortable"
        :class="[theme.classes.elementGroupContainer, theme.classes.uploaderPreviews, {[theme.classes.uploaderPreviewsSortable]: sort}]"
      >
        <Element v-for="(schema, index) in instances"
          :is="schema.type + '-element'"
          :schema="schema"
          :name="index"
          :parent="heritage"
          :key="schema.key"
          @remove="remove(index)"
          ref="children$"
        >
          <template slot="remove">
            <a
              v-if="!disabled"
              href=""
              :class="theme.classes.uploaderIconRemove"
              @click.prevent="remove(index)"
            ></a>
          </template>
        </Element>
      </div>
    </template>
  </component>
</template>

<script>
  import MultifileElement from './../../../../components/elements/MultifileElement'

  import SortableDirective from './../../../../directives/sortable'

  export default {
    mixins: [MultifileElement],
    directives: {
      sortable: SortableDirective
    },
  }
</script>