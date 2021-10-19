
const config = {
  /**
   * Theme & layout
   */
  components: {},
  classes: {},
  columns: {
    element: 12,
    label: 3,
    field: 12,
  },
  forceLabels: false,
  displayErrors: true,
  floatPlaceholders: true,
  displayMessages: true,

  /**
   * Localization
   */
  languages: {
    en: 'English',
    fr: 'French'
  },
  language: 'en',
  locales: {},
  fallbackLocale: 'en',
  locale: null,

  /**
   * Sorting
   */
  orderFrom: 1,

  /**
   * Validation
   */
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
      app_id: 'plD1GPOB1JIC',
      api_key: '1f70532b07910d801387a12ea998f035',
    }
  },
}

export default config