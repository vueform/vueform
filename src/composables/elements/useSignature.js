import { computed, toRefs, ref, onMounted, watch, nextTick, onBeforeUnmount } from 'vue'
import SignaturePad from 'signature_pad'
import debounce from './../../utils/debounce'

export default function (props, context, dependencies)
{
  const {
    fonts,
    colors,
    modes,
    accept,
    maxWidth,
    height,
    readonly,
    maxFontSize,
    minFontSize,
    canClear,
    line,
    placeholder,
    autoload,
    maxSize,
    canUndo,
    columns,
    uploadWidth,
    uploadHeight,
    canDrop,
    valueFormat,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const {
    el$,
    form$,
    input,
    isDisabled,
    value,
    Placeholder,
    available,
    path,
  } = dependencies

  // ================ DATA ================
   
  /**
   * The signature mode selector.
   *
   * @type {ElementAddonOptions}
   */
  const mode$ = ref(null)

  /**
   * The font style selector.
   *
   * @type {ElementAddonOptions}
   */
  const font$ = ref(null)

  /**
   * The input field when [`mode`](#property-mode) is `type`.
   *
   * @type {HTMLInputElement}
   */
  const input$ = ref(null)

  /**
   * The canvas that shows the preview of an uploaded signature when [`mode`](#property-mode) is `upload`.
   *
   * @type {HTMLCanvasElement}
   */
  const preview$ = ref(null)

  /**
   * The canvas that allows drawning signature when [`mode`](#property-mode) is `draw`.
   *
   * @type {HTMLCanvasElement}
   */
  const pad$ = ref(null)

  /**
   * The file input field when [`mode`](#property-mode) is `upload` (it's invisible).
   *
   * @type {HTMLInputElement}
   */
  const file$ = ref(null)

  /**
   * The DOM that contains upload related parts.
   *
   * @type {HTMLElement}
   */
  const upload$ = ref(null)

  /**
   * The upload button.
   *
   * @type {HTMLElement}
   */
  const uploadButton$ = ref(null)

  /**
   * The current signature mode (`draw`, `type` or `upload`).
   *
   * @type {string}
   */
  const mode = ref(null)

  /**
   * The current font family.
   *
   * @type {string}
   */
  const fontFamily = ref(null)

  /**
   * The current font weight.
   *
   * @type {string}
   */
  const fontWeight = ref(null)

  /**
   * The current font size.
   *
   * @type {number}
   */
  const fontSize = ref(maxFontSize.value)

  /**
   * The hex code of the current signature color.
   *
   * @type {string}
   */
  const color = ref(null)

  /**
   * The input value used when [`mode`](#property-mode) is `type`.
   *
   * @type {string}
   */
  const text = ref(null)

  /**
   * The [Signature Pad](https://github.com/szimek/signature_pad) instance.
   *
   * @type {object}
   */
  const pad = ref(null)

  /**
   * The file (image) selected by the user when [`mode`](#property-mode) is `upload`.
   *
   * @type {File}
   */
  const image = ref(null)

  /**
   * Whether the image preview is already created when [`mode`](#property-mode) is `upload`.
   *
   * @type {boolean}
   */
  const created = ref(false)

  /**
   * Whether the image preview is being created when [`mode`](#property-mode) is `upload`.
   *
   * @type {boolean}
   */
  const creating = ref(false)

  /**
   * Whether a file is being dragged over the element when [`mode`](#property-mode) is `upload`.
   *
   * @type {boolean}
   */
  const dragging = ref(false)

  /**
   * Whether the canvas contains any drawn signature when [`mode`](#property-mode) is `draw`.
   *
   * @type {boolean}
   */
  const drawn = ref(false)

  /**
   * Whether a signature is currently being drawn when [`mode`](#property-mode) is `draw`.
   *
   * @type {boolean}
   */
  const drawing = ref(false)

  /**
   * The list of available redos.
   *
   * @type {array}
   */
  const redos = ref([])

  /**
   * The number available undos.
   *
   * @type {number}
   */
  const undosLeft = ref(0)

  /**
   * The current width of the signature element.
   *
   * @type {number}
   */
  const width = ref(0)

  /**
   * The last width of the element.
   *
   * @type {number}
   */
  const lastWidth = ref(0)

  /**
   * Whether the mouse is over after starting to draw a signature.
   * 
   * @type {boolean}
   */
  const isMouseOver = ref(false)

  /**
   * Whether the mouse is over after starting to draw a signature.
   * 
   * @type {number}
   */
  const debouncer = ref(0)

  // ============== COMPUTED ==============

  /**
   * The available font families.
   *
   * @type {array}
   */
  const fontFamilies = computed(() => {
    return fonts.value.map(f => f.split('@')[0].replace('!', ''))
  })

  /**
   * The available font weights.
   *
   * @type {array}
   */
  const fontWeights = computed(() => {
    return fonts.value.map(f => f.split('@')[1] || 400)
  })

  /**
   * Whether a signature (as URL or base64) was loaded to the element.
   *
   * @type {boolean}
   */
  const uploaded = computed(() => {
    if (!value.value || typeof value.value !== 'string') {
      return false
    }

    const isBase64String = value.value.startsWith('data:')
    const isUrl = !isBase64String

    if (isUrl) {
      return true
    }

    // Base64 is only uploaded if no drawing/typing/upload is active
    // This prevents treating actively created signatures as "uploaded" during creation
    if (isBase64String) {
      return !drawn.value && !text.value && !created.value
    }

    return false
  })

  /**
   * Whether the uploaded file is being processed for preview.
   *
   * @type {boolean}
   */
  const processing = computed(() => {
    return image.value && !created.value
  })

  /**
   * Whether `drop` is enabled and browser supports dragging.
   *
   * @type {boolean}
   */
  const droppable = computed(() => {
    let div = document.createElement('div')
    
    return (('draggable' in div)
        || ('ondragstart' in div && 'ondrop' in div))
      && 'FormData' in window
      && 'FileReader' in window
      && canDrop.value
  })

  /**
   * The list of [`modes`](#option-modes) formatted for mode selector.
   *
   * @type {array}
   */
  const resolvedModes = computed(() => {
    return modes.value.filter(m => ['type', 'draw', 'upload'].indexOf(m) !== -1).map((mode, i) => {
      return {
        label: form$.value.translations.vueform.elements.signature[mode],
        value: mode,
        index: i,
      }
    })
  })

  /**
   * The list of [`fonts`](#option-fonts) formatted for fonts selector.
   *
   * @type {array}
   */
  const resolvedFonts = computed(() => {
    return fontFamilies.value.map((font, i) => ({
      label: `<div><span style="font-family: ${font}; font-weight: ${fontWeights.value[i]}" aria-hidden="true">${
        text.value?.trim() || form$.value.translations.vueform.elements.signature.fontPlaceholder
      }</span><span style="position: absolute; left: -9999px; opacity: 0;">${font}</span></div>`,
      value: i,
      index: i,
    }))
  })

  /**
   * The list of MIME types formatted for the file input attribute.
   *
   * @type {string}
   */
  const fileAccept = computed(() => {
    return accept.value.reduce((prev, curr) => {
      switch (curr) {
        case 'jpg':
        case 'jpeg':
          prev.push('image/jpeg')
          break

        case 'png':
          prev.push('image/png')
          break

        case 'svg':
          prev.push('image/svg+xml')
          break
      }

      return prev
    }, []).join(', ')
  })

  /**
   * Whether the signature line should be shown.
   *
   * @type {boolean}
   */
  const showLine = computed(() => {
    return mode.value !== 'upload' && line.value
  })

  /**
   * Whether the signature text input should be shown.
   *
   * @type {boolean}
   */
  const showInput = computed(() => {
    return !uploaded.value && mode.value === 'type'
  })

  /**
   * Whether the signature placeholder should be shown.
   *
   * @type {boolean}
   */
  const showPlaceholder = computed(() => {
    return (
      (!text.value && mode.value === 'type') ||
      (!drawn.value && mode.value === 'draw')
    ) && placeholder.value !== false
  })

  /**
   * Whether the upload container should be shown.
   *
   * @type {boolean}
   */
  const showUploadContainer = computed(() => {
    return mode.value === 'upload'
  })

  /**
   * Whether the file upload controllers should be shown.
   *
   * @type {boolean}
   */
  const showUpload = computed(() => {
    return mode.value === 'upload' && !created.value
  })

  /**
   * Whether file upload preview should be shown.
   *
   * @type {boolean}
   */
  const showPreview = computed(() => {
    return mode.value === 'upload' && created.value
  })

  /**
   * Whether signature draw pad should be shown.
   *
   * @type {boolean}
   */
  const showPad = computed(() => {
    return mode.value === 'draw'
  })

  /**
   * Whether undo and redo buttons should be shown.
   *
   * @type {boolean}
   */
  const showUndos = computed(() => {
    return mode.value === 'draw' && (redos.value.length || drawn.value) && !drawing.value && canUndo.value
  })
  
  /**
   * Whether color selector should be shown.
   *
   * @type {boolean}
   */
  const showColors = computed(() => {
    return (
      (mode.value === 'upload' && created.value) ||
      mode.value === 'type' || mode.value === 'draw'
    ) && !drawing.value && colors.value.length > 1 && !isMouseOver.value
  })
  
  /**
   * Whether mode selector should be shown.
   *
   * @type {boolean}
   */
  const showModes = computed(() => {
    return !drawing.value && modes.value.length > 1
  })
  
  /**
   * Whether font selector should be shown.
   *
   * @type {boolean}
   */
  const showFonts = computed(() => {
    return mode.value === 'type' && resolvedFonts.value.length > 1
  })

  /**
   * Whether clear button should be shown.
   *
   * @type {boolean}
   */
  const showClear = computed(() => {
    return (
      (mode.value === 'type' && text.value) ||
      (mode.value === 'upload' && created.value) ||
      (mode.value === 'draw' && drawn.value) ||
      uploaded.value
    ) && !isDisabled.value && !readonly.value && !drawing.value && canClear.value
  })

  /**
   * The tabindex of focusable DOM parts.
   * 
   * @type {number|undefined}
   */
  const tabindex = computed(() => {
    return isDisabled.value || readonly.value ? undefined : 0
  })

  /**
   * The text of the placeholder.
   *
   * @type {string}
   */
  const placeholderText = computed(() => {
    return form$.value.$vueform.sanitize(Placeholder.value || form$.value.translations.vueform.elements.signature.placeholder)
  })

  /**
   * The text of the drag and drop area.
   *
   * @type {string}
   */
  const dndText = computed(() => {
    return 'Drop an image here or'
  })

  /**
   * The text of the upload button.
   *
   * @type {string}
   */
  const uploadButtonText = computed(() => {
    return 'Select image'
  })

  /**
   * The text of the img alt attribute.
   *
   * @type {string}
   */
  const imgAltText = computed(() => {
    return form$.value.translations.vueform.elements.signature.imgAlt
  })

  /**
   * The text of the img title attribute.
   *
   * @type {string}
   */
  const imgTitleText = computed(() => {
    return form$.value.translations.vueform.elements.signature.imgTitle
  })

  /**
   * The current text of font selector options.
   *
   * @type {string}
   */
  const fontText = computed(() => {
    return form$.value.translations.vueform.elements.signature.font
  })

  /**
   * The undo button's title.
   *
   * @type {string}
   */
  const undoText = computed(() => {
    return form$.value.translations.vueform.elements.signature.undo
  })

  /**
   * The redo button's title.
   *
   * @type {string}
   */
  const redoText = computed(() => {
    return form$.value.translations.vueform.elements.signature.redo
  })

  /**
   * The aria attributes of the mode selector.
   *
   * @type {object}
   */
  const modeSelectorAria = computed(() => {
    return {
      'aria-label': form$.value.translations.vueform.elements.signature.modeSelectorAriaLabel
    }
  })

  /**
   * The aria attributes of the font selector.
   *
   * @type {object}
   */
  const fontSelectorAria = computed(() => {
    return {
      'aria-label': form$.value.translations.vueform.elements.signature.fontSelectorAriaLabel,
    }
  })

  /**
   * The aria label of the signature wrapper.
   *
   * @type {string}
   */
  const wrapperAriaLabel = computed(() => {
    return form$.value.translations.vueform.elements.signature.wrapperAriaLabel
  })

  /**
   * The aria label of the text input field.
   *
   * @type {string}
   */
  const inputAriaLabel = computed(() => {
    return form$.value.translations.vueform.elements.signature.inputAriaLabel
  })

  /**
   * The aria label of the signature pad.
   *
   * @type {string}
   */
  const padAriaLabel = computed(() => {
    return form$.value.translations.vueform.elements.signature.padAriaLabel
  })

  /**
   * The aria label of the clear button.
   *
   * @type {string}
   */
  const clearAriaLabel = computed(() => {
    return form$.value.translations.vueform.elements.signature.clearAriaLabel
  })

  /**
   * The aria label of a color.
   *
   * @type {string}
   */
  const colorAriaLabel = computed(() => {
    return form$.value.translations.vueform.elements.signature.colorAriaLabel
  })

  /**
   * The width of signature pad.
   *
   * @type {number}
   */
  const padWidth = computed(() => {
    return width.value * 2
  })

  /**
   * The height of signature pad.
   *
   * @type {number}
   */
  const padHeight = computed(() => {
    return height.value * 2
  })

  /**
   * The style attributes of the signature pad.
   *
   * @type {object}
   */
  const padStyle = computed(() => {
    return {
      width: `${width.value}px`,
      height: `${height.value}px`,
    }
  })

  /**
   * The style attributes of the signature wrapper.
   *
   * @type {object}
   */
  const wrapperStyle = computed(() => {
    let style = {
      height: `${height.value}px`,
    }

    if (maxWidth.value !== 'auto') {
      style.maxWidth = `${maxWidth.value}px`
    }

    return style
  })

  /**
   * The style attributes of the signature input when [`mode`](#property-mode) is `type`.
   *
   * @type {object}
   */
  const inputStyle = computed(() => {
    return {
      fontFamily: fontFamily.value,
      fontWeight: fontWeight.value,
      fontSize: `${fontSize.value}px`,
      lineHeight: `${fontSize.value}px`,
      color: color.value,
      '-webkit-font-smoothing': 'auto',
    }
  })

  /**
   * The style attributes of the signature line.
   *
   * @type {object}
   */
  const lineStyle = computed(() => {
    return {
      transform: `translateY(calc(${fontSize.value / 2.2}px))`
    }
  })

  // =============== METHODS ==============

  /**
   * Initalizes the [Signature Pad](https://github.com/szimek/signature_pad).
   *
   * @returns {void}
   */
  const initPad = () => {
    if (pad.value || !pad$.value || (modes.value.indexOf('draw') === -1 && modes.value.length) || !available.value) {
      return
    }

    if (!width.value) {
      setWidth()
    }

    nextTick(() => {

      pad.value = new SignaturePad(pad$.value)

      const ctx = pad$.value.getContext('2d')
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(2, 2)

      setDrawColor()

      pad.value.addEventListener('beginStroke', (e) => {
        if (isDisabled.value || readonly.value) {
          e.preventDefault()
          return
        }

        isMouseOver.value = true
        drawn.value = true
        drawing.value = true
        redos.value = []
      })

      pad.value.addEventListener('endStroke', () => {
        drawing.value = false
        undosLeft.value++

        debounceTransform(drawingToImage, 500)
      })
      
    })
  }

  /**
   * Resizes the signature pad to the current max width and clears any drawings.
   *
   * @returns {void}
   */
  const resizePad = () => {
    setWidth()

    nextTick(() => {
      const ctx = pad$.value.getContext('2d')
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(2, 2)
      clearDrawnSignature()
    })
  }

  /**
   * Sets the element value as Blob from the current drawing.
   *
   * @returns {void}
   */
  const drawingToImage = () => {
    return new Promise((resolve, reject) => {
      const originalCanvas = pad$.value
      const originalCtx = originalCanvas.getContext('2d')

      // Get the image data from the canvas
      const imageData = originalCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height)
      const data = imageData.data

      // Find the bounding box of the drawing
      let minX = originalCanvas.width, minY = originalCanvas.height, maxX = 0, maxY = 0

      for (let y = 0; y < originalCanvas.height; y++) {
        for (let x = 0; x < originalCanvas.width; x++) {
          const index = (y * originalCanvas.width + x) * 4
          if (data[index + 3] > 0) { // alpha channel > 0 means there's a drawn pixel
            if (x < minX) minX = x
            if (y < minY) minY = y
            if (x > maxX) maxX = x
            if (y > maxY) maxY = y
          }
        }
      }

      // Check if there is any drawing
      if (minX > maxX || minY > maxY) {
        resolve()
        return
      }

      // Create a new canvas for the bounding box of the drawing
      const drawingWidth = maxX - minX + 1
      const drawingHeight = maxY - minY + 1
      const drawingCanvas = document.createElement('canvas')
      const drawingCtx = drawingCanvas.getContext('2d')

      drawingCanvas.width = drawingWidth
      drawingCanvas.height = drawingHeight

      drawingCtx.putImageData(imageData, -minX, -minY)

      // Create a new canvas for the resized image
      const resizedCanvas = document.createElement('canvas')
      const resizedCtx = resizedCanvas.getContext('2d')
      const resizedWidth = uploadWidth.value
      const resizedHeight = uploadHeight.value

      resizedCanvas.width = resizedWidth
      resizedCanvas.height = resizedHeight

      // Calculate the new target dimensions while maintaining the aspect ratio
      let targetWidth = drawingWidth
      let targetHeight = drawingHeight

      if (targetWidth > resizedWidth || targetHeight > resizedHeight) {
        if (targetWidth / targetHeight > resizedWidth / resizedHeight) {
          targetWidth = resizedWidth
          targetHeight = Math.floor((resizedWidth / drawingWidth) * drawingHeight)
        } else {
          targetHeight = resizedHeight
          targetWidth = Math.floor((resizedHeight / drawingHeight) * drawingWidth)
        }
      }

      const offsetX = Math.floor((resizedWidth - targetWidth) / 2)
      const offsetY = Math.floor((resizedHeight - targetHeight) / 2)

      // Draw the original canvas content onto the resized canvas with proper scaling
      resizedCtx.drawImage(drawingCanvas, 0, 0, drawingWidth, drawingHeight, offsetX, offsetY, targetWidth, targetHeight)

      // Convert the resized canvas to Blob or base64
      if (valueFormat.value === 'base64') {
        value.value = resizedCanvas.toDataURL('image/png')
        resizedCanvas.remove()
        resolve()
      } else {
        resizedCanvas.toBlob(function(blob) {
          value.value = blob
          resolve()

          // Clean up the resized canvas
          resizedCanvas.remove()
        }, 'image/png')
      }
    })
  }


  /**
   * Sets the element value as Blob from the currently typed signature.
   *
   * @returns {void}
   */
  const typingToImage = () => {
    return new Promise((resolve, reject) => {
      if (!text.value) {
        resolve()
        return
      }

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      const displayWidth = uploadWidth.value
      const displayHeight = uploadHeight.value

      canvas.width = displayWidth
      canvas.height = displayHeight

      nextTick(() => {
        ctx.clearRect(0, 0, displayWidth, displayHeight)

        // Determine the maximum font size that fits within the canvas
        let fontSize = displayHeight / 2 // Start with a large font size
        ctx.font = `${fontWeight.value} ${fontSize}px ${fontFamily.value}`

        // Measure the text width and adjust font size to fit within the canvas
        let textWidth = ctx.measureText(text.value).width
        while (textWidth > displayWidth - 10 && fontSize > 10) { // 10px padding
          fontSize -= 1
          ctx.font = `${fontWeight.value} ${fontSize}px ${fontFamily.value}`
          textWidth = ctx.measureText(text.value).width
        }

        ctx.fillStyle = color.value
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        ctx.fillText(text.value, displayWidth / 2, displayHeight / 2)

        // Convert canvas to Blob or base64
        if (valueFormat.value === 'base64') {
          value.value = canvas.toDataURL('image/png')
          canvas.remove()
          resolve()
        } else {
          canvas.toBlob(function(blob) {
            value.value = blob
            canvas.remove()
            resolve()
          }, 'image/png')
        }
      })
    })
  }
  
  /**
   * Sets the element value as Blob from the currently uploaded signature.
   *
   * @returns {void}
   */
  const uploadToImage = () => {
    if (!image.value) {
      return
    }
  
    const file = image.value
    const reader = new FileReader();

    creating.value = true

    reader.onload = function(e) {
      const img = new Image()

      img.onload = function() {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        
        // Set canvas size to the image size
        canvas.width = img.width
        canvas.height = img.height
        
        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0)

        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data

        // Get the selected color
        const colorHex = color.value
        const colorRGB = hexToRgb(colorHex)

        // Remove the background and change signature color to the selected color
        const threshold = 220
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]

          // If the pixel is light, make it transparent
          if (r > threshold && g > threshold && b > threshold) {
            data[i + 3] = 0
          } else {
            // Change the color to the selected color
            data[i] = colorRGB.r
            data[i + 1] = colorRGB.g
            data[i + 2] = colorRGB.b
          }
        }

        // Put the processed image data back on the canvas
        ctx.putImageData(imageData, 0, 0)

        // Draw the processed image on the main canvas
        const mainCanvas = preview$.value
        const mainCtx = mainCanvas.getContext('2d')

        // Clear the main canvas
        mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height)
        
        // Calculate the dimensions to keep aspect ratio within uploadWidth x uploadHeight
        const targetWidth = uploadWidth.value
        const targetHeight = uploadHeight.value
        let newWidth = targetWidth
        let newHeight = newWidth / (img.width / img.height)
        if (newHeight > targetHeight) {
          newHeight = targetHeight
          newWidth = newHeight * (img.width / img.height)
        }
        
        // Center the image on the main canvas
        const xOffset = (targetWidth - newWidth) / 2
        const yOffset = (targetHeight - newHeight) / 2

        // Draw the image on the main canvas
        mainCtx.drawImage(canvas, 0, 0, img.width, img.height, xOffset, yOffset, newWidth, newHeight)

        // Convert the main canvas to Blob or base64
        if (valueFormat.value === 'base64') {
          value.value = mainCanvas.toDataURL('image/png')
          created.value = true
          creating.value = false
          canvas.remove()
        } else {
          mainCanvas.toBlob(function(blob) {
            value.value = blob

            created.value = true
            creating.value = false

            // Clean up the helper canvas
            canvas.remove()
          }, 'image/png')
        }
      }

      img.src = e.target.result
    }
      
    reader.readAsDataURL(file)
  }

  /**
   * Undoes the last drawing when [`mode`](#property-mode) is `draw`.
   *
   * @returns {void}
   */
  const undo = () => {
    if (!pad.value) {
      return
    }

    var data = pad.value.toData()

    if (!data.length) {
      return
    }

    redos.value.push(data.pop())

    pad.value.fromData(data)

    if (!data.length) {
      drawn.value = false
      value.value = null
    }

    undosLeft.value = data.length

    if (data.length > 0) {
      debounceTransform(drawingToImage, 500)
    }
  }

  /**
   * Redoes the last drawing when [`mode`](#property-mode) is `draw`.
   *
   * @returns {void}
   */
  const redo = () => {
    if (!pad.value || !redos.value.length) {
      return
    }

    var data = pad.value.toData() || []

    data.push(redos.value.pop())

    pad.value.fromData(data)

    drawn.value = true

    setDrawColor()

    undosLeft.value = data.length

    debounceTransform(drawingToImage, 500)
  }

  /**
   * Clears the signature in all forms (drawn, typed, uploaded, loaded).
   *
   * @returns {void}
   */
  const clearSignature = () => {
    text.value = null
    image.value = null
    created.value = false
    value.value = null
    clearDrawnSignature()
  }

  /**
   * Clears the drawn signature.
   *
   * @returns {void}
   */
  const clearDrawnSignature = () => {
    pad.value?.clear()
    drawn.value = false
    redos.value = []
  }

  /**
   * Loads Google Fonts dynamically by adding `<link>` tags to `<head>`.
   *
   * @returns {void}
   */
  const loadFonts = () => {
    fonts.value.forEach((font) => {
      const parts = font.split('@')
      const skip = parts[0].substr(0,1) === '!'

      if (!skip) {
        const family = parts[0].replace('!', '').replace(/\s/g, '+')
        const weight = parts[1] || 400
        const id = `font-${family}`

         if (!document.getElementById(id)) {
          const link = document.createElement('link')
          link.id = id
          link.rel = 'stylesheet'
          link.href = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`;
          document.head.appendChild(link)
        }
      }
    })
  }

  /**
   * Sets the drawing color of the signature pad.
   *
   * @returns {void}
   */
  const setDrawColor = () => {
    const { r, g, b } = hexToRgb(color.value)
    pad.value.penColor = `rgb(${r}, ${g}, ${b})`

    if (drawn.value) {
      pad.value.fromData(pad.value.toData().map(d => {
        d.penColor = pad.value.penColor
        return d
      }))
    }
  }

  /**
   * Adjusts the typed signature's font size to fit into the input without overflow until [`minSize`](#option-min-size) or [`maxSize`](#option-max-size) is reached.
   *
   * @returns {void}
   */
  const adjustFontSize = () => {
    if (!text.value) {
      fontSize.value = maxFontSize.value
      return
    }

    const ua = navigator.userAgent.toLowerCase();
    const isSafari = (ua.indexOf('safari') != -1 && ua.indexOf('chrome') == -1 && ua.indexOf('android') == -1)

    const inputElement = input$.value
    const styles = window.getComputedStyle(inputElement)
    const textIndent = parseFloat(styles.textIndent)
    const paddingRight = parseFloat(styles.paddingRight)
    const maxWidth = Math.ceil(inputElement.getBoundingClientRect().width) - textIndent

    let size = fontSize.value

    while (inputElement.scrollWidth + (isSafari ? paddingRight : 0) - textIndent > maxWidth && size > minFontSize.value) {
      size--
      inputElement.style.fontSize = size + 'px'
    }

    while (inputElement.scrollWidth + (isSafari ? paddingRight : 0) - textIndent <= maxWidth && size < maxFontSize.value) {
      inputElement.style.fontSize = (size + 1) + 'px'

      if (inputElement.scrollWidth + (isSafari ? paddingRight : 0) - textIndent > maxWidth) {
        inputElement.style.fontSize = size + 'px'
        break
      }

      size++
    }

    fontSize.value = size
  }

  /**
   * Converts a HEX color to RGB.
   *
   * @param {string} hex* the color in HEX format
   * @returns {string}
   */
  const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, '')
    let bigint = parseInt(hex, 16)
    let r = (bigint >> 16) & 255
    let g = (bigint >> 8) & 255
    let b = bigint & 255
    return { r, g, b }
  }

  /**
   * Converts a Blob to a base64 data URI string.
   *
   * @param {Blob} blob* the Blob to convert
   * @returns {Promise<string>}
   */
  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  }

  /**
   * Converts a base64 data URI string to a Blob.
   *
   * @param {string} base64* the base64 data URI string
   * @returns {Blob}
   */
  const base64ToBlob = (base64) => {
    const parts = base64.split(',')
    const contentType = parts[0].match(/:(.*?);/)[1]
    const raw = atob(parts[1])
    const rawLength = raw.length
    const uInt8Array = new Uint8Array(rawLength)

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i)
    }

    return new Blob([uInt8Array], { type: contentType })
  }

  /**
   * Checks if a file complies with [`accept`](#option-accept) list and throws an alert if not.
   *
   * @param {File} file* the file to check
   * @returns {boolean}
   */
  const checkFileExt = (file) => {
    const accepted = accept.value.indexOf('jpg') !== -1 && accept.value.indexOf('jpeg') === -1
      ? accept.value.concat(['jpeg']) : accept.value

    const valid = file && accepted.indexOf(file?.name.split('.').pop()) !== -1

    if (!valid) {
      alert(form$.value.__(form$.value.translations.vueform.elements.signature.unsupportedFormat, {
        extensions: accept.value.join(', ')
      }))

      return false
    }

    return true
  }

  /**
   * Checks if a file is under the allowed [`maxSize`](#option-max-size) and throws an alert if not.
   *
   * @param {File} file* the file to check
   * @returns {boolean}
   */
  const checkFileSize = (file) => {
    if (maxSize.value === -1) {
      return true
    }

    if (file.size / 1024 > maxSize.value) {
      alert(form$.value.__(form$.value.translations.vueform.elements.signature.maxSizeError, {
        max: maxSize.value,
      }))
      return false
    }

    return true
  }

  /**
   * Sets the [`width`](#property-width) to the current element width.
   *
   * @returns {void}
   */
  const setWidth = () => {
    width.value = input.value.getBoundingClientRect().width
  }

  /**
   * Sets the [`lastWidth`](#property-last-width) to the current element width.
   *
   * @returns {void}
   */
  const setLastWidth = () => {
    lastWidth.value = input.value.getBoundingClientRect().width
  }

  /**
   * Sets the [`mode`](#property-mode) to the first available mode from [`modes`](#option-modes). If none found, `draw` will be set.
   *
   * @returns {void}
   */
  const setDefaultMode = (setDropdown = false) => {
    mode.value = modes.value[0] || 'draw'

    if (setDropdown) {
      mode$.value.selected = resolvedModes.value[0] || {
        label: form$.value.translations.vueform.elements.signature.draw,
        value: 'draw',
        index: 0,
      }
    }
  }

  /**
   * Sets the [`fontFamily`](#property-font-family) and [`fontWeight`](#property-font-weight) to the first available from [`fonts`](#option-fonts). If none found, `cursive` and `400` will be set.
   *
   * @returns {void}
   */
  const setDefaultFont = (setDropdown = false) => {
    fontFamily.value = fontFamilies.value[0] || 'cursive'
    fontWeight.value = fontWeights.value[0] || 400

    if (setDropdown) {
      font$.value.selected = {}
      font$.value.pointed = {}
    }
  }

  /**
   * Sets the [`color`](#property-color) to the first available color from [`colors`](#option-colors). If none found, `#000000` will be set.
   *
   * @returns {void}
   */
  const setDefaultColor = () => {
    color.value = colors.value[0] || '#000000'
  }

  /**
   * Sets the [`fontFamily`](#property-font-family) and [`fontWeight`](#property-font-weight) by the index of a font from [`fonts`](#option-fonts).
   *
   * @param {object} value* the selected font object (from [`resolvedFonts`](#property-resolved-fonts))
   * @returns {void}
   */
  const setFont = (value) => {
    fontFamily.value = fontFamilies.value[value.index]
    fontWeight.value = fontWeights.value[value.index]
  }

  /**
   * Checks the file contstraints and sets the value of [`image`](#property-image) and renders the selected file preview when [`mode`](#property-mode) is `upload`. If file constraints are not met it clears both.
   *
   * @param {File} file* the file to set as image
   * @returns {void}
   */
  const setImage = (file) => {
    if (checkFileExt(file) && checkFileSize(file)) {
      image.value = file
      uploadToImage(image.value)
    } else {
      image.value = null
      created.value = false
    }
  }

  const debounceTransform = (method, ms = 1000) => {
    if (debouncer.value) {
      clearTimeout(debouncer.value)
    }

    debouncer.value = setTimeout(async () => {
      try {
        await method.call()
      } catch (e) {
        value.value = null
      }
    }, ms)
  }

  /**
   * Handles the input event of the input field.
   *
   * @param {Event} e the Event object
   * @returns {void}
   */
  const handleInput = (e) => {
    if (isDisabled.value || readonly.value) {
      return
    }

    text.value = e.target.value
  }

  /**
   * Handles the mode select.
   *
   * @param {object} value* the selected mode object (from [`resolvedModes`](#property-resolved-modes))
   * @returns {void}
   */
  const handleModeSelect = (value) => {
    if (isDisabled.value || readonly.value) {
      return
    }

    mode.value = value.value

    nextTick(() => {
      if (mode.value === 'draw') {
        pad$.value.focus()
      }
      else if (mode.value === 'type') {
        input$.value.focus()
      }
      else if (mode.value === 'upload') {
        uploadButton$.value.focus()
      }
    })
  }

  /**
   * Handles the color select.
   *
   * @param {string} value the color to select (HEX)
   * @returns {void}
   */
  const handleColorSelect = (value) => {
    if (isDisabled.value || readonly.value) {
      return
    }

    color.value = value
  }

  /**
   * Handles the font select.
   *
   * @param {object} value* the selected font object (from [`resolvedFonts`](#property-resolved-fonts))
   * @returns {void}
   */
  const handleFontSelect = (value) => {
    font$.value.selected = {}

    if (isDisabled.value || readonly.value) {
      return
    }

    setFont(value)
  }

  /**
   * Handle the clear button action.
   *
   * @returns {void}
   */
  const handleClear = () => {
    if (isDisabled.value || readonly.value) {
      return
    }

    if (!uploaded.value) {
      if (mode.value === 'draw') {
        pad$.value.focus()
      }
      else if (mode.value === 'type') {
        input$.value.focus()
      }
      else if (mode.value === 'upload') {
        uploadButton$.value.focus()
      }
    }
    
    clearSignature()

    isMouseOver.value = false
  }

  /**
   * Handles the undo button action.
   *
   * @returns {void}
   */
  const handleUndo = () => {
    if (isDisabled.value || readonly.value) {
      return
    }

    undo()

    isMouseOver.value = false
  }

  /**
   * Handles the redo button action.
   *
   * @returns {void}
   */
  const handleRedo = () => {
    if (isDisabled.value || readonly.value) {
      return
    }

    redo()

    isMouseOver.value = false
  }

  /**
   * Handles the file select button action.
   *
   * @returns {void}
   */
  const handleSelectClick = () => {
    if (isDisabled.value || readonly.value) {
      return
    }

    file$.value.click()
  }

  /**
   * Handles the file selection.
   *
   * @returns {void}
   */
  const handleFileSelect = (event) => {
    if (isDisabled.value || readonly.value) {
      return
    }
    
    const file = event.target.files[0]

    setImage(file)

    file$.value.value = ''
  }

  /**
   * Handles the drop event.
   *
   * @param {Event} e* the Event object
   * @returns {void}
   */
  const handleDrop = (e) => {
    if (isDisabled.value || readonly.value || !droppable.value) {
      return
    }
    
    let file = e.dataTransfer.files[0]
    
    setImage(file)
  }

  /**
   * Handles the mouse leave event of the wrapper.
   * 
   * @returns {void}
   */
  const handleMouseLeave = () => {
    isMouseOver.value = false
  }

  /**
   * Handles the window resize event.
   *
   * @returns {void}
   */
  const handleResize = () => {
    if (lastWidth.value === input.value.getBoundingClientRect().width) {
      return
    }

    resizePad()
    adjustFontSize()
  }

  /**
   * Handler with debounce for resize event.
   *
   * @returns {void}
   */
  const handleResizeDebounce = debounce(handleResize, 200, () => {
    setLastWidth()
  })

  // =============== HOOKS ================

  setDefaultMode()
  setDefaultFont()
  setDefaultColor()

  onMounted(() => {
    if (autoload.value) {
      loadFonts()
    }

    setWidth()

    // Auto-select default mode
    if (mode$.value) {
      mode$.value.selected = resolvedModes.value[0] || {
        label: form$.value.translations.vueform.elements.signature.draw,
        value: 'draw',
        index: 0,
      }
    }

    // Handling drag & drop
    const evts = ['drag', 'dragstart', 'dragenter', 'dragleave', 'dragend']
    evts.forEach((event) => {
      input.value.addEventListener(event, (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (['dragleave', 'dragend'].indexOf(event) === -1) {
          return
        }

        if (isDisabled.value || !droppable.value) {
          return
        }

        dragging.value = false
      })
    })

    input.value.addEventListener('dragover', (e) => {
      e.preventDefault()
      e.stopPropagation()

      if (isDisabled.value || !droppable.value) {
        return
      }
      
      if (dragging.value !== true) {
        dragging.value = true
      }
    })

    // listening for the actual drop event
    input.value.addEventListener('drop', (e) => {
      e.preventDefault()
      e.stopPropagation()

      if (isDisabled.value || !droppable.value) {
        return
      }

      handleDrop(e)
      dragging.value = false
    })

    nextTick(() => {
      initPad()

      window.addEventListener('resize', handleResizeDebounce)
    })

    // ============== WATCHERS ==============
  
    watch(maxFontSize, () => {
      adjustFontSize()
    }, { flush: 'post' })
  
    watch(modes, () => {
      initPad()
      setDefaultMode(true)
    })
  
    watch(available, () => {
      if (form$.value.steps$ && !form$.value.steps$.current$.elements.includes(path.value.split('.')[0])) {
        form$.value.steps$.on('select', (activeStep$) => {
          if (!activeStep$.elements.includes(path.value.split('.')[0]) || width.value) {
            return
          }

          nextTick(() => {
            initPad()
          })
        })
      } else {
        nextTick(() => {
          initPad()
        })
      }
    }, { flush: 'post' })

    watch(color, () => {
      if (pad.value) {
        setDrawColor()
      }
      
      if (mode.value === 'upload' && created.value && !creating.value) {
        uploadToImage()
      }
    })

    watch(columns, () => {
      setLastWidth()

      nextTick(() => {
        handleResize()

        if (mode.value === 'upload' && created.value && !creating.value) {
          uploadToImage()
        }
      })
    })

    watch(mode, () => {
      clearSignature()
    })

    watch([height, maxWidth], () => {
      resizePad()
      adjustFontSize()
    }, { flush: 'post' })

    watch([text, fontFamily], () => {
      nextTick(() => {
        adjustFontSize()
      })
    }, { flush: 'post' })

    watch(text, () => {
      debounceTransform(typingToImage, 1000)
    }, { flush: 'post' })

    watch(fonts, () => {
      if (autoload.value) {
        loadFonts()
      }
    })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResizeDebounce)
  })

  return {
    mode$,
    font$,
    input$,
    preview$,
    pad$,
    file$,
    upload$,
    uploadButton$,
    mode,
    fontFamily,
    fontWeight,
    color,
    text,
    fontSize,
    pad,
    image,
    created,
    creating,
    dragging,
    drawn,
    drawing,
    redos,
    undosLeft,
    width,
    lastWidth,
    fontFamilies,
    fontWeights,
    uploaded,
    processing,
    droppable,
    resolvedModes,
    resolvedFonts,
    fileAccept,
    showLine,
    showInput,
    showPlaceholder,
    showUploadContainer,
    showUpload,
    showPreview,
    showPad,
    showUndos,
    showColors,
    showModes,
    showFonts,
    showClear,
    tabindex,
    placeholderText,
    dndText,
    uploadButtonText,
    imgAltText,
    imgTitleText,
    fontText,
    undoText,
    redoText,
    modeSelectorAria,
    fontSelectorAria,
    wrapperAriaLabel,
    inputAriaLabel,
    padAriaLabel,
    colorAriaLabel,
    clearAriaLabel,
    padWidth,
    padHeight,
    padStyle,
    wrapperStyle,
    inputStyle,
    lineStyle,
    initPad,
    resizePad,
    drawingToImage,
    typingToImage,
    uploadToImage,
    undo,
    redo,
    clearSignature,
    clearDrawnSignature,
    loadFonts,
    setDrawColor,
    adjustFontSize,
    hexToRgb,
    blobToBase64,
    base64ToBlob,
    checkFileExt,
    checkFileSize,
    setWidth,
    setLastWidth,
    setDefaultMode,
    setDefaultFont,
    setDefaultColor,
    setFont,
    handleInput,
    handleModeSelect,
    handleColorSelect,
    handleFontSelect,
    handleClear,
    handleUndo,
    handleRedo,
    handleSelectClick,
    handleFileSelect,
    handleDrop,
    handleMouseLeave,
    handleResize,
    handleResizeDebounce,
  }
}