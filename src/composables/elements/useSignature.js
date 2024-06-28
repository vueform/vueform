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
    width,
    height,
    readonly,
    maxFontSize,
    minFontSize,
    canClear,
    line,
    placeholder,
    autoloadFonts,
    maxSize,
    canUndo,
    columns,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const {
    el$,
    form$,
    input,
    isDisabled,
    value,
    Placeholder,
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
   * The input field when [`mode`](#property-mode) is 'type`.
   *
   * @type {HTMLInputElement}
   */
  const input$ = ref(null)

  /**
   * The canvas that shows the preview of an uploaded signature when [`mode`](#property-mode) is 'upload`.
   *
   * @type {HTMLCanvasElement}
   */
  const preview$ = ref(null)

  /**
   * The canvas that allows drawning signature when [`mode`](#property-mode) is 'draw`.
   *
   * @type {HTMLCanvasElement}
   */
  const pad$ = ref(null)

  /**
   * The file input field when [`mode`](#property-mode) is 'upload` (it's invisible).
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
   * @type {}
   */
  const fontSize = ref(maxFontSize.value)

  /**
   * The hex code of the current signature color.
   *
   * @type {string}
   */
  const color = ref(null)

  /**
   * The input value used when [`mode`](#property-mode) is 'type`.
   *
   * @type {string}
   */
  const text = ref(null)

  /**
   * The width attribute of [preview$](#property-preview_).
   *
   * @type {number}
   */
  const canvasWidth = ref(0)

  /**
   * The height attribute of [preview$](#property-preview_).
   *
   * @type {}
   */
  const canvasHeight = ref(0)

  /**
   * The [Signature Pad](https://github.com/szimek/signature_pad) instance.
   *
   * @type {}
   */
  const pad = ref(null)

  /**
   * The file (image) selected by the user when [`mode`](#property-mode) is 'upload`.
   *
   * @type {File}
   */
  const image = ref(null)

  /**
   * Whether the image preview is already created when [`mode`](#property-mode) is 'upload`.
   *
   * @type {boolean}
   */
  const created = ref(false)

  /**
   * Whether the image preview is being created when [`mode`](#property-mode) is 'upload`.
   *
   * @type {boolean}
   */
  const creating = ref(false)

  /**
   * Whether a file is being dragged over the element when [`mode`](#property-mode) is 'upload`.
   *
   * @type {boolean}
   */
  const dragging = ref(false)

  /**
   * Whether the canvas contains any drawn signature when [`mode`](#property-mode) is 'draw`.
   *
   * @type {boolean}
   */
  const drawn = ref(false)

  /**
   * Whether a signature is currently being drawn when [`mode`](#property-mode) is 'draw`.
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
   * The max width of the signature element (based on the container width).
   *
   * @type {number}
   */
  const maxWidth = ref(0)

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
   * Whether a signature (as URL) was loaded to the element.
   *
   * @type {boolean}
   */
  const uploaded = computed(() => {
    return typeof value.value === 'string'
  })

  /**
   * Whether `drop` is enabled and browser supports dragging.
   *
   * @type {boolean}
   */
  const canDrop = computed(() => {
    let div = document.createElement('div')
    
    return (('draggable' in div)
        || ('ondragstart' in div && 'ondrop' in div))
      && 'FormData' in window
      && 'FileReader' in window
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
   * @type {}
   */
  const resolvedFonts = computed(() => {
    return fontFamilies.value.map((font, i) => ({
      label: `<font style="font-family: ${font}; font-weight: ${fontWeights.value[i]}">${
        text.value?.trim() || form$.value.translations.vueform.elements.signature.fontPlaceholder
      }<font>`,
      value: i,
      index: i,
    }))
  })

  /**
   * Whether the signature color can be changed.
   *
   * @type {boolean}
   */
  const colorable = computed(() => {
    return mode.value !== 'upload' || ['image/png'].indexOf(image.value?.type) !== -1
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
    ) && !drawing.value && colors.value.length > 1 && colorable.value
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
   * The text of the placeholder.
   *
   * @type {string}
   */
  const placeholderText = computed(() => {
    return Placeholder.value || form$.value.translations.vueform.elements.signature.placeholder
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
   * The width of signature pad.
   *
   * @type {number}
   */
  const padWidth = computed(() => {
    return maxWidth.value * 2
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
      width: `${maxWidth.value}px`,
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

    if (width.value !== 'auto') {
      style.width = `${width.value}px`
    }

    return style
  })

  /**
   * The style attributes of the signature input when [`mode`](#property-mode) is 'type`.
   *
   * @type {}
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
   * @type {}
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
    if (pad.value || !pad$.value || (modes.value.indexOf('draw') === -1 && modes.value.length)) {
      return
    }

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

      drawn.value = true
      drawing.value = true
      redos.value = []
    })

    pad.value.addEventListener('endStroke', () => {
      drawing.value = false
      undosLeft.value++
    })
  }

  /**
   * Resizes the signature pad to the current max width and clears any drawings.
   *
   * @returns {void}
   */
  const resizePad = () => {
    setMaxWidth()

    nextTick(() => {
      pad$.value.getContext('2d').scale(2, 2)
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
      pad$.value.toBlob(function(blob) {
        value.value = blob
        resolve()
      }, 'image/png')
    })
  }

  /**
   * Sets the element value as Blob from the currently typed signature.
   *_
   * @returns {void}
   */
  const typingToImage = () => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      const inputRect = input$.value.getBoundingClientRect()

      const displayWidth = inputRect.width
      const displayHeight = inputRect.height

      const dpr = 2

      canvas.width = displayWidth * dpr
      canvas.height = displayHeight * dpr

      nextTick(() => {
        ctx.scale(dpr, dpr)

        ctx.clearRect(0, 0, displayWidth, displayHeight)

        ctx.font = `${fontWeight.value} ${fontSize.value}px ${fontFamily.value}`
        ctx.fillStyle = color.value
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        ctx.fillText(text.value, displayWidth / 2, displayHeight / 2)

        canvas.toBlob(function(blob) {
          value.value = blob
          canvas.remove()
          resolve()
        }, 'image/png')
      })
    })
  }
  
  /**
   * Sets the element value as Blob from the currently uploaded signature.
   *
   * @returns {void}
   */
  const uploadToImage = () => {
    const canvas = preview$.value
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = URL.createObjectURL(image.value)

    creating.value = true

    setPreviewDimensions()

    img.onload = function() {
      const maxWidth = upload$.value.getBoundingClientRect().width
      const maxHeight = input.value.getBoundingClientRect().height * 0.6

      let targetWidth = img.width
      let targetHeight = img.height

      if (targetWidth > maxWidth || targetHeight > maxHeight) {
        if (targetWidth / targetHeight > maxWidth / maxHeight) {
          targetWidth = maxWidth
          targetHeight = Math.floor((maxWidth / img.width) * img.height)
        } else {
          targetHeight = maxHeight
          targetWidth = Math.floor((maxHeight / img.height) * img.width)
        }
      }

      const offsetX = Math.floor((maxWidth - targetWidth) / 2)
      const offsetY = Math.floor((maxHeight - targetHeight) / 2)

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw image on canvas with centering
      ctx.drawImage(img, offsetX, offsetY, targetWidth, targetHeight)

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      if (colorable.value) {
        // Custom color tint (hex code)
        const hexColor = color.value
        const tintColor = hexToRgb(hexColor)

        // Apply custom color tint
        for (let i = 0; i < data.length; i += 4) {
          data[i] = tintColor.r
          data[i + 1] = tintColor.g
          data[i + 2] = tintColor.b
        }
      }

      // Put image data back to canvas
      ctx.putImageData(imageData, 0, 0)

      // Revoke the object URL to release memory
      URL.revokeObjectURL(img.src)

      // Convert canvas to Blob
      canvas.toBlob(function(blob) {
        value.value = blob

        created.value = true
        creating.value = false
      }, 'image/png')
    }
  }

  /**
   * Undoes the last drawing when [`mode`](#property-mode) is 'draw`.
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
    }

    undosLeft.value = data.length
  }

  /**
   * Redoes the last drawing when [`mode`](#property-mode) is 'draw`.
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
    const ua = navigator.userAgent.toLowerCase();
    const isSafari = (ua.indexOf('safari') != -1 && ua.indexOf('chrome') == -1 && ua.indexOf('android') == -1)

    const inputElement = input$.value
    const styles = window.getComputedStyle(inputElement)
    const textIndent = parseFloat(styles.textIndent)
    const paddingRight = parseFloat(styles.paddingRight)
    const maxWidth = inputElement.clientWidth - textIndent

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
      alert(`Max file size is ${maxSize.value} KBs`)
      return false
    }

    return true
  }

  /**
   * Sets the [`maxWidth`](#property-max-width) to the current element width.
   *
   * @returns {void}
   */
  const setMaxWidth = () => {
    maxWidth.value = el$.value.$el.getBoundingClientRect().width
  }

  /**
   * Sets the [`canvasWidth`](#property-canvas-width) and [`canvasHeight`](#property-canvas-width) to the current element width and 60% of max height.
   *
   * @returns {void}
   */
  const setPreviewDimensions = () => {
    canvasWidth.value = upload$.value.getBoundingClientRect().width
    canvasHeight.value = input.value.getBoundingClientRect().height * 0.6
  }

  /**
   * Sets the [`mode`](#property-mode) to the first available mode from [`modes`](#option-modes). If none found, `draw` will be set.
   *
   * @returns {void}
   */
  const setDefaultMode = () => {
    mode.value = modes.value[0] || 'draw'
  }

  /**
   * Sets the [`fontFamily`](#property-font-family) and [`fontWeight`](#property-font-weight) to the first available from [`fonts`](#option-fonts). If none found, `cursive` and `400` will be set.
   *
   * @returns {void}
   */
  const setDefaultFont = () => {
    fontFamily.value = fontFamilies.value[0] || 'cursive'
    fontWeight.value = fontWeights.value[0] || 400
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
   * @param {number} index* the index of the font in [`fonts`](#option-fonts)
   * @returns {void}
   */
  const setFont = (index) => {
    fontFamily.value = fontFamilies.value[value.index]
    fontWeight.value = fontWeights.value[value.index]
  }

  /**
   * Checks the file contstraints and sets the value of [`image`](#property-image) and renders the selected file preview when [`mode`](#property-mode) is 'upload`. If file constraints are not met it clears both.
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

    setFont(value.index)
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
    
    clearSignature()
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
    if (isDisabled.value || readonly.value) {
      return
    }
    
    let file = e.dataTransfer.files[0]
    
    setImage(file)
  }

  /**
   * Handles the window resize event with debounce.
   *
   * @returns {void}
   */
  const handleResize = debounce(resizePad, 200)

  // =============== HOOKS ================

  setDefaultMode()
  setDefaultFont()
  setDefaultColor()

  onMounted(() => {
    if (autoloadFonts.value) {
      loadFonts()
    }

    if (width.value === 'auto') {
      setMaxWidth()
    }

    setPreviewDimensions()

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

        if (isDisabled.value) {
          return
        }

        dragging.value = false
      })
    })

    input.value.addEventListener('dragover', (e) => {
      e.preventDefault()
      e.stopPropagation()

      if (isDisabled.value) {
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

      if (isDisabled.value) {
        return
      }

      handleDrop(e)
      dragging.value = false
    })

    nextTick(() => {
      initPad()

      window.addEventListener('resize', handleResize)
    })

    // ============== WATCHERS ==============
  
    watch(modes, () => {
      initPad()
    })

    watch(color, () => {
      if (pad.value) {
        setDrawColor()
      }
      
      if (mode.value === 'upload' && created.value && !creating.value) {
        uploadToImage()
      }
    })

    watch(columns, () => {
      resizePad()

      if (mode.value === 'upload' && created.value && !creating.value) {
        uploadToImage()
      }
    }, { flush: 'post' })

    watch(mode, () => {
      clearSignature()
    })

    watch([text, fontFamily], () => {
      nextTick(() => {
        adjustFontSize()
      })
    }, { flush: 'post' })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    mode$,
    font$,
    input$,
    preview$,
    pad$,
    file$,
    upload$,
    mode,
    fontFamily,
    fontWeight,
    color,
    text,
    fontSize,
    canvasWidth,
    canvasHeight,
    pad,
    image,
    created,
    creating,
    dragging,
    drawn,
    drawing,
    redos,
    undosLeft,
    maxWidth,

    fontFamilies,
    fontWeights,
    uploaded,
    canDrop,
    resolvedModes,
    resolvedFonts,
    colorable,
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
    placeholderText,
    fontText,
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
    checkFileExt,
    checkFileSize,
    setMaxWidth,
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
    handleResize,
  }
}