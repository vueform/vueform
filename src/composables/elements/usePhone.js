import { ref, watch, nextTick, computed, inject, onBeforeUnmount, onMounted, h, markRaw, toRefs } from 'vue'
import countryPhones from '@vueform/country-phones'

const base = function(props, context, dependencies)
{
  const {
    include,
    exclude,
    mask: maskProp,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const {
    update,
    focus,
    value,
    input,
    form$,
    el$,
    classes,
  } = dependencies

  // ================ DATA ================

  /**
   * The country selector `ElementAddonOptions` component.
   *
   * @type {component}
   */
  const options$ = ref(null)

  /**
   * The placeholder component for `ElementAddonOptions` component.
   *
   * @type {component}
   */
  const addonPlaceholder = ref(markRaw({
    props: ['option', 'el$'],
    render() {
      return h('div', {
        class: classes.value.placeholder,
        style: {
          backgroundPosition: `0 -${(this.option.p * 20) + 20}px`
        }
      })
    }
  }))

  // ============== COMPUTED ==============

  /**
   * The options to display.
   *
   * @type {array}
   */
  const addonOptions = computed(() => {
    return countryPhones.filter((c) => {
      if (!include.value.length && !exclude.value.length) {
        return true
      }

      if (include.value.length) {
        return include.value.map(c=>c.toUpperCase()).indexOf(c.c) !== -1
      }

      return exclude.value.map(c=>c.toUpperCase()).indexOf(c.c) === -1
    }).map((c) => {
      return {
        ...c,
        value: c.c,
        label: form$.value.translations.vueform.countries[c.c],
        display: markRaw({
          props: ['option', 'index', 'selected', 'pointed', 'el$'],
          render() {
            return h('div', {
              class: classes.value.option(this.selected || this.pointed)
            }, [
              h('div', {
                class: classes.value.optionWrapper,
              }, [
                h('div', {
                  class: classes.value.flag,
                  style: {
                    backgroundPosition: `0 -${(this.option.p * 20) + 20}px`
                  }
                }),
                h('div', {
                  class: classes.value.country,
                }, [
                  this.option.label,
                  h('span', {
                    class: classes.value.number,
                  }, [
                    this.option.n
                  ])
                ])
              ])
            ])
          },
        }),
        valueDisplay: markRaw({
          props: ['option', 'el$'],
          render() {
            return h('div', {
              class: classes.value.flag,
              style: {
                backgroundPosition: `0 -${(this.option.p * 20) + 20}px`
              }
            })
          }
        })
      }
    }).sort((a, b) => a.label.localeCompare(b.label)).map((c, i) => ({...c, index: i}))
  })

  /**
   * The mask property if [@vueform/plugin-mask](https://github.com/vueform/plugin-mask) is installed (otherwise `undefined`).
   *
   * @type {object|undefined}
   */
  const mask = computed(() => {
    if (!maskPluginInstalled.value) {
      return
    }

    let masks = {}
    let maskLengths = []

    addonOptions.value.forEach(c => c.m.forEach((m) => {
      if (masks[m[1]] === undefined) {
        masks[m[1]] = []
      }

      const length = m[0].toString().length

      if (masks[m[1]][length] === undefined) {
        masks[m[1]][length] = []
      }

      masks[m[1]][length].push(parseInt(m[0]))

      if (maskLengths.indexOf(length) === -1) {
        maskLengths.push(length)
      }
    }))

    maskLengths.sort().reverse()

    let mask = []

    maskLengths.forEach((length) => {
      Object.keys(masks).forEach((m) => {
        if (masks[m][length]) {
          mask.push({
            mask: m,
            startsWith: masks[m][length],
            placeholder: true,
          })
        }
      })
    })

    mask.push({
      mask: '{+}0000000[0000000]',
      startsWith: '',
    })

    return {
      mask,
    }
  })
  
  /**
   * All the available masks for options, where key is the country prefix, value is the mask.
   *
   * @type {object}
   */
  const masks = computed(() => {
    return addonOptions.value.reduce((prev, curr) => {
      return curr.m.reduce((p, c) => {
        return {
          ...p,
          [c[0]]: curr.c,
        }
      }, { ...prev })
    }, {})
  })

  /**
   * Whether [@vueform/plugin-mask](https://github.com/vueform/plugin-mask) is installed.
   *
   * @type {boolean}
   */
  const maskPluginInstalled = computed(() => {
    return !!maskProp
  })

  /**
   * The type of the HTML input field (`text` if masks are enabled, `tel` otherwise).
   * 
   * @type {string}
   */
  const inputType = computed(() => {
    return maskPluginInstalled.value ? 'text' : 'tel'
  })

  // =============== METHODS ==============

  /**
   * Sets country flag according to current input value.
   * 
   * @returns {void}
   */
  const setFlag = () => {
    if (!value.value) {
      if (Object.keys(options$.value.selected).length) {
        options$.value.reset()
      }

      return
    }

    if ((value.value && !value.value.toString().startsWith('+')) || value.value === options$.value.selected?.n) {
      return
    }

    let number = value.value.replace('+', '')
    let lengths = [7, 5, 4, 3, 2, 1].filter((l) => number.length >= l)
    let country

    lengths.forEach((l) => {
      if (country) {
        return
      }

      country = masks.value[number.slice(0, l)] || undefined
    })

    if (!country) {
      if (Object.keys(options$.value.selected).length) {
        options$.value.reset()
      }
      return
    }

    if (country === 'MF') {
      country = 'GP'
    }

    let option = addonOptions.value.find(c => c.c === country)

    if (options$.value.selected.index !== option.index) {
      options$.value.selectOption(option)
    }
  }

  /**
   * Handles option select.
   *
   * @param {object} option* the option to select (from `addonOptions`).
   * @returns {void}
   * @private
   */
  const handleOptionSelect = (option) => {
    if (document.activeElement === input.value) {
      context.emit('select', option, el$.value)
      return
    }

    if (option.n === undefined) {
      el$.value.clear()
    } else if (maskPluginInstalled.value) {
      let valueMatchesMask = value.value ? option.m.map(m => `+${m[0]}`).find((m) => {
        return value.value.startsWith(m)
      }) : false

      if (!valueMatchesMask) {
        el$.value.update(option.m.length === 1 ? `+${option.m[0][0]}` : option.n)
      }

      if (document.activeElement.closest('[data-dropdown-for]')) {
        focus()
      }
    }
    
    context.emit('select', option, el$.value)
  }

  /**
   * Handles dropdown open event (emits `@open` event).
   *
   * @returns {void}
   */
  const handleOpen = () => {
    context.emit('open', el$)
  }

  /**
   * Handles dropdown close event (emits `@close` event).
   *
   * @returns {void}
   */
  const handleClose = () => {
    context.emit('close', el$)
  }

  // =============== HOOKS ================

  onMounted(() => {
    setFlag()
  })

  // ============== WATCHERS ==============

  watch(value, (n) => {
    setFlag()
  })

  return {
    options$,
    addonOptions,
    handleOptionSelect,
    addonPlaceholder,
    maskPluginInstalled,
    inputType,
    mask,
    handleOpen,
    handleClose,
  }
}

export default base