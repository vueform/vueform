import { ref, watch, nextTick, computed, inject, onBeforeUnmount, onMounted, h, markRaw, toRefs } from 'vue'
import countryPhones from './../../utils/countryPhones'

const base = function(props, context, dependencies)
{
  const {
    update,
    focus,
    value,
    input,
    form$,
    el$,
    classes,
  } = dependencies

  const {
    include,
    exclude,
  } = toRefs(props)

  // ============== INJECTS ===============


  // ================ DATA ================

  const options$ = ref(null)

  const addonOptions = countryPhones.filter((c) => {
    if (!include.value.length && !exclude.value.length) {
      return true
    }

    if (include.value.length) {
      return include.value.map(c=>c.toUpperCase()).indexOf(c.code) !== -1
    }

    return exclude.value.map(c=>c.toUpperCase()).indexOf(c.code) === -1
  }).map(c => ({
    ...c,
    value: c.code,
    label: form$.value.translations.vueform.countries[c.code],
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
                backgroundPosition: `0 -${(this.option.pos * 20) + 20}px`
              }
            }),
            h('div', {
              class: classes.value.country,
            }, [
              this.option.label,
              h('span', {
                class: classes.value.number,
              }, [
                this.option.prefix
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
            backgroundPosition: `0 -${(this.option.pos * 20) + 20}px`
          }
        })
      }
    }),
  })).sort((a, b) => a.label.localeCompare(b.label)).map((c, i) => ({...c, index: i}))

  const addonPlaceholder = markRaw({
    props: ['option', 'el$'],
    render() {
      return h('div', {
        class: classes.value.placeholder,
        style: {
          backgroundPosition: `0 -${(this.option.pos * 20) + 20}px`
        }
      })
    }
  })

  // ============== COMPUTED ==============

 

  // =============== METHODS ==============

  const handleOptionSelect = (option) => {
    if (document.activeElement === input.value) {
      return
    }

    update(option.prefix)
    focus()

    context.emit('select', option, el$.value)
  }

  const setFlag = () => {
    if (!value.value || !value.value.startsWith('+')) {
      return
    }

    if (value.value === options$.value.selected?.prefix) {
      return
    }

    const first = value.value.charAt(1) || ''
    const second = value.value.charAt(2) || ''
    const third = value.value.charAt(3) || ''

    let match = addonOptions.find(c => [`+${first}`, `+${first+second}`, `+${first+second+third}`].indexOf(c.prefix) !== -1)

    if (!match) {
      return
    }

    const overrides = {
      '+1': 'US',
      '+7': 'RU',
      '+39': 'IT',
      '+590': 'GP',
      '+599': 'CW',
    }

    if (Object.keys(overrides).indexOf(match.prefix) !== -1) {
      match = addonOptions.find(c => c.code === overrides[match.prefix])
    }

    if (match && options$.value.selected.index !== match.index) {
      options$.value.selectOption(match)
    }
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
  }
}

export default base