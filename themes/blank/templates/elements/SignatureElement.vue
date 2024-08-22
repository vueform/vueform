<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div
        :class="classes.wrapper"
        :style="wrapperStyle"
        :tabindex="isDisabled ? undefined : 0"
        :aria-label="wrapperAriaLabel"
        :id="id"
        @keydown.tab.escape="handleMouseLeave"
        @mouseleave="handleMouseLeave"
        ref="input"
      >

        <!-- Line -->
        <hr
          v-show="showLine"
          :class="classes.line"
          :style="lineStyle"
          aria-hidden="true"
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
          <!-- Actions -->
          <div :class="classes.actions">

            <!-- Mode -->
            <ElementAddonOptions
              v-show="showModes"
              :options="resolvedModes"
              :placeholder="''"
              position="bottom"
              relaxed
              :aria="modeSelectorAria"
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
              :aria="fontSelectorAria"
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
                :title="undoText"
                role="button"
                :tabindex="undosLeft ? tabindex : undefined "
                :aria-label="undoText"
                @click.stop="handleUndo"
                @keydown.space.enter.prevent="handleUndo"
              />

              <!-- Redo -->
              <div
                :class="classes.redo"
                :title="redoText"
                role="button"
                :tabindex="redos.length ? tabindex : undefined"
                :aria-label="redoText"
                @click.stop="handleRedo"
                @keydown.space.enter.prevent="handleRedo"
              />
            </div>
          </div>

          <!-- Input -->
          <input
            v-show="showInput"
            :value="text"
            type="text"
            spellcheck="false"
            :class="classes.input"
            :disabled="isDisabled"
            :readonly="isReadonly"
            :style="inputStyle"
            :aria-label="inputAriaLabel"
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
                {{ dndText }}
              </div>

              <!-- Select button -->
              <div
                :class="classes.uploadButton"
                :tabindex="tabindex"
                role="button"
                :aria-label="uploadButtonText"
                @click="handleSelectClick"
                @keydown.space.enter.prevent="handleSelectClick"
                ref="uploadButton$"
              >{{ uploadButtonText }}</div>

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
            :tabindex="tabindex"
            :aria-label="padAriaLabel"
            ref="pad$"
          />

          <!-- Colors -->
          <div
            v-show="showColors"
            :class="classes.colors"
            role="listbox"
          >
            <svg
              v-for="c in colors"
              width="12"
              height="12"
              :class="classes.color(c)"
              role="option"
              :tabindex="tabindex"
              :aria-label="`${colorAriaLabel} ${c}`"
              :aria-selected="c === color"
              @click="handleColorSelect(c)"
              @keydown.space.enter.prevent="handleColorSelect(c)"
            >
              <circle cx="6" cy="6" r="6" :fill="c" />
            </svg>
          </div>
        </div>

        <!-- Clear -->
        <div
          v-if="showClear"
          :class="classes.clearWrapper"
        >
          <div
            :class="classes.clear"
            :tabindex="tabindex"
            role="button"
            :aria-label="clearAriaLabel"
            @click="handleClear"
            @keydown.enter.space.prevent="handleClear"
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