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

  const mode$ = ref(null)
  const font$ = ref(null)
  const input$ = ref(null)
  const preview$ = ref(null)
  const pad$ = ref(null)
  const file$ = ref(null)
  const upload$ = ref(null)

  const mode = ref(null)
  const fontFamily = ref(null)
  const fontWeight = ref(null)
  const color = ref(null)

  const text = ref(null)
  const fontSize = ref(maxFontSize.value)

  const canvasWidth = ref(0)
  const canvasHeight = ref(0)

  const pad = ref(null)
  const image = ref(null)
  const created = ref(false)
  const creating = ref(false)
  const dragging = ref(false)
  const drawn = ref(false)
  const drawing = ref(false)
  const undos = ref([])
  const undosLeft = ref(0)

  const resolvedWidth = ref(width.value === 'auto' ? 1 : width.value)

  // ============== COMPUTED ==============

  const fontFamilies = computed(() => {
    return fonts.value.map(f => f.split('@')[0].replace('!', ''))
  })

  const fontWeights = computed(() => {
    return fonts.value.map(f => f.split('@')[1] || 400)
  })

  const uploaded = computed(() => {
    return typeof value.value === 'string'
  })

  /**
   * Whether `drop` is enabled and browser supports dragging.
   *
   * @type {boolean}
   * @private
   */
  const canDrop = computed(() => {
    let div = document.createElement('div')
    
    return (('draggable' in div)
        || ('ondragstart' in div && 'ondrop' in div))
      && 'FormData' in window
      && 'FileReader' in window
  })

  const resolvedModes = computed(() => {
    return modes.value.filter(m => ['type', 'draw', 'upload'].indexOf(m) !== -1).map((mode, i) => {
      return {
        label: form$.value.translations.vueform.elements.signature[mode],
        value: mode,
        index: i,
      }
    })
  })

  const resolvedFonts = computed(() => {
    return fontFamilies.value.map((font, i) => ({
      label: `<font style="font-family: ${font}; font-weight: ${fontWeights.value[i]}">${
        text.value?.trim() || form$.value.translations.vueform.elements.signature.fontPlaceholder
      }<font>`,
      value: i,
      index: i,
    }))
  })

  const colorable = computed(() => {
    return mode.value !== 'upload' || ['image/png'].indexOf(image.value?.type) !== -1
  })

  const fileAccept = computed(() => {
    return accept.value.reduce((prev, curr) => {
      switch (curr) {
        case 'jpg':
          prev.push('image/jpg')
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

  const showLine = computed(() => {
    return mode.value !== 'upload' && line.value
  })

  const showInput = computed(() => {
    return !uploaded.value && mode.value === 'type'
  })

  const showPlaceholder = computed(() => {
    return (
      (!text.value && mode.value === 'type') ||
      (!drawn.value && mode.value === 'draw')
    ) && placeholder.value !== false
  })

  const showUploadContainer = computed(() => {
    return mode.value === 'upload'
  })

  const showUpload = computed(() => {
    return mode.value === 'upload' && !created.value
  })

  const showPreview = computed(() => {
    return mode.value === 'upload' && created.value
  })

  const showPad = computed(() => {
    return mode.value === 'draw'
  })

  const showUndos = computed(() => {
    return mode.value === 'draw' && (undos.value.length || drawn.value) && !drawing.value && canUndo.value
  })
  
  const showColors = computed(() => {
    return (
      (mode.value === 'upload' && created.value) ||
      mode.value === 'type' || mode.value === 'draw'
    ) && !drawing.value && colors.value.length > 1 && colorable.value
  })
  
  const showModes = computed(() => {
    return !drawing.value && modes.value.length > 1
  })
  
  const showFonts = computed(() => {
    return mode.value === 'type' && resolvedFonts.value.length > 1
  })

  const showClear = computed(() => {
    return (
      (mode.value === 'type' && text.value) ||
      (mode.value === 'upload' && created.value) ||
      (mode.value === 'draw' && drawn.value) ||
      uploaded.value
    ) && !isDisabled.value && !readonly.value && !drawing.value && canClear.value
  })

  const placeholderText = computed(() => {
    return Placeholder.value || form$.value.translations.vueform.elements.signature.placeholder
  })

  const fontText = computed(() => {
    return form$.value.translations.vueform.elements.signature.font
  })

  const padWidth = computed(() => {
    return resolvedWidth.value * 2
  })

  const padHeight = computed(() => {
    return height.value * 2
  })

  const padStyle = computed(() => {
    return {
      width: `${resolvedWidth.value}px`,
      height: `${height.value}px`,
    }
  })

  const wrapperStyle = computed(() => {
    let style = {
      height: `${height.value}px`,
    }

    if (width.value !== 'auto') {
      style.width = `${width.value}px`
    }

    return style
  })

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

  const lineStyle = computed(() => {
    return {
      transform: `translateY(calc(${fontSize.value / 2.2}px))`
    }
  })

  // =============== METHODS ==============

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
      undos.value = []
    })

    pad.value.addEventListener('endStroke', () => {
      drawing.value = false
      undosLeft.value++
    })
  }

  const resizePad = () => {
    resolveWidth()

    nextTick(() => {
      pad$.value.getContext('2d').scale(2, 2)
      pad.value.clear()
    })
  }

  const drawingToImage = () => {
    return new Promise((resolve, reject) => {
      pad$.value.toBlob(function(blob) {
        value.value = blob
        resolve()
      }, 'image/png')
    })
  }

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

        const dataURL = canvas.toDataURL()
        image.value = dataURL

        canvas.toBlob(function(blob) {
          value.value = blob
          canvas.remove()
          resolve()
        }, 'image/png')
      })
    })
  }
  
  const uploadToImage = () => {
    const canvas = preview$.value
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = URL.createObjectURL(image.value)

    creating.value = true

    img.onload = function() {
      const maxWidth = upload$.value.getBoundingClientRect().width
      const maxHeight = input.value.getBoundingClientRect().height * 0.6

      let targetWidth = img.width
      let targetHeight = img.height

      canvas.width = maxWidth
      canvas.height = maxHeight

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

  const undo = () => {
    if (!pad.value) {
      return
    }

    var data = pad.value.toData()

    if (!data.length) {
      return
    }

    undos.value.push(data.pop())

    pad.value.fromData(data)

    if (!data.length) {
      drawn.value = false
    }

    undosLeft.value = data.length
  }

  const redo = () => {
    if (!pad.value || !undos.value.length) {
      return
    }

    var data = pad.value.toData() || []

    data.push(undos.value.pop())

    pad.value.fromData(data)

    drawn.value = true

    setDrawColor()

    undosLeft.value = data.length
  }

  const clearSignature = () => {
    text.value = null
    image.value = null
    created.value = false
    value.value = null
    pad.value?.clear()
    drawn.value = false
    undos.value = []
  }

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

  const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, '')
    let bigint = parseInt(hex, 16)
    let r = (bigint >> 16) & 255
    let g = (bigint >> 8) & 255
    let b = bigint & 255
    return { r, g, b }
  }

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

  const resolveWidth = () => {
    resolvedWidth.value = el$.value.$el.getBoundingClientRect().width
  }

  const setDefaultMode = () => {
    mode.value = modes.value[0] || 'draw'
  }

  const setDefaultFont = () => {
    fontFamily.value = fontFamilies.value[0] || 'cursive'
    fontWeight.value = fontWeights.value[0] || 400
  }

  const setDefaultColor = () => {
    color.value = colors.value[0] || '#000000'
  }

  const setFont = (index) => {
    fontFamily.value = fontFamilies.value[value.index]
    fontWeight.value = fontWeights.value[value.index]
  }

  const setImage = (file) => {
    if (checkFileExt(file) && checkFileSize(file)) {
      image.value = file
      uploadToImage(image.value)
    } else {
      image.value = null
      created.value = false
    }
  }

  const handleInput = (e) => {
    if (isDisabled.value || readonly.value) {
      return
    }

    text.value = e.target.value
  }

  const handleModeSelect = (value) => {
    if (isDisabled.value || readonly.value) {
      return
    }

    mode.value = value.value
  }

  const handleColorSelect = (value) => {
    if (isDisabled.value || readonly.value) {
      return
    }

    color.value = value
  }

  const handleFontSelect = (value) => {
    font$.value.selected = {}

    if (isDisabled.value || readonly.value) {
      return
    }

    setFont(value.index)
  }

  const handleClear = () => {
    if (isDisabled.value || readonly.value) {
      return
    }
    
    clearSignature()
  }

  const handleUndo = () => {
    if (isDisabled.value || readonly.value) {
      return
    }

    undo()
  }

  const handleRedo = () => {
    if (isDisabled.value || readonly.value) {
      return
    }

    redo()
  }

  const handleSelectClick = () => {
    if (isDisabled.value || readonly.value) {
      return
    }

    file$.value.click()
  }

  const handleFileSelect = (event) => {
    if (isDisabled.value || readonly.value) {
      return
    }
    
    const file = event.target.files[0]

    setImage(file)

    file$.value.value = ''
  }

  /**
   * Handles the `drop` event.
   *
   * @param {Event} e* event object
   * @returns {void}
   * @private
   */
  const handleDrop = (e) => {
    if (isDisabled.value || readonly.value) {
      return
    }
    
    let file = e.dataTransfer.files[0]
    
    setImage(file)
  }

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
      resolveWidth()
    }
      

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
      console.log(1)
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
    undos,
    undosLeft,
    resolvedWidth,

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
    loadFonts,
    setDrawColor,
    adjustFontSize,
    hexToRgb,
    checkFileExt,
    checkFileSize,
    resolveWidth,
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