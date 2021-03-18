import Validator from './../validator'

export default class dimensions extends Validator {
  get isAsync() {
    return true
  }

  async readImage(inputFile) {
    let reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("File cannot be parsed."));
      };

      reader.onloadend = (event) => {
        resolve(event.target.result);
      };

      reader.readAsDataURL(inputFile);
    })
  }

  async loadImage(value) {
    let source = await this.readImage(value)

    let image = new Image();

    return new Promise((resolve, reject) => {
      image.onerror = () => {
        reject(new DOMException("Image could not be loaded."));
      }

      image.onload = (event) => {
        resolve(event.target);
      }

      image.src = source
    })
  }

  hasAttribute(attribute) {
    return Object.keys(this.attributes).map(a=>a.toLowerCase()).indexOf(attribute) !== -1
  } 

  async check(value) {
    if (this.isFile && !value) {
      return true
    }

    if (!this.isFile || !(value instanceof File)) {
      return false
    }

    let image = await this.loadImage(value)

    if (this.hasAttribute('min_width')) {
      if (image.width < this.attributes['min_width']) {
        return false
      }
    }

    if (this.hasAttribute('max_width')) {
      if (image.width > this.attributes['max_width']) {
        return false
      }
    }

    if (this.hasAttribute('min_height')) {
      if (image.height < this.attributes['min_height']) {
        return false
      }
    }

    if (this.hasAttribute('max_height')) {
      if (image.height > this.attributes['max_height']) {
        return false
      }
    }

    if (this.hasAttribute('width')) {
      if (image.width != this.attributes['width']) {
        return false
      }
    }

    if (this.hasAttribute('height')) {
      if (image.height != this.attributes['height']) {
        return false
      }
    }

    if (this.hasAttribute('ratio')) {
      let ratio = this.attributes['ratio']
      let precision = 1 / (Math.min(image.width, image.height) + 1)

      let numerator = /\//.test(ratio) ? ratio.split('/')[0] : ratio
      let denominator = /\//.test(ratio) ? ratio.split('/')[1] : 1
      
      if (Math.abs(numerator / denominator - image.width / image.height) > precision) {
        return false
      }
    }

    return true
  }
}