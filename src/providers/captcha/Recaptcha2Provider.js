export default class Recaptcha2Provider {
  src = 'https://www.google.com/recaptcha/api.js?onload=recaptcha2LoadCallback&render=explicit'
  element
  options = {}
  el$ = {}
  id
  rendered = false

  constructor(element, options, el$) {
    this.element = element
    this.options = options
    this.el$ = el$
    this.init()
  }

  init() {
    window.recaptcha2LoadCallback = () => {
      this.render()
    }

    this.loadScript()
  }

  render() {
    this.id = window.grecaptcha.render(this.element, {
      callback: (token) => {
        this.el$.update(token)
      },
      'expired-callback': () => {
        this.el$.clear()
      },
      'error-callback': () => {
        this.el$.clear()
      },
      ...this.options,
    })

    this.rendered = true
  }

  reset() {
    if (!this.rendered) {
      return
    }
    
    return window.grecaptcha.reset(this.id)
  }

  getResponse() {
    return window.grecaptcha.getResponse(this.id)
  }

  async validate(response) {
    return !!response
  }

  loadScript() {
    if (this.isScriptLoaded()) {
      this.render()
      return
    }

    var script = document.createElement('script')
    script.src = this.src
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    script.onload = () => {}

    script.onerror = () => {
      console.error('Error loading reCAPTCHA!')
    }
  }

  isScriptLoaded() {
    const scripts = document.getElementsByTagName('script')

    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src === this.src) {
        return true
      }
    }

    return false
  }
}