
const config = {
  /**
   * General
   */
  env: 'development',

  /**
   * Theme & layout
   */
  theme: {},
  templates: {},
  classes: {},
  classHelpers: true,
  columns: {
    container: 12,
    label: 12,
    wrapper: 12,
  },
  forceLabels: false,
  floatPlaceholders: true,
  displayErrors: true,
  displayMessages: true,

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
    return form$.requestData
  },
  beforeSend: null,
  axios: {},

  /**
   * Location
   */
  locationProvider: 'google',
  services: {
    algolia: {
      app_id: '',
      api_key: '',
    }
  },
}

export default config