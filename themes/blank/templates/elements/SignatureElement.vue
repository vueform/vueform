<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div class="bg-gray-50 relative" ref="input" :style="wrapperStyle">

        <!-- Line -->
        <hr
          v-show="showLine"
          class="absolute top-1/2 left-6 right-6 border-gray-300"
          :style="lineStyle"
        />

        <!-- Loaded preview -->
        <div
          v-show="uploaded"
          class="absolute left-4 right-4 top-0 bottom-0 flex items-center justify-center"
        >
          <img :src="value" />
        </div>

        <!-- Not loaded actions -->
        <div
          v-show="!uploaded"
        >
          <!-- Input -->
          <input
            v-show="showInput"
            v-model="text"
            type="text"
            spellcheck="false"
            class="bg-transparent absolute top-1/2 transform -translate-y-1/2 pr-5 text-center indent-5 transition-colors left-4 right-4"
            :style="inputStyle"
            ref="input$"
          />

          <!-- Placeholder -->
          <div 
            v-show="showPlaceholder"
            class="absolute left-0 right-0 bottom-[50%] transform translate-y-1/2 pointer-events-none text-gray-400 text-center"
            v-html="placeholderText"
          />

          <!-- Upload container -->
          <div
            v-show="mode === 'upload'"
            :class="[
              'absolute left-9 right-9 bottom-1/2 transform translate-y-1/2 transition-opacity',
              dragging ? 'opacity-50' : 'opacity-100'
            ]"
            ref="upload$"
          >
            <!-- File upload -->
            <div
              v-show="showUpload"
              :class="[
                'flex flex-col items-center justify cente text-gray-400 text-center',
                image && !drawn ? 'opacity-60 pointer-events-none' : null,
              ]"
            >
              <!-- DnD text -->
              <div v-if="canDrop">
                Drop an image here or
              </div>

              <!-- Select button -->
              <div
                class="bg-primary-500 text-white rounded px-3 py-2 mt-1 cursor-pointer transition-transform hover:scale-[1.05]"
                @click="handleSelectClick"
              >Select image</div>

              <!-- Hidden file input -->
              <input
                v-show="false"
                type="file"
                @change="handleFileSelect"
                ref="file$"
              />
            </div>

            <!-- Preview -->
            <canvas
              v-show="showPreview"
              :width="canvasWidth"
              :height="canvasHeight"
              ref="preview$"
            />
          </div>

          <!-- Colors -->
          <div
            v-show="showColors"
            class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-row gap-2"
          >
            <svg
              v-for="c in colors"
              width="12"
              height="12"
              :class="[
                'transform transition-transform cursor-pointer',
                color === c ? 'scale-[1.4]' : 'hover:scale-[1.4] '
              ]"
              @click="handleColorSelect(c)"
            >
              <circle cx="6" cy="6" r="6" :fill="c" />
            </svg>
          </div>

          <!-- Actions -->
          <div class="absolute top-2 left-3 right-3 flex items-center justify-between opacity-50 transition-opacity hover:opacity-100">

            <!-- Mode -->
            <ElementAddonOptions
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
          </div>
        </div>

        <!-- Clear -->
        <div
          v-if="showClear"
          class="absolute top-1/2 transform right-6 text-sm text-gray-900"
          :style="clearStyle"
        >
          <div
            class="mask-bg mask-form-remove bg-gray-900 w-3 h-4 py-px box-content inline-block cursor-pointer"
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