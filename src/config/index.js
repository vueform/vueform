const config = {
  vue: 3,

  theme: 'default',

  languages: {
    en: {
      label: 'English',
      code: 'en'
    },
    fr: {
      label: 'French',
      code: 'fr',
    }
  },

  formData(form$) {
    return form$.output
  },

  floatPlaceholder: true,

  displayErrors: true,

  language: 'en',

  labels: false,

  columns: {
    element: 12,
    label: 2,
    field: 10,
  },

  validateOn: 'change|submit|step',

  axios: {},

  beforeSend: null,

  methods: {
    process: 'post',
    file: {
      temp: 'post',
      removeTemp: 'post',
      remove: 'post',
    },
    validators: {
      active_url: 'get',
      unique: 'get',
      exists: 'get',
    },
    elements: {
      trix: {
        attachment: 'post'
      }
    },
  },

  endpoints: {
    process: '/laraform/process',
    file: {
      temp: '/laraform/file/upload-temp',
      removeTemp: '/laraform/file/remove-temp',
      remove: '/laraform/file/remove',
    },
    validators: {
      active_url: '/active_url',
      unique: '/',
      exists: '/',
    },
    elements: {
      trix: {
        attachment: '/trix/attachment'
      }
    }
  },

  services: {
    algolia: {
      app_id: 'plD1GPOB1JIC',
      api_key: '1f70532b07910d801387a12ea998f035',
    }
  },

  i18n: null,

  fallbackLocale: 'en',
}

export default config