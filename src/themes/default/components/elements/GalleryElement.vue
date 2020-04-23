<template>
  <component :is="theme.components.NestedElementLayout"
    :el$="el$"
  >
    <template slot="children">
      
      <!-- Actual input field -->
      <input
        multiple
        type="file"
        :disabled="disabled"
        @change="handleFileSelected"
        ref="input" 
      />

      <!-- Upload button -->
      <a
        v-if="uploader == 'button'"
        href=""
        :class="theme.classes.uploaderButton"
        @click.prevent="handleClick"
      >{{ __('elements.gallery.uploadButton') }}</a>

       <!-- Drag n drop area -->
      <component :is="theme.components.DragAndDrop"
        v-if="uploader == 'drop'"
        :class="theme.classes.uploaderDragndrop"
        :draggingClass="theme.classes.uploaderDragndropOver"
        :title="__('elements.gallery.dndTitle')"
        :description="__('elements.gallery.dndDescription')"
        @click="handleClick"
        @drop="handleFileDropped"
      />

      <div
        v-sortable="sortable"
        :class="[theme.classes.elementGroupContainer, theme.classes.uploaderPreviews, theme.classes.uploaderPreviewsView + this.view, {[theme.classes.uploaderPreviewsSortable]: sort}]"
      >
        <Element v-for="(schema, index) in instances"
          :is="schema.type + '-element'"
          :schema="schema"
          :name="index"
          :parent="heritage"
          :key="schema.key"
          @click="handleImageClick(index)"
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

      <Lightbox
        :images="images"
        ref="lightbox$"
      />
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>
</template>

<script>
  import GalleryElement from './../../../../components/elements/GalleryElement'

  import SortableDirective from './../../../../directives/sortable'
  import Lightbox from './../../../../components/wrappers/Lightbox'

  export default {
    mixins: [GalleryElement],
    components: {
      Lightbox,
    },
    directives: {
      sortable: SortableDirective,
    },
  }
</script>