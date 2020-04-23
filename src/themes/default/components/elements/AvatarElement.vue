<template>
  <component :is="theme.components.BaseElementLayout"
    :el$="el$"
  >
    <template slot="field">
      <slot name="prefix"></slot>
      
      <!-- Actual input field -->
      <input
        type="file"
        :disabled="disabled"
        @change="handleFileSelected"
        ref="input"
      />

      <!-- Image preview -->
      <slot name="preview" :el$="el$" :remove="handleRemove" :add="handleClick" :preview="handleImageClick">
        <component v-if="slots.preview" :is="slots.preview" :el$="el$" :remove="handleRemove" :add="handleClick" :preview="handleImageClick" />
        <template v-else>
          <div :class="theme.classes.avatarPreview">
            <a href="" :class="theme.classes.avatarImage"
              v-if="file"
              @click.prevent="handleImageClick"
              :style="{ backgroundImage: `url('${file && file.preview ? file.preview : ''}')` }"
            ></a>

            <a href="" :class="theme.classes.avatarPlaceholder"
              v-else
              @click.prevent="handleClick"
            ></a>

            <a href=""
              v-if="!disabled && file"
              :class="theme.classes.uploaderIconRemove"
              @click.prevent="handleRemove"
            ></a>
          </div>
        </template>
      </slot>

      <Lightbox
        :images="images"
        ref="lightbox$"
      />

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
  import AvatarElement from './../../../../components/elements/AvatarElement'

  import ImageElement from './ImageElement'

  import Lightbox from './../../../../components/wrappers/Lightbox'

  export default {
    mixins: [AvatarElement],
    components: {
      Lightbox,
    },
    render: ImageElement.render,
  }
</script>