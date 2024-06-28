<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div
        :class="classes.wrapper"
        :style="wrapperStyle"
        ref="input"
      >

        <!-- Line -->
        <hr
          v-show="showLine"
          :class="classes.line"
          :style="lineStyle"
        />

        <!-- Loaded preview -->
        <div
          v-show="uploaded"
          :class="classes.loadedWrapper"
        >
          <img
            :src="value"
            :alt="imgAltText"
            :title="imgTitleText"
            :class="classes.loadedImg"
          />
        </div>

        <!-- Not loaded actions -->
        <div
          v-show="!uploaded"
          :class="classes.innerWrapper"
        >
          <!-- Input -->
          <input
            v-show="showInput"
            :value="text"
            type="text"
            spellcheck="false"
            :class="classes.input"
            :disabled="isDisabled"
            :readonly="readonly"
            :style="inputStyle"
            @input="handleInput"
            @select="handleInput"
            ref="input$"
          />

          <!-- Placeholder -->
          <div 
            v-show="showPlaceholder"
            :class="classes.placeholder"
            v-html="placeholderText"
          />

          <!-- Upload container -->
          <div
            v-show="showUploadContainer"
            :class="classes.uploadContainer"
            ref="upload$"
          >
            <!-- File upload -->
            <div
              v-show="showUpload"
              :class="classes.uploadWrapper"
            >
              <!-- DnD text -->
              <div
                v-if="droppable"
                :class="classes.dndText"  
              >
                Drop an image here or
              </div>

              <!-- Select button -->
              <div
                :class="classes.uploadButton"
                @click="handleSelectClick"
              >Select image</div>

              <!-- Hidden file input -->
              <input
                v-show="false"
                type="file"
                :accept="fileAccept"
                @change="handleFileSelect"
                ref="file$"
              />
            </div>

            <!-- Preview -->
            <canvas
              v-show="showPreview"
              :width="uploadWidth"
              :height="uploadHeight"
              :class="classes.uploadPreview"
              ref="preview$"
            />
          </div>

          <!-- Pad -->
          <canvas
            v-show="showPad"
            :width="padWidth"
            :height="padHeight"
            :style="padStyle"
            :class="classes.pad"
            ref="pad$"
          />

          <!-- Colors -->
          <div
            v-show="showColors"
            :class="classes.colors"
          >
            <svg
              v-for="c in colors"
              width="12"
              height="12"
              :class="classes.color(c)"
              @click="handleColorSelect(c)"
            >
              <circle cx="6" cy="6" r="6" :fill="c" />
            </svg>
          </div>

          <!-- Actions -->
          <div :class="classes.actions">

            <!-- Mode -->
            <ElementAddonOptions
              v-show="showModes"
              :options="resolvedModes"
              :placeholder="''"
              position="bottom"
              relaxed
              @select="handleModeSelect"
              ref="mode$"
            />

            <!-- Fonts -->
            <ElementAddonOptions
              v-show="showFonts"
              :options="resolvedFonts"
              :placeholder="fontText"
              position="bottom"
              relaxed
              @select="handleFontSelect"
              ref="font$"
            />

            <!-- Undos -->
            <div
              v-show="showUndos"
              :class="classes.undosWrapper"
            >
              <!-- Undo -->
              <div
                :class="classes.undo"
                @click.stop="handleUndo"
              />

              <!-- Redo -->
              <div
                :class="classes.redo"
                @click.stop="handleRedo"
              />
            </div>
          </div>
        </div>

        <!-- Clear -->
        <div
          v-if="showClear"
          :class="classes.clearWrapper"
        >
          <div
            :class="classes.clear"
            @click="handleClear"
          ></div>
        </div>
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'SignatureElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>