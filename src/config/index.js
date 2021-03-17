const config = {
  vue: 3,

  extensions: [],
  
  themes: {},

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

  displayErrors: true,

  language: 'en',

  elements: {},
  
  components: {},

  rules: {},

  labels: false,

  columns: {
    element: 12,
    label: 12,
    field: 12,
  },

  validateOn: 'change|submit|step',

  methods: {
    process: 'post',
    file: {
      uploadTemp: 'post',
      removeTemp: 'post',
      remove: 'post',
    }
  },

  endpoints: {
    process: '/laraform/process',
    file: {
      uploadTemp: '/laraform/file/upload-temp',
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