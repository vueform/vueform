import CaptchaProviderInterface from './CaptchaProviderInterface'

export default class Recaptcha2Provider extends CaptchaProviderInterface {
  src = 'https://www.google.com/recaptcha/api.js?onload=recaptcha2LoadCallback&render=explicit'
  element
  options = {}
  el$ = {}
  id
  rendered = false
  interval

  constructor(element, options, el$) {
    super(element, options, el$)
    this.element = element
    this.options = options
    this.el$ = el$
    this.init()
  }

  init() {
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
    if (this.isCaptchaLoaded()) {
      this.render()
      return
    }

    if (this.isScriptAdded()) {
      this.interval = setInterval(() => {
        if (this.isCaptchaLoaded()) {
          this.render()
          clearInterval(this.interval)
        }
      }, 500)

      return
    }

    window.recaptcha2LoadCallback = () => {
      this.render()
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

  isCaptchaLoaded() {
    return typeof window !== 'undefined' && window.grecaptcha
  }

  isScriptAdded() {
    const scripts = document.getElementsByTagName('script')

    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src.includes('https://www.google.com/recaptcha/api.js')) {
        return true
      }
    }

    return false
  }
}