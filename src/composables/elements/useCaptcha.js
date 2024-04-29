import { ref, computed, onMounted, toRefs, watch, nextTick } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    provider: elementProvider,
    options,
    readonly,
  } = toRefs(props)

  // ============ DEPENDENCIES ============
  
  const {
    form$,
    input,
    model,
    nullValue,
    messageBag,
    validate,
    el$,
    invalid,
    isDisabled,
    resetValidators,
    resetting,
    initValidation,
  } = dependencies

  // ================ DATA ================

  const Provider = ref(null)

  // ============== COMPUTED ==============

  const shouldVerify = computed(() => {
    return !isDisabled.value && !readonly.value
  })

  const provider = computed(() => {
    return elementProvider.value || form$.value.options.useProviders.captcha
  })

  const captchaOptions = computed(() => {
    return {
      ...form$.value.options.providerOptions[provider.value],
      ...options.value
    }
  })

  const initCaptcha = () => {
    model.value = nullValue.value
    Provider.value = new form$.value.options.providers.captcha[provider.value](input.value, captchaOptions.value, el$.value)
  }

  const destroyCaptcha = () => {
    resetValidators()
    Provider.value.reset()
    model.value = nullValue.value
    Provider.value = null
  }

  // ================ HOOKS ===============

  onMounted(() => {
    if (shouldVerify.value) {
      initCaptcha()
    }
  })

  // ============== WATCHERS ==============

  watch(shouldVerify, async (n, o) => {
    if (!n) {
      destroyCaptcha()
    }

    else if (n) {
      await nextTick()
      initCaptcha()
      initValidation()
    }
  })
  
  return {
    Provider,
    captchaOptions,
    shouldVerify,
  }
}

export default base