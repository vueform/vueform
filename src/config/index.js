
const config = {
  /**
   * Theme & layout
   */
  theme: {},
  components: {},
  classes: {},
  columns: {
    element: 12,
    label: 3,
    field: 12,
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
      url: '/laraform/process',
      method: 'post',
    },
    uploadTempFile: {
      url: '/laraform/file/upload-temp',
      method: 'post',
    },
    removeTempFile: {
      url: '/laraform/file/remove-temp',
      method: 'post',
    },
    removeFile: {
      url: '/laraform/file/remove',
      method: 'post',
    },
    attachment: {
      url: '/editor/attachment',
      method: 'post',
    },
    activeUrl: {
      url: '/validators/active_url',
      method: 'post',
    },
    unique: {
      url: '/validators/unique',
      method: 'post',
    },
    exists: {
      url: '/validators/exists',
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