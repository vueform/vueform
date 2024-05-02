import Recaptcha2Provider from './../providers/captcha/Recaptcha2Provider'

const config = {
  /**
   * General
   */
  env: 'development',
  plugins: [],
  elements: [],

  /**
   * Theme & layout
   */
  theme: {},
  templates: {},
  views: {},
  size: 'md',
  addClasses: {},
  removeClasses: {},
  replaceClasses: {},
  overrideClasses: {},
  presets: {},
  usePresets: [],
  classHelpers: false,
  columns: {},
  forceLabels: false,
  floatPlaceholders: true,
  displayErrors: true,
  displayMessages: true,
  breakpoints: ['sm', 'md', 'lg', 'xl', '2xl'],

  /**
   * Localization
   */
  languages: {
    en: 'English',
  },
  language: 'en',
  locales: {},
  locale: null,
  fallbackLocale: 'en',

  /**
   * Sorting
   */
  orderFrom: 1,

  /**
   * Validation
   */
  rules: {},
  validateOn: 'change|step',

  /**
   * Data
   */
  forceNumbers: false,

  /**
   * Submitting
   */
  endpoints: {
    submit: {
      url: '/vueform/process',
      method: 'post',
    },
    uploadTempFile: {
      url: '/vueform/file/upload-temp',
      method: 'post',
    },
    removeTempFile: {
      url: '/vueform/file/remove-temp',
      method: 'post',
    },
    removeFile: {
      url: '/vueform/file/remove',
      method: 'post',
    },
    attachment: {
      url: '/vueform/editor/attachment',
      method: 'post',
    },
    activeUrl: {
      url: '/vueform/validators/active_url',
      method: 'post',
    },
    unique: {
      url: '/vueform/validators/unique',
      method: 'post',
    },
    exists: {
      url: '/vueform/validators/exists',
      method: 'post',
    },
  },
  formData(form$) {
    return form$.convertFormData({
      ...form$.requestData,
      ...(form$.formKey ? {
        formKey: form$.formKey
      } : {})
    })
  },
  beforeSend: null,
  axios: {},

  /**
   * Services
   */
  locationProvider: 'google',
  providers: {
    captcha: {
      recaptcha2: Recaptcha2Provider,
    }
  },
  useProviders: {
    captcha: 'recaptcha2'
  },
  providerOptions: {
    recaptcha2: {
      sitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    }
  },
  services: {
    algolia: {
      app_id: '',
      api_key: '',
    },
  },
}

export default config